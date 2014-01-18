using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Threading;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Conveyor_JSONRPC_API;
using Conveyor_JSONRPC_API.Types;

namespace RepRancher
{
    class ConveyorService
    {
        IPEndPoint ipEndPoint;
        TcpClient tcpClient;
        Stream dataStream;
        Thread t1;
        Thread t2;
        Thread t3;
        ConveyorListenerService ConveyorListenerServer;
        ConveyorCommandService ConveyorCommandServer;
        System.Timers.Timer ErrorFlush;

       
        /*
         * This is a list of the commands queued for printing.
         */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string[]> methodHistory;

        /*
         * FileStream to Associated Conveyor Error Log
         */
        FileStream ostrm;

        /*
         * StreamWriter used to communicate log errors to the file.
         */
        StreamWriter errorLog;

        /*
         * This contains and controls the current RPCID used by the Threads
         */
        ConcurrentRPCID rpcid;


        public ConveyorService(string IPaddress, int PortNumber)
        {
            rpcid = new ConcurrentRPCID();
            commandQueue = new ConcurrentQueue<string>();
            methodHistory = new ConcurrentDictionary<int, string[]>();
            try
            {
                ostrm = new FileStream("./error.txt", FileMode.Create, FileAccess.Write);
                errorLog = new StreamWriter(ostrm);
                System.Console.SetError(errorLog);
                Console.WriteLine("Opened Connection to Error Log");
                Console.WriteLine();
                Console.Error.WriteLine("Opening Test Message for Log");
                errorLog.Flush();
                ErrorFlush = new System.Timers.Timer(2000);
                ErrorFlush.Elapsed += new System.Timers.ElapsedEventHandler(OnTimedEvent);
                ErrorFlush.Enabled = true;
            }
            catch (Exception e)
            {
                Console.WriteLine("Cannot open ./error.txt for writing! This session will not have any error logs!");
                Console.WriteLine(e.Message);
                return;
            }

            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            ConveyorListenerServer = new ConveyorListenerService(tcpClient, dataStream, methodHistory);
            ConveyorCommandServer = new ConveyorCommandService(tcpClient, dataStream, commandQueue, methodHistory, rpcid);
            t1 = new Thread(new ThreadStart(ConveyorListenerServer.ListenerThreadRun));
            t2 = new Thread(new ThreadStart(ConveyorListenerServer.ProcessorThreadRun));
            t3 = new Thread(new ThreadStart(ConveyorCommandServer.CommandThreadRun));
            t1.Start();
            t2.Start();
            t3.Start();
        }

        /*
         * Used to parse and run commands from users and webservers.
         */
        public string InvokeCommand(string command)
        {
            string[] Command = command.Split(' ');
            string outPut = "";
            int rpcID = 0;
            if (Command[0].Equals("help"))
            {
                //Returns a string of help data giving the user a list of what commands are available, and what they accomplish
                return "So far a hand full of methods have been made available. \n Should you need more details on a specific command, type: \n help command" +
                    "\n \n \n Available Commands: \n \n getprinters \n getjobs \n";
            } if (Command[0].Equals("getprinters"))
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPrinters(rpcID);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }
            else if (Command[0].Equals("getjobs"))
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.GetJobs(rpcID);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }/*
            else if (Command[0].Equals("help"))
            {

            }*/
            else
            {
                //if this is returned, no method is run due to found invalidity
                return "Invalid Command: " + Command[0] + "\n Type help for information on available commands";
            }

            //Should only get here if a valid command was issued, add command to history and queue it up.
            if (!methodHistory.TryAdd(rpcID, Command))
            {
                return "This Command has previously been issued!";
            }
            commandQueue.Enqueue(command);
            return outPut; //Command queued up and added to the issue history!
        }

        private void OnTimedEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            errorLog.Flush();
        }
    }

    class ConcurrentRPCID{

        int RPCID;
        Mutex RPCLock;

        public ConcurrentRPCID() : this(9000){
        }

        public ConcurrentRPCID(int startingRpcID){
            RPCID = startingRpcID;
            RPCLock = new Mutex();
        }

        public int PeekRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCLock.ReleaseMutex();
            return ret;
        }

        public int FetchRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCID++;
            RPCLock.ReleaseMutex();
            return ret;
        }

    }

    class ConveyorCommandService
    {
        /*
         * This TCP Client is the connection to the Conveyor Service that is being Monitored
         */
        TcpClient tcpClient;

        /*
         * This is the TCP connection that the listener reads and Parses
         */
        Stream dataStream;

        /*
        * This is a list of the commands queued for printing.
        */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string[]> methodHistory;

        /*
         * This is an int used to track the replies from conveyor and pair them to methods that were called.
         */
        ConcurrentRPCID rpcid;

        public ConveyorCommandService(TcpClient TcpClient, Stream DataStream, ConcurrentQueue<string> Commands, ConcurrentDictionary<int, string[]> History, ConcurrentRPCID RpcId)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            commandQueue = Commands;
            methodHistory = History;
            rpcid = RpcId;
        }

        public void CommandThreadRun()
        {
            while (true)
            {
                //check with makerfarm and see if there are any assigned jobs

                //process commands in the queue:
                string command;
                while (commandQueue.TryDequeue(out command))
                {
                    byte[] bytesToWrite = Encoding.ASCII.GetBytes(command);
                    dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                    dataStream.Flush();
                }              
                
            }
        }

    }

    
}
