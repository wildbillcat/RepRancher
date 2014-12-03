using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IConveyorService
    {
        /// <summary>
        /// This is a list of all Jobs tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<Conveyor_JSONRPC_API.IJob> Jobs
        {
            get;
            set;
        }

        /// <summary>
        /// This is a list of all Printers tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<Conveyor_JSONRPC_API.IPrinter> Printers
        {
            get;
            set;
        }

        /// <summary>
        /// This is a list of all Ports tracked by conveyor/reprancher
        /// </summary>
        ConcurrentDictionary<Conveyor_JSONRPC_API.IPort> Ports
        {
            get;
            set;
        }

        /// <summary>
        /// This is a list of all commands issued by RepRancher to Conveyor
        /// </summary>
        ConcurrentDictionary<int> CommandHistory
        {
            get;
            set;
        }

        /// <summary>
        /// This is the TCP Client used to connect to the Conveyor Service
        /// </summary>
        TcpClient tcpClient
        {
            get;
            set;
        }

        /// <summary>
        /// This is the Data Stream where data is written to and read from Conveyor
        /// </summary>
        Stream dataStream
        {
            get;
            set;
        }

        /// <summary>
        /// This contains the input recived from conveyor
        /// </summary>
        ConcurrentQueue<String> RepliesFromConveyor
        {
            get;
            set;
        }

        ConveyorRpcId RPCID
        {
            get;
            set;
        }

        /// <summary>
        /// Sends a Command to Conveyor
        /// </summary>
        void SendCommand(string MethodName, List<JProperty> Params);

        /// <summary>
        /// Resets the Connection to Conveyor
        /// </summary>
        void ResetConveyorConnection();

        /// <summary>
        /// Builds the RPC String to send to conveyor
        /// </summary>
        string BuildRPCString(int rpcid, string MethodName, List<JProperty> Params);
    }
}
