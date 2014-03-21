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
        ConcurrentDictionary<int, Command> CommandHistory;

        /*
         * This is a list of the current ports known to be attached to the Conveyor Service
         */
        ConcurrentDictionary<string, ConveyorPort> CurrentPorts;

        /*
         * This is a list of the current printers known to the Conveyor Service
         */
        ConcurrentDictionary<string, ConveyorPrinter> CurrentPrinters;

        /*
         * This is a list of jobs known to the Conveyor Service
         */
        ConcurrentDictionary<int, ConveyorJob> CurrentJobs;

        /*
         * This is a list of Conveyor JobIDs indexed by MakerFarm Jobs
         */
        ConcurrentDictionary<int, int> MakerWareToConveyorJobIds;

        /*
         * This is a list of MakerFarm JobIDs indexed by RPCIDs
         */
        ConcurrentDictionary<int, int> RPCIDtoMakerFarmJobIds;

        ////////////////////////////////////////////////////////////////////////////////////////

        /*
         * This is the TCP Client used to connect to the Conveyor Service
         */
        System.Net.Sockets.TcpClient tcpClient;

        /*
         * This is the Data Stream where data is written to and read from Conveyor
         */
        System.IO.Stream dataStream;

        /*
         * This is an int used to track the replies from conveyor and pair them to methods that were called.
         */
        ConcurrentRPCID rpcid;

        /*
         * Write to Conveyor Mutex
         */
        System.Threading.Mutex WriteToConveyorLock;

        public SharedResources(System.Net.IPAddress ConveyorIP, int ConveyorPort)
        {
            tcpClient = new System.Net.Sockets.TcpClient();
            tcpClient.Connect(new System.Net.IPEndPoint(ConveyorIP, ConveyorPort));
            dataStream = tcpClient.GetStream();
            WriteToConveyorLock = new System.Threading.Mutex();
            CommandHistory = new ConcurrentDictionary<int,Command>();
            CurrentPorts = new ConcurrentDictionary<string,ConveyorPort>();
            CurrentPrinters = new ConcurrentDictionary<string, ConveyorPrinter>();
            CurrentJobs = new ConcurrentDictionary<int, ConveyorJob>();
            MakerWareToConveyorJobIds = new ConcurrentDictionary<int, int>();
            RPCIDtoMakerFarmJobIds = new ConcurrentDictionary<int, int>();
            rpcid = new ConcurrentRPCID();
        }

        public void IssueCommand(string Command)
        {

        }

        public void CommandThreadRun()
        {
            System.Console.WriteLine("Command thread starting");
            while (true)
            {
                //process commands in the queue:
                string command;
                /*
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
                 */
            }
        }

    }
}
