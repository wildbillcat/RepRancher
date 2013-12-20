using System;
using System.Collections.Generic;
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

namespace RepRancher
{
    class ConveyorService
    {
        IPEndPoint ipEndPoint;
        TcpClient tcpClient;
        Stream dataStream;

        public ConveyorService(string IPaddress, int PortNumber)
        {
            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
        }
    }

    class ConveyorListenerService
    {
        TcpClient tcpClient;
        Stream dataStream;

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
        }

        public void ThreadRun()
        {
            while (true)
            {
                byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                
                Console.WriteLine();
                
            }
        }
    }
}
