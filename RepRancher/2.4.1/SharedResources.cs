using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Conveyor_JSONRPC_API._2._4._1;
using Conveyor_JSONRPC_API._2._4._1.Types;

namespace RepRancher._2._4._1
{
    //This is a temporary class where I toss all shared resources as I think about how to go about refactoring.
    //Though using this like a Struct isnt a half bad idea, so I may go that route in order to provide easy 
    //accesss to thread shared resources.
    public class SharedResources
    {
        
        /*
         * int rpcid, 
         * string methodName
         */
        public ConcurrentDictionary<int, Command> CommandHistory { get; set; }

        /*
         * This is a list of the current ports known to be attached to the Conveyor Service
         */
        public ConcurrentDictionary<string, ConveyorPort> CurrentPorts { get; set; }

        /*
         * This is a list of the current printers known to the Conveyor Service
         */
        public ConcurrentDictionary<string, ConveyorPrinter> CurrentPrinters { get; set; }

        /*
         * This is a list of jobs known to the Conveyor Service
         */
        public ConcurrentDictionary<int, ConveyorJob> CurrentJobs { get; set; }

        /*
         * This is a list of Conveyor JobIDs indexed by MakerFarm Jobs
         */
        public ConcurrentDictionary<int, int> MakerFarmToConveyorJobIds { set; get; }

        /*
         * This is a list of MakerFarm JobIDs indexed by RPCIDs
         */
        //public ConcurrentDictionary<int, int> RPCIDtoMakerFarmJobIds { get; set; }

        ////////////////////////////////////////////////////////////////////////////////////////

        /*
         * This is the TCP Client used to connect to the Conveyor Service
         */
        public System.Net.Sockets.TcpClient tcpClient { get; set; }

        /*
         * This is the Data Stream where data is written to and read from Conveyor
         */
        public System.IO.Stream dataStream;

        /*
         * This is an int used to track the replies from conveyor and pair them to methods that were called.
         */
        public ConcurrentRPCID rpcid { get; set; }

        /*
         * Write to Conveyor Mutex
         */
        System.Threading.Mutex WriteToConveyorLock;

        /*
         * This controls access to the input recived string from conveyor between the ConveyorListenerStream and ConveyorListenerParser
         */
        public System.Threading.Mutex ConveyorReplyMutex { get; set; }

        /*
         * This string contains the input recived from conveyor and shares it between the ConveyorListenerStream and ConveyorListenerParser
         */
        public string repliesFromConveyor { get; set; }

        /*
         * Mark content as being available
         */
        public bool contentAvailable;

        /*
         * IP Endpoint of Conveyor
         */
        System.Net.IPEndPoint ConveyorIPEndpoint;

        public SharedResources(System.Net.IPAddress ConveyorIP, int ConveyorPort)
        {
            ConveyorIPEndpoint = new System.Net.IPEndPoint(ConveyorIP, ConveyorPort);
            tcpClient = new System.Net.Sockets.TcpClient();
            tcpClient.Connect(ConveyorIPEndpoint);
            dataStream = tcpClient.GetStream();
            WriteToConveyorLock = new System.Threading.Mutex();
            CommandHistory = new ConcurrentDictionary<int,Command>();
            CurrentPorts = new ConcurrentDictionary<string,ConveyorPort>();
            CurrentPrinters = new ConcurrentDictionary<string, ConveyorPrinter>();
            CurrentJobs = new ConcurrentDictionary<int, ConveyorJob>();
            MakerWareToConveyorJobIds = new ConcurrentDictionary<int, int>();
            RPCIDtoMakerFarmJobIds = new ConcurrentDictionary<int, int>();
            rpcid = new ConcurrentRPCID();
            ConveyorReplyMutex = new System.Threading.Mutex();
            repliesFromConveyor = "";
            contentAvailable = true;
        }

        public bool ResetConveyorConnection()
        {
            //Ensure no Commands can be sent to the Conveyor Service
            WriteToConveyorLock.WaitOne();

            //Ensure other thread doesnt try parsing while the connection is broken.
            ConveyorReplyMutex.WaitOne();

            //Ensure the parser knows there is no string to parse.
            contentAvailable = false;
            try
            {
                //Closes and Disposes of old connection
                tcpClient.Close();

                //Creates new TCP Client
                tcpClient = new System.Net.Sockets.TcpClient();

                //Attempt Connection to Conveyor
                tcpClient.Connect(ConveyorIPEndpoint);

                //Fetch the new connection stream
                dataStream = tcpClient.GetStream();                
            }
            catch
            {
                //Connection failed!
                return false;
            }
            return true;
        }

        public bool IssueCommand(Command Command)
        {
            WriteToConveyorLock.WaitOne();
            if (CommandHistory.TryAdd(Command.rpcid, Command))
            {
                try
                {
                    byte[] bytesToWrite = Encoding.ASCII.GetBytes(Command.GetJSONString());
                    dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                    dataStream.Flush();
                    return true;
                }
                catch
                {
                    Console.Error.WriteLine(DateTime.Now + " : Error - Could not communicate with Conveyor Service.");
                    Console.Error.WriteLine(Command.GetJSONString());
                    Console.Error.WriteLine();
                    WriteToConveyorLock.ReleaseMutex();
                    return false;
                }
            }
            WriteToConveyorLock.ReleaseMutex();
            Console.Error.WriteLine(DateTime.Now + " : Error - Could Command could not be added to Command History:");
            Console.Error.WriteLine();
            return false;
        }
    }
}
