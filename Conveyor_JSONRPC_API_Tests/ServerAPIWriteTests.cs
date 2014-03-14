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
            rpcid++;
            string result = ServerAPI.Hello(rpcid);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void Print()
        {
            rpcid++;
            string[] gcode_processor_names = null;
            bool has_start_end = true;
            string input_file = "D:\\Har.gcode"; //Required
            string machine_name = "23C1:B015:7523733353635171E0D1"; //Required
            string[] material_name = new string[] { "PLA", "PLA" };
            string slicer_name = "miraclegrue";
            slicersettings slicer_settings = new slicersettings();
            string result = ServerAPI.Print(rpcid, gcode_processor_names, has_start_end, input_file, machine_name, material_name, slicer_name, slicer_settings);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void GetJobs()
        {
            rpcid++;
            string result = ServerAPI.GetJobs(rpcid);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void GetPrinters()
        {
            rpcid++;
            string result = ServerAPI.GetPrinters(rpcid);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void GetPorts()
        {
            rpcid++;
            string result = ServerAPI.GetPorts(rpcid);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void Connect()
        {
            rpcid++;
            string port_name = "COM3:9153:45077";
            string driver_name = null;
            string machine_name = null;
            bool persistent = false;
            string profile_name = null;
            string result = ServerAPI.Connect(rpcid, driver_name, machine_name, persistent, port_name, profile_name);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void CancelJob()
        {
            rpcid++;
            int JobId = 1;
            string result = ServerAPI.CancelJob(rpcid, JobId);
            Console.WriteLine(result);
        }

        [TestMethod]
        public void PauseJob()
        {
            Assert.Fail();
        }

        [TestMethod]
        public void ResumeJob()
        {
            Assert.Fail();
        }
    }
}
