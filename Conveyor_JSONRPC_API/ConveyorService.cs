using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Concurrent;
using System.Net.Sockets;
using System.IO;

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

        ConcurrentDictionary<int, int> commandHistory;
        /// <summary>
        /// This is a list of all commands issued by RepRancher to Conveyor
        /// </summary>
        ConcurrentDictionary<int, int> CommandHistory
        {
            get
            {
                return commandHistory;
            }
        }

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
            commandHistory = new ConcurrentDictionary<int,int>();
            repliesFromConveyor = new ConcurrentQueue<string>();
            RPCID = new ConveyorRpcId();
            ConveyorWriteLock = new Object();
            tcpClient = new TcpClient();
            System.Net.IPEndPoint ConveyorIPEndpoint = new System.Net.IPEndPoint(ConveyorIP, ConveyorPort);
            tcpClient = new System.Net.Sockets.TcpClient();
            tcpClient.Connect(ConveyorIPEndpoint);
            dataStream = tcpClient.GetStream();
            conveyorListenerThread = new System.Threading.Thread(new System.Threading.ThreadStart(this.ConveyorListenerThread));
            conveyorListenerThread.Start();
            conveyorParserThread = new System.Threading.Thread(new System.Threading.ThreadStart(this.ConveyorParserThread));
            conveyorParserThread.Start();

            throw new NotImplementedException();
            //Still need to create a thread to listen to the incoming TCP stream and update the conveyor object.

            Hello();
        }

        /// <summary>
        /// Sends a Command to Conveyor
        /// </summary>
        public void SendCommand(string MethodName, List<JProperty> Params)
        {
            string command = BuildRPCString(RPCID.TryGetID(), MethodName, Params);
            lock (ConveyorWriteLock)
            {
                new NotImplementedException();
            }
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
        public void ConveyorListenerThread()
        {
            new NotImplementedException();
        }

        /// <summary>
        /// Parses information recieved from conveyor
        /// </summary>
        abstract public void ConveyorParserThread();

    }
}
