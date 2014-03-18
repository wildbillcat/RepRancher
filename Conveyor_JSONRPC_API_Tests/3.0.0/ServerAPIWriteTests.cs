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
            string test = "{\"id\":19,\"jsonrpc\":\"2.0\",\"method\":\"print\",\"params\":{\"has_start_end\":false,\"input_file\":\"C:/Users/Rob/AppData/Local/Temp/MakerWare-p3dLon/1 inch cube.gcode\",\"job_metadata\":{\"duration_s\":0,\"extrusion_distance_a_mm\":0.0,\"extrusion_mass_a_grams\":0.0},\"machine_name\":\"23C1:B015:7523733353635171E0D1\",\"metadata\":null,\"slicer_name\":\"miraclegrue\",\"slicer_settings\":{\"default_raft_extruder\":0,\"default_support_extruder\":0,\"do_auto_raft\":true,\"do_auto_support\":false,\"extruder\":\"0\",\"extruder_temperatures\":[230,230],\"heat_platform\":true,\"infill\":0.1,\"layer_height\":0.2,\"materials\":[\"PLA\",\"PLA\"],\"path\":null,\"platform_temperature\":110,\"print_speed\":90,\"raft\":true,\"shells\":2,\"slicer\":\"MIRACLEGRUE\",\"support\":false,\"travel_speed\":150},\"thumbnail_dir\":\"\"}}";
            bool has_start_end = false;
            string input_file = "C:/Users/Rob/AppData/Local/Temp/MakerWare-p3dLon/1 inch cube.gcode"; //Required
            string machine_name = "23C1:B015:7523733353635171E0D1"; //Required
            string[] material_name = new string[] { "PLA", "PLA" };
            string slicer_name = "miraclegrue";
            string thumbnail_dir = "";
            ConveyorPrintJobMetadata job_metadata = new ConveyorPrintJobMetadata();
            ConveyorSlicerSettings slicer_settings = new ConveyorSlicerSettings();
            string result = ServerAPI.Print(19, has_start_end, input_file, job_metadata, machine_name,
                material_name, slicer_name, slicer_settings, thumbnail_dir);
            if (result.Equals(test))
            {
                return;
            }
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
            string test = "{\"id\":4,\"jsonrpc\":\"2.0\",\"method\":\"connect_to_machine\",\"params\":{\"machine_name\":\"23C1:B015:7523733353635171A221\"}}";
            string machine_name = "23C1:B015:7523733353635171A221";
            string result = ServerAPI.Connect(4, machine_name);
            if (result.Equals(test))
            {
                return;
            }
            Console.WriteLine(result);
            Assert.Fail();
        }

        [TestMethod]
        public void Job_Cancel()
        {
            string test = "{\"id\":12,\"jsonrpc\":\"2.0\",\"method\":\"job_cancel\",\"params\":{\"id\":1}}";
            string result = ServerAPI.Job_Cancel(12, 1);
            if (result.Equals(test))
            {
                return;
            }
            Console.WriteLine(result);
            Assert.Fail();
        }

        [TestMethod]
        public void Job_Pause()
        {
            string test = "{\"id\":25,\"jsonrpc\":\"2.0\",\"method\":\"job_pause\",\"params\":{\"id\":3}}";
            string result = ServerAPI.Job_Pause(25, 3);
            if (result.Equals(test))
            {
                return;
            }
            Console.WriteLine(result);
            Assert.Fail();
        }

        [TestMethod]
        public void Job_Resume()
        {
            string test = "{\"id\":26,\"jsonrpc\":\"2.0\",\"method\":\"job_resume\",\"params\":{\"id\":3}}";
            string result = ServerAPI.Job_Resume(26, 3);
            if (result.Equals(test))
            {
                return;
            }
            Console.WriteLine(result);
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
