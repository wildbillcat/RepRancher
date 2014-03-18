using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Text;
using Conveyor_JSONRPC_API._3._0._0;

namespace Conveyor_JSONRPC_API_Tests._3._0._0
{
    [TestClass]
    public class _3_0_0_ServerAPIWriteTests
    {

        IPEndPoint ipEndPoint;
        TcpClient tcpClient;
        Stream dataStream;
        int rpcid;

        public _3_0_0_ServerAPIWriteTests()
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
            string command = ServerAPI.Hello(rpcid);
            string result = CallConveyorMethod<string>(command);
            if (result.Equals("world"))
            {
                return;
            }
            Assert.Fail();
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
            ConveyorJobMetadata job_metadata = new ConveyorJobMetadata();
            ConveyorSlicerSettings slicer_settings = new ConveyorSlicerSettings();
            string command = ServerAPI.Print(rpcid, has_start_end, input_file, job_metadata, machine_name, material_name, slicer_name, slicer_settings);
            //ConveyorJob result = CallConveyorMethod<ConveyorJob>(command);
            Assert.Fail();
        }

        [TestMethod]
        public void GetJobs()
        {
            rpcid++;
            string command = ServerAPI.GetJobs(rpcid);
            ConveyorJob[] Jobs = CallConveyorMethod<ConveyorJob[]>(command);
            if (Jobs.Length > 0)
            {
                return;
            }
            Assert.Fail();
        }

        [TestMethod]
        public void GetPrinters()
        {
            rpcid++;
            string RPCGetPrinters = ServerAPI.GetPrinters(rpcid);
            ConveyorPrinter[] Response = CallConveyorMethod<ConveyorPrinter[]>(RPCGetPrinters);
            if (Response.Length > 0)
            {
                foreach (ConveyorPrinter P in Response)
                {
                    if (P.can_print) //Denotes Physical Printer
                    {
                        ConveyorPhysicalPrinter Physical = new ConveyorPhysicalPrinter(P);
                        Console.WriteLine(Physical.name.GetMachine_Hash());
                    }
                    else //Denotes Virtual Printer
                    {
                        ConveyorVirtualPrinter Virtual = new ConveyorVirtualPrinter(P);
                        Console.WriteLine(Virtual.name);
                    }
                }
            }
            else
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void GetPorts()
        {
            rpcid++;
            string result = ServerAPI.GetPorts(rpcid);
            ConveyorPort[] Response = CallConveyorMethod<ConveyorPort[]>(result);
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
            Assert.Fail();
        }

        [TestMethod]
        public void CancelJob()
        {
            rpcid++;
            int JobId = 1;
            string result = ServerAPI.CancelJob(rpcid, JobId);
            Console.WriteLine(result);
            Assert.Fail();
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

        public T CallConveyorMethod<T>(string command)
        {
            byte[] bytesToWrite = Encoding.ASCII.GetBytes(command);
            dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
            dataStream.Flush();
            byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
            int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
            string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
            return ServerAPI.GetResult<T>(Reply);
        }
    }
}
