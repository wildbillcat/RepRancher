using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Conveyor_JSONRPC_API._2._4._1;
using Conveyor_JSONRPC_API._2._4._1.Types;

namespace Conveyor_JSONRPC_API_Tests._2._4._1
{
        [TestClass]
        public class _2_4_1_ServerAPIReadTests
        {

            [TestMethod]
            public void ReadHello()
            {
                string RPCHello = "{\"jsonrpc\": \"2.0\",\"result\": \"world\",\"id\": 0}";
                string Response = ServerAPI.GetResult<string>(RPCHello);
                if (Response.Equals("world"))
                {
                    return;
                }
                throw (new Exception());
            }

            [TestMethod]
            public void ReadGetPrinters()
            {
                string RPCGetPrinters = "{\"jsonrpc\": \"2.0\", \"result\": [{\"displayName\": \"The Replicator 2\", \"name\": \"23C1:B015:7523733353635171E0D1\", \"printerType\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"hasHeatedPlatform\": false, \"toolhead_target_temperature\": [0], \"build_volume\": [285, 153, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"port_name\": \"COM3:9153:45077\", \"temperature\": {\"heated_platforms\": [], \"tools\": {\"0\": 28}}, \"uniqueName\": \"23C1:B015:7523733353635171E0D1\", \"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2\"], \"numberOfToolheads\": 1, \"firmware_version\": 705, \"canPrint\": true}, {\"displayName\": \"The Replicator 2X\", \"name\": \"The Replicator 2X\", \"printerType\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": null, \"build_volume\": [246, 152, 155], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\", \"port_name\": null, \"temperature\": {\"heated_platforms\": {}, \"tools\": {}}, \"uniqueName\": \"The Replicator 2X\", \"canPrintToFile\": null, \"machineNames\": [\"TheReplicator2X\"], \"numberOfToolheads\": 2, \"firmware_version\": null, \"canPrint\": false}, {\"displayName\": \"The Replicator Dual\", \"name\": \"The Replicator Dual\", \"printerType\": \"The Replicator Dual\", \"profile_name\": \"ReplicatorDual\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": null, \"build_volume\": [225, 145, 150], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\", \"port_name\": null, \"temperature\": {\"heated_platforms\": {}, \"tools\": {}}, \"uniqueName\": \"The Replicator Dual\", \"canPrintToFile\": null, \"machineNames\": [\"TheReplicator\"], \"numberOfToolheads\": 2, \"firmware_version\": null, \"canPrint\": false}, {\"displayName\": \"The Replicator 2\", \"name\": \"The Replicator 2\", \"printerType\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"hasHeatedPlatform\": false, \"toolhead_target_temperature\": null, \"build_volume\": [285, 153, 155], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\", \"port_name\": null, \"temperature\": {\"heated_platforms\": {}, \"tools\": {}}, \"uniqueName\": \"The Replicator 2\", \"canPrintToFile\": null, \"machineNames\": [\"TheReplicator2\"], \"numberOfToolheads\": 1, \"firmware_version\": null, \"canPrint\": false}, {\"displayName\": \"The Replicator Single\", \"name\": \"The Replicator Single\", \"printerType\": \"The Replicator Single\", \"profile_name\": \"ReplicatorSingle\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": null, \"build_volume\": [225, 145, 150], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\", \"port_name\": null, \"temperature\": {\"heated_platforms\": {}, \"tools\": {}}, \"uniqueName\": \"The Replicator Single\", \"canPrintToFile\": null, \"machineNames\": [\"TheReplicator\"], \"numberOfToolheads\": 1, \"firmware_version\": null, \"canPrint\": false}, {\"displayName\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"name\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"printerType\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"profile_name\": \"TOMStepstruderSingle\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": null, \"build_volume\": [106, 120, 106], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\", \"port_name\": null, \"temperature\": {\"heated_platforms\": {}, \"tools\": {}}, \"uniqueName\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"canPrintToFile\": null, \"machineNames\": [\"Thing-O-Matic\", \"TOM\"], \"numberOfToolheads\": 1, \"firmware_version\": null, \"canPrint\": false}], \"id\": \"3\"}";
                ConveyorPrinter[] Response = ServerAPI.GetResult<ConveyorPrinter[]>(RPCGetPrinters);

                if (Response.Length > 0)
                {
                    return;
                }
                else
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ReadGetJobs()
            {
                string RPCGetJobs = "{\"jsonrpc\": \"2.0\", \"result\": [{\"machine_name\": \"23C1:B015:7523733353635171E0D1\", \"failure\": {\"exception\": {\"winerror\": \"None\", \"name\": \"TransmissionError\", \"errno\": \"None\", \"args\": \"()\", \"strerror\": \"None\", \"filename\": \"None\", \"message\": \"['TimeoutError', 'TimeoutError', 'TimeoutError', 'TimeoutError', 'TimeoutError']\"}}, \"profile_name\": \"Replicator2\", \"port_name\": \"COM3:9153:45077\", \"id\": 2, \"name\": \"Mr_Jaws_2.3.0\", \"state\": \"STOPPED\", \"driver_name\": \"s3g\", \"progress\": {\"progress\": 32, \"name\": \"print\"}, \"type\": \"PRINT_JOB\", \"conclusion\": \"FAILED\"}, {\"machine_name\": \"23C1:B015:7523733353635171E0D1\", \"failure\": null, \"profile_name\": \"Replicator2\", \"port_name\": \"COM3:9153:45077\", \"id\": 3, \"name\": \"Mr_Jaws_2.3.0\", \"state\": \"STOPPED\", \"driver_name\": \"s3g\", \"progress\": {\"progress\": 0, \"name\": \"print\"}, \"type\": \"PRINT_JOB\", \"conclusion\": \"CANCELED\"}], \"id\": \"4\"}";
                ConveyorJob[] Response = ServerAPI.GetResult<ConveyorJob[]>(RPCGetJobs);
                if (Response.Length > 0)
                {
                    return;
                }
                else
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ReadGetPorts()
            {
                string RPCGetPorts = "{\"jsonrpc\": \"2.0\", \"result\": [{\"name\": \"COM3:9153:45077\", \"vid\": 9153, \"pid\": 45077, \"label\": \"Replicator 2\", \"driver_profiles\": {\"s3g\": [\"Replicator2X\", \"Replicator2\"]}, \"iserial\": \"7523733353635171E0D1\", \"path\": \"COM3\", \"type\": \"SERIAL\"}], \"id\": \"2\"}";
                ConveyorPort[] Response = ServerAPI.GetResult<ConveyorPort[]>(RPCGetPorts);
                if (Response.Length > 0)
                {
                    return;
                }
                else
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ReadConnect()
            {
                string RPCConnect = "{\"jsonrpc\": \"2.0\",\"result\":{\"displayName\": \"The Replicator 2X\", \"name\": \"23C1:B015:7523733353635171A221\", \"printerType\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": [0, 0], \"build_volume\": [246, 152, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"port_name\": \"COM4:9153:45077\", \"temperature\": {\"heated_platforms\": [2], \"tools\": {\"0\": 23, \"1\": 0}	}, \"uniqueName\": \"23C1:B015:7523733353635171A221\", 	\"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2X\"], \"numberOfToolheads\": 2, \"firmware_version\": 705, \"canPrint\": true}, \"id\": 4}";
                ConveyorPrinter Response = ServerAPI.GetResult<ConveyorPrinter>(RPCConnect);
                if (Response == null)
                {
                    Assert.Fail(); ;
                }
            }

            [TestMethod]
            public void ReadPrint()
            {
                string RPCPrint = "{\"jsonrpc\": \"2.0\", \"result\": { \"machine_name\": \"23C1:B015:7523733353635171A221\",\"failure\": null, \"profile_name\": \"Replicator2X\",\"port_name\": \"COM4:9153:45077\",\"id\": 1,\"name\": \"Mr_Jaws_2.3.0\",\"state\": \"RUNNING\",\"driver_name\": \"s3g\",\"progress\": null,\"type\": \"PRINT_JOB\",\"conclusion\": null},\"id\": 5}";
                ConveyorJob Response = ServerAPI.GetResult<ConveyorJob>(RPCPrint);
                if (Response == null)
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ParseInvalid()
            {
                string JSON = @"{object:sillyness}";
                JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
                if (Reply != JsonReplyType.Invalid)
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ParseError()
            {
                string JSON = "{\"jsonrpc\" : \"2.0\", \"id\": 5, \"error\": {\"message\": \"uncaught exception\", \"code\": -32000, \"data\": {\"args\": [\"COM3:9153:45077\"], \"name\": \"UnknownPortError\"}}}";
                JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
                if (Reply != JsonReplyType.Error)
                {
                    Assert.Fail();
                }
            }

            [TestMethod]
            public void ParseMethod()
            {
                string JSON = "{\"params\": {\"displayName\": \"The Replicator 2\", \"name\": \"23C1:B015:7523733353635171E0D1\", \"printerType\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"hasHeatedPlatform\": false, \"toolhead_target_temperature\": [0], \"build_volume\": [285, 153, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"port_name\": \"COM3:9153:45077\", \"temperature\": {\"heated_platforms\": [], \"tools\": {\"0\": 104}}, \"uniqueName\": \"23C1:B015:7523733353635171E0D1\", \"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2\"], \"numberOfToolheads\": 1, \"firmware_version\": 705, \"canPrint\": true}, \"jsonrpc\": \"2.0\", \"method\": \"machine_state_changed\"}";
                JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
                if (Reply != JsonReplyType.Method)
                {
                    Assert.Fail();
                }
                Console.WriteLine(ConveyorJsonReplyParser.GetMethodName(JSON));
            }

            [TestMethod]
            public void ParseResult()
            {
                string JSON = "{\"jsonrpc\": \"2.0\", \"result\": [{\"machine_name\": \"23C1:B015:7523733353635171E0D1\", \"failure\": null, \"profile_name\": \"Replicator2\", \"port_name\": \"COM3:9153:45077\", \"id\": 1, \"name\": \"Mr_Jaws\", \"state\": \"STOPPED\", \"driver_name\": \"s3g\", \"progress\": {\"progress\": 9, \"name\": \"print\"}, \"type\": \"PRINT_JOB\", \"conclusion\": \"CANCELED\"}], \"id\": 3}";
                JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
                if (Reply != JsonReplyType.Result)
                {
                    Assert.Fail();
                }
                Console.WriteLine(ConveyorJsonReplyParser.GetResultID(JSON));
            }
        }
    }
