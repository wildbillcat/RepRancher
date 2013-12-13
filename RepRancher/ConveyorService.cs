using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;

namespace RepRancher
{
    class ConveyorService
    {
        IPEndPoint ipEndPoint = new IPEndPoint(IPAddress.Parse("127.0.0.1"), 9999);
        TcpClient tcpClient;
        Stream dataStream;

        ConveyorService(string IPaddress, int PortNumber)
        {
            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();

        }
    }
}
