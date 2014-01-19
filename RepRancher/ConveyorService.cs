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
        /*
         * This is the IP Address of the Conveyor Service
         */
        IPEndPoint ipEndPoint;

        /*
         * This is the TCP Client used to connect to the Conveyor Service
         */
        TcpClient tcpClient;

        /*
         * This is the Data Stream where data is written to and read from Conveyor
         */
        Stream dataStream;

        /*
         * These threads are ised to run the ConveyorListenerServer and ConveyorCommandServer
         */
        Thread t1;
        Thread t2;
        Thread t3;

        /*
         * This Class runs on two threads, one of which continually listens to Conveyor looking for input and the other parses and processes the Data Recieved.
         */
        ConveyorListenerService ConveyorListenerServer;

        /*
         * This Class runs on a thread to process commands recieved from the user and from MakerFarm.
         */
        ConveyorCommandService ConveyorCommandServer;

        /*
         * This Timer is used to flush errors to the text file in a timely manner, to make sure that a crash doesnt get missed.
         */
        System.Timers.Timer ErrorFlush;

        /*
         * This Timer is used to send a simple hello command, to test that conveyor is still running.
         */
        System.Timers.Timer KeepAlive;
       
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

        /*
         * This is a list of the current ports known to be attached to the Conveyor Service
         */
        List<port> CurrentPorts;

        /*
         * This is a list of the current printers known to the Conveyor Service
         */
        List<printer> CurrentPrinters;

        /*
         * This is a list of jobs known to the Conveyor Service
         */
        List<job> CurrentJobs;


        public ConveyorService(string IPaddress, int PortNumber)
        {
            CurrentPorts = new List<port>();
            CurrentPrinters = new List<printer>();
            CurrentJobs = new List<job>();

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
            KeepAlive = new System.Timers.Timer(10000);
            KeepAlive.Elapsed += new System.Timers.ElapsedEventHandler(KeepAliveEvent);
            KeepAlive.Enabled = true;
        }

        public void KeepAliveEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            InvokeCommand("hello");
        }

        public bool Valid()
        {
            return t1.IsAlive && t2.IsAlive && t3.IsAlive;
        }

        public void Dispose()
        {
            Console.WriteLine("Ending Keep Alive Timer");
            KeepAlive.Stop();
            KeepAlive.Enabled = false;
            Console.WriteLine("Telling Listener Service to close up shop.");
            ConveyorListenerServer.TriggerDispose();
            Console.WriteLine("Telling Conveyor Hello-Goodbye.");
            InvokeCommand("hello");
            Console.WriteLine("Joining First Thread.");
            t1.Join();
            Console.WriteLine("Joining Second Thread.");
            t2.Join();
            Console.WriteLine("Telling Listener Service to close up shop.");
            ConveyorCommandServer.TriggerDispose();            
            Console.WriteLine("Joining Third Thread.");
            t3.Join();
            Console.WriteLine("Closing Data Stream.");
            dataStream.Close();
            Console.WriteLine("Closing TCP Connection.");
            tcpClient.Close();
            Console.WriteLine("Ending the Error Log Timer.");
            ErrorFlush.Stop();
            ErrorFlush.Enabled = false;
            Console.WriteLine("Closing Error Log Stream.");
            errorLog.Close();
            Console.WriteLine("Closing Error Log File Connection.");
            ostrm.Close();
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
                if (Command.Length > 1)
                {
                    if(Command[1].Equals("getjobs")){
                        return "The getjobs command does not use any parameters. It returns an array of job objects of any jobs that conveyor has dealt with this session.";
                    }else if(Command[1].Equals("getprinters")){
                        return "The getprinters command does not use any parameters. It return an array of printer objects of any printer conveyor is currently watching.";
                    }else if(Command[1].Equals("getports")){
                        return "The getports command does not use any parameters. It returns an array of port objects that conveyor currently sees. Connecting to these objects then allows for the use of affiliated printers.";
                    }else if(Command[1].Equals("connect")){
                        return "The connect command requires the following parameters: \n " + 
                            "-port_name [portname] ie. -portname COM3:9153:45077 \n " + 
                            "The following parameters are optional: \n " + 
                            "-driver_name [drivername] ie. -driver_name s3g \n " + 
                            "-machine_name [machinename] ie. -machine_name 23C1:B015:7523733353635171E0D1 \n " + 
                            "-persistent [boolean] ie. -persistent false \n " + 
                            "-profile_name [profilename] ie. -profile_name Replicator2";
                    }else if(Command[1].Equals("hello")){{
                        return "The hello command does not use any parameters. It returns a world reply if successfull, and should be called to the conveyor service first before any other command.";
                    }
                    }else if(Command[1].Equals("restart")){
                        return "The restart command does not use any parameters. It disposes of the current connection to the conveyor service and reconnects using a new set of threads.";
                    }else if(Command[1].Equals("exit")){
                        return "The exit command does not use any parameters. It closes the connection to conveyor and cause RepRancher to exit.";
                    }else if(Command[1].Equals("getjobs")){

                    }
                    
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }else{
                    //Returns a string of help data giving the user a list of what commands are available, and what they accomplish
                    return "So far a hand full of methods have been made available. \n Should you need more details on a specific command, type: \n help command \n \n" +
                        "Commands Specific to RepRancher: \n exit \n restart" +
                    "\n \n Available Conveyor Commands: \n hello \n getprinters \n getjobs \n getports \n connect \n";
                }
                
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
            }
            else if (Command[0].Equals("getports"))
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
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPorts(rpcID);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }
            else if (Command[0].Equals("connect"))
            {
                string port_name = null;
                string driver_name = null;
                string machine_name = null;
                bool persistent = false;
                string profile_name = null;

                if (Command.Length < 3 || Command.Length > 10)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";                    
                }
                else
                {
                    for(int i = 0; i < Command.Length; i++){
                        string cmd = Command[i];
                        if(cmd.Equals("-port_name")){
                            port_name = Command[i++];
                        }else if(cmd.Equals("-driver_name")){
                            driver_name = Command[i++];
                        }else if(cmd.Equals("-machine_name")){
                            machine_name = Command[i++];
                        }else if(cmd.Equals("-persistent")){
                            persistent = bool.Parse(Command[i++]);
                        }else if(cmd.Equals("-profile_name")){
                            profile_name = Command[i++];
                        }
                    }
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.Connect(rpcID, driver_name, machine_name, persistent, port_name, profile_name);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }
            else if (Command[0].Equals("hello"))//
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
                    command = Conveyor_JSONRPC_API.ServerAPI.Hello(rpcID);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }
            else if (Command[0].Equals("durp"))//
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
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPorts(rpcID);
                    outPut = "Command " + Command[0] + " successfull! RPCID : " + rpcID;
                }
            }
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

        /*
         * Mutex Protects the dispose variable
         */
        Mutex DisposeMutex;

        /*
         * Determines if the thread should end.
         */
        bool Dispose;

        public ConveyorCommandService(TcpClient TcpClient, Stream DataStream, ConcurrentQueue<string> Commands, ConcurrentDictionary<int, string[]> History, ConcurrentRPCID RpcId)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            commandQueue = Commands;
            methodHistory = History;
            rpcid = RpcId;
            DisposeMutex = new Mutex();
            Dispose = false;
        }

        public void CommandThreadRun()
        {
            while (true)
            {
                DisposeMutex.WaitOne();
                if (Dispose)
                {
                    DisposeMutex.ReleaseMutex();
                    Console.WriteLine("Command thread returning.");
                    return;
                }
                DisposeMutex.ReleaseMutex();
                //check with makerfarm and see if there are any assigned jobs

                //process commands in the queue:
                string command;
                while (commandQueue.TryDequeue(out command))
                {
                    try
                    {
                        byte[] bytesToWrite = Encoding.ASCII.GetBytes(command);
                        dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                        dataStream.Flush();
                    }
                    catch
                    {
                        Console.WriteLine("Command thread returning.");
                        return;
                    }
                }  
            }
        }

        public void TriggerDispose()
        {
            DisposeMutex.WaitOne();
            Dispose = true;
            DisposeMutex.ReleaseMutex();
        }

    }

    
}
