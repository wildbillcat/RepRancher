using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Net;
using System.Net.Sockets;
using System.IO;
using Conveyor_JSONRPC_API;
using Conveyor_JSONRPC_API.Types;

namespace Conveyor_JSONRPC_API_Tests
{
    [TestClass]
    public class ServerAPIWriteTests
    {

        IPEndPoint ipEndPoint;
        TcpClient tcpClient;
        Stream dataStream;
        int rpcid;

        public ServerAPIWriteTests()
        {
            ipEndPoint = new IPEndPoint(IPAddress.Parse("127.0.0.1"), 9999);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            rpcid = 0;
        }

        [TestMethod]
        public void Hello()
        {
            ServerAPI.Hello(rpcid++);
        }


    }
}
