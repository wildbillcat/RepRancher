using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Concurrent;
using System.Net.Sockets;
using System.IO;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API
{
    public abstract class ConveyorService
    {

        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IJob> jobs;
        /// <summary>
        /// This is a list of all Jobs tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IJob> Jobs
        {
            get
            {
                return jobs;
            }
        }

        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IPrinter> printers;
        /// <summary>
        /// This is a list of all Printers tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IPrinter> Printers
        {
            get
            {
                return printers;
            }
        }

        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IPort> ports;
        /// <summary>
        /// This is a list of all Ports tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<string, Conveyor_JSONRPC_API.IPort> Ports
        {
            get
            {
                return ports;
            }
        }

        ConcurrentDictionary<int, string> commandHistory; //RPCID, MethodName
        /// <summary>
        /// This is a list of all commands issued by RepRancher to Conveyor
        /// </summary>
        ConcurrentDictionary<int, string> CommandHistory
        {
            get
            {
                return commandHistory;
            }
        }


        /// <summary>
        /// This is used to track if the Command sent to Conveyor has recieved a reply.
        /// </summary>
        ConcurrentDictionary<int, bool> commandStatus; //RPCID, MethodName

        /// <summary>
        /// This is the TCP Client used to connect to the Conveyor Service
        /// </summary>
        TcpClient tcpClient;

        /// <summary>
        /// This is the Data Stream where data is written to and read from Conveyor
        /// </summary>
        Stream dataStream;

        /// <summary>
        /// This contains the input recived from conveyor
        /// </summary>
        ConcurrentQueue<String> repliesFromConveyor;

        ConveyorRpcId RPCID;

        /// <summary>
        /// Used to protect the Write Stream
        /// </summary>
        Object ConveyorWriteLock;

        System.Threading.Thread conveyorListenerThread;
        System.Threading.Thread conveyorParserThread;

        public ConveyorService(System.Net.IPAddress ConveyorIP, int ConveyorPort)
        {
            jobs = new ConcurrentDictionary<string,IJob>();
            printers = new ConcurrentDictionary<string,IPrinter>();
            ports = new ConcurrentDictionary<string,IPort>();
            commandHistory = new ConcurrentDictionary<int,string>();
            repliesFromConveyor = new ConcurrentQueue<string>();
            RPCID = new ConveyorRpcId();
            ConveyorWriteLock = new Object();
            tcpClient = new TcpClient();
            System.Net.IPEndPoint ConveyorIPEndpoint = new System.Net.IPEndPoint(ConveyorIP, ConveyorPort);
            tcpClient = new System.Net.Sockets.TcpClient();
            tcpClient.Connect(ConveyorIPEndpoint);
            dataStream = tcpClient.GetStream();

            //Starts a Listener Thread to Capture Input from Conveyor
            conveyorListenerThread = new System.Threading.Thread(new System.Threading.ThreadStart(this.ConveyorListenerThread));
            conveyorListenerThread.Start();

            //Starts Parsing Thread to determine what conveyor has said.
            conveyorParserThread = new System.Threading.Thread(new System.Threading.ThreadStart(this.ConveyorParserThread));
            conveyorParserThread.Start();

            //Send Hello to conveyor for Startup
            Hello();
        }

        /// <summary>
        /// Sends a Command to Conveyor: Return True for Success, False for Fail
        /// </summary>
        public bool SendCommand(string MethodName, List<JProperty> Params)
        {
            int CommandRPCID = RPCID.TryGetID();
            string command = BuildRPCString(CommandRPCID, MethodName, Params);
            //Adds method ID to the Status
            if (commandStatus.TryAdd(CommandRPCID, false) && commandHistory.TryAdd(CommandRPCID, MethodName))
            {
                //Protects outgoing write stream
                lock (ConveyorWriteLock)
                {
                    try
                    {
                        byte[] bytesToWrite = Encoding.ASCII.GetBytes(command);
                        dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                        dataStream.Flush();
                    }
                    catch
                    {
                        Console.Error.WriteLine(DateTime.Now + " : Error - Could not communicate with Conveyor Service.");
                        Console.Error.WriteLine(command);
                        Console.Error.WriteLine();
                        return false;
                    }
                }//End Lock
            }//End if
            else
            {
                return false;
            }
            
            //Implement some sort of logic for detecting the return?
            bool MethodReturned;
            commandStatus.TryGetValue(CommandRPCID, out MethodReturned);
            DateTime WaitStart = DateTime.Now;
            while(MethodReturned==false){
                //This loop will cause the method to wait until it's return, or for the call to time out.
                new NotImplementedException();
            }
            return MethodReturned;
        }

        /// <summary>
        /// Resets the Connection to Conveyor
        /// </summary>
        public abstract void ResetConveyorConnection();

        /// <summary>
        /// Builds the RPC String to send to conveyor
        /// </summary>
        string BuildRPCString(int rpcid, string MethodName, List<JProperty> Params)
        {
            JObject rpcCall = new JObject();
            rpcCall.Add(new JProperty("id", rpcid));
            rpcCall.Add(new JProperty("jsonrpc", "2.0"));
            rpcCall.Add(new JProperty("method", MethodName));
            // params is a collection values which the method requires..
            if (Params.Count == 0)
            {
                rpcCall.Add(new JProperty("params", new JArray()));
            }
            else
            {
                JObject props = new JObject();
                // add the props in the reverse order!
                foreach (JProperty param in Params)
                {
                    // add the params
                    props.Add(param);
                }
                rpcCall.Add(new JProperty("params", props));
            }

            // serialize json for the request
            return JsonConvert.SerializeObject(rpcCall);
        }

        /// <summary>
        /// Sends hello command to conveyor for startup
        /// </summary>
        abstract void Hello();

        /// <summary>
        /// Threat recieves information from Conveyor and queues it for parsing
        /// </summary>
        private void ConveyorListenerThread()
        {
            while (true)
            {
                try
                {
                    byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                    int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                    string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                    repliesFromConveyor.Enqueue(Reply);
                }
                catch
                {
                    Console.Error.WriteLine("Connection to Conveyor Failed.");
                }
            }
        }

        /// <summary>
        /// Parses information recieved from conveyor
        /// </summary>
        private void ConveyorParserThread()
        {
            //This String holds the JSON sent by Conveyor
            string reply;
            while (true)
            {
                while (repliesFromConveyor.TryDequeue(out reply))
                {
                    try
                    {
                        List<Task> tasks = new List<Task>();
                        string jsonObj;
                        int endobj = 0;
                        int startobj = 0;
                        endobj = reply.IndexOf("}{", endobj);
                        //If Multiple Objects Were sent, Parse them out
                        while (endobj > 0)
                        {
                            jsonObj = reply.Substring(startobj, endobj - startobj);
                            Task t = Task.Run(() =>
                            {
                                if (ProcessJSONMessage(jsonObj))
                                {
                                    //Success!
                                }
                                else
                                {
                                    System.Console.Error.WriteLine(DateTime.Now.ToString() + ": Something went Wrong and the JSON object could not be processed");
                                    System.Console.Error.WriteLine(jsonObj);
                                    System.Console.Error.WriteLine();
                                }
                            });
                            tasks.Add(t);
                            startobj = endobj + 1;
                            endobj = reply.IndexOf("}{", endobj);
                        }

                        //Single JSON Object Left, or only one object was sent
                        jsonObj = reply.Substring(startobj);
                        Task T = Task.Run(() =>
                        {
                            if (ProcessJSONMessage(reply.Substring(startobj)))
                            {
                                //Success!
                            }
                            else
                            {
                                System.Console.Error.WriteLine(DateTime.Now.ToString() + ": Something went Wrong and the JSON object could not be processed");
                                System.Console.Error.WriteLine(jsonObj);
                                System.Console.Error.WriteLine();
                            }
                        });
                        tasks.Add(T);

                        //Wait for parsing of all objects to complete
                        Task.WaitAll(tasks.ToArray());
                    }
                    catch
                    {
                        //System.Console.Error.WriteLine(DateTime.Now.ToString() + ": Something went Wrong in the parser and failed to parse");
                        //System.Console.Error.WriteLine();
                    }
                }                
            }
        }

        /// <summary>
        /// Processes information recieved from conveyor
        /// </summary>
        abstract private bool ProcessJSONMessage(string JSONReply);

        /// <summary>
        /// Sends getprinters to Conveyor
        /// </summary>
        private void GetPrinters()
        {
            List<JProperty> Parameters = new List<JProperty>();
            SendCommand("getprinters", Parameters);
        }

        /// <summary>
        /// Sends getprinters to Conveyor
        /// </summary>
        private void GetPorts()
        {
            List<JProperty> Parameters = new List<JProperty>();
            SendCommand("getports", Parameters);
        }

        /// <summary>
        /// Sends getjobs to Conveyor
        /// </summary>
        private void GetJobs()
        {
            List<JProperty> Parameters = new List<JProperty>();
            SendCommand("getjobs", Parameters);
        }

    }
}
