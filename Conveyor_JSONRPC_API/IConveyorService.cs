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

        /// <summary>
        /// LockObject used for protecting the outgoing TCP stream
        /// </summary>
        obkect WriteToConveyorLock
        {
            get;
            set;
        }

        void SendCommand();

        void ResetConveyorConnection();
    }
}
