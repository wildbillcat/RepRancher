using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Conveyor_JSONRPC_API._3._0._0;

namespace Conveyor_JSONRPC_API_Tests._3._0._0
{
    [TestClass]
    public class _3_0_0_ServerAPIReadTests
    {
        
        [TestMethod]
        public void ReadHello()
        {
            string RPCHello = "{\"jsonrpc\": \"2.0\", \"result\": \"world\", \"id\": 0}";
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
            string RPCGetPrinters = "{\"jsonrpc\": \"2.0\", \"result\": [{\"can_print\": true, \"number_of_toolheads\": 1, \"has_heated_platform\": false, \"display_name\": \"Kylie\", \"name\": {\"iserial\": \"75237333536351713081\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"printer_type\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"toolhead_target_temperature\": null, \"build_volume\": [285, 153, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"machine_names\": [\"TheReplicator2\"], \"firmware_version\": [7, 5], \"temperature\": null}, {\"can_print\": false, \"has_heated_platform\": true, \"toolhead_target_temperature\": null, \"machine_names\": [\"TheReplicator2X\"], \"printer_type\": \"The Replicator 2X\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 2, \"display_name\": \"The Replicator 2X\", \"name\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"build_volume\": [246, 152, 155], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\"}, {\"can_print\": false, \"has_heated_platform\": true, \"toolhead_target_temperature\": null, \"machine_names\": [\"TheReplicator\"], \"printer_type\": \"The Replicator Dual\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 2, \"display_name\": \"The Replicator Dual\", \"name\": \"The Replicator Dual\", \"profile_name\": \"ReplicatorDual\", \"build_volume\": [225, 145, 150], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\"}, {\"can_print\": false, \"has_heated_platform\": false, \"toolhead_target_temperature\": null, \"machine_names\": [\"TheReplicator2\"], \"printer_type\": \"The Replicator 2\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"The Replicator 2\", \"name\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"build_volume\": [285, 153, 155], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\"}, {\"can_print\": false, \"has_heated_platform\": true, \"toolhead_target_temperature\": null, \"machine_names\": [\"TheReplicator\"], \"printer_type\": \"The Replicator Single\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"The Replicator Single\", \"name\": \"The Replicator Single\", \"profile_name\": \"ReplicatorSingle\", \"build_volume\": [225, 145, 150], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\"}, {\"can_print\": false, \"has_heated_platform\": true, \"toolhead_target_temperature\": null, \"machine_names\": [\"Thing-O-Matic\", \"TOM\"], \"printer_type\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"name\": \"Thing-O-Matic Single, Stepstruder Mk6 or Mk7\", \"profile_name\": \"TOMStepstruderSingle\", \"build_volume\": [106, 120, 106], \"state\": \"DISCONNECTED\", \"driver_name\": \"s3g\"}, {\"can_print\": false, \"has_heated_platform\": false, \"toolhead_target_temperature\": null, \"machine_names\": [\"Tinkerbell\"], \"printer_type\": \"Tinkerbell\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"Tinkerbell\", \"name\": \"Tinkerbell\", \"profile_name\": \"Tinkerbell\", \"build_volume\": [100, 100, 125], \"state\": \"DISCONNECTED\", \"driver_name\": \"birdwing\"}, {\"can_print\": false, \"has_heated_platform\": true, \"toolhead_target_temperature\": null, \"machine_names\": [\"Moose\"], \"printer_type\": \"Moose\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"Moose\", \"name\": \"Moose\", \"profile_name\": \"Moose\", \"build_volume\": [305, 305, 457], \"state\": \"DISCONNECTED\", \"driver_name\": \"birdwing\"}, {\"can_print\": false, \"has_heated_platform\": false, \"toolhead_target_temperature\": null, \"machine_names\": [\"Platypus\"], \"printer_type\": \"Platypus\", \"firmware_version\": null, \"temperature\": null, \"number_of_toolheads\": 1, \"display_name\": \"Platypus\", \"name\": \"Platypus\", \"profile_name\": \"Platypus\", \"build_volume\": [252, 199, 150], \"state\": \"DISCONNECTED\", \"driver_name\": \"birdwing\"}], \"id\": 2}";
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
            string RPCGetJobs = "{\"jsonrpc\": \"2.0\", \"result\": [{\"machine_name\": \"23C1:B015:7523733353635171A221\", \"pausable\": false, \"failure\": null, \"profile_name\": \"Replicator2X\", \"extrusion_mass_a_grams\": 7.00589, \"id\": 0, \"name\": \"1 inch cube\", \"can_cancel\": true, \"state\": \"STOPPED\", \"driver_name\": \"s3g\", \"duration_s\": 1636.65, \"progress\": {\"progress\": 100, \"name\": \"slice\"}, \"type\": \"SliceJob\", \"extrusion_distance_a_mm\": 2296.18, \"conclusion\": \"ENDED\"}, {\"machine_name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"pausable\": true, \"failure\": null, \"profile_name\": \"Replicator2X\", \"extrusion_mass_a_grams\": 7.00589, \"id\": 1, \"name\": \"1 inch cube\", \"can_cancel\": true, \"elapsed_time\": 245.00599999999963, \"state\": \"STOPPED\", \"driver_name\": \"s3g\", \"duration_s\": 1637, \"progress\": {\"progress\": 9, \"name\": \"print\"}, \"type\": \"PrintJob\", \"extrusion_distance_a_mm\": 2296.18, \"conclusion\": \"CANCELED\"}], \"id\": 503}";
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
            string RPCGetPorts = "{\"jsonrpc\": \"2.0\", \"result\": [{\"driver_profiles\": {\"s3g\": [\"Replicator2X\", \"Replicator2\"]}, \"machine_hash\": \"23C1:B015:75237333536351713081\", \"machine_name\": {\"iserial\": \"75237333536351713081\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"port_type\": \"UsbPort\", \"machine_type\": \"Replicator 2\"}], \"id\": 1}";
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
            string RPCConnect = "{\"jsonrpc\": \"2.0\", \"result\": {\"can_print\": true, \"number_of_toolheads\": 2, \"has_heated_platform\": true, \"display_name\": \"Rep 2X\", \"name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"printer_type\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"toolhead_target_temperature\": null, \"build_volume\": [246, 152, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"machine_names\": [\"TheReplicator2X\"], \"firmware_version\": [7, 5], \"temperature\": null}, \"id\": 4}";
            ConveyorPrinter Response = ServerAPI.GetResult<ConveyorPrinter>(RPCConnect);
            if (Response == null)
            {
                Assert.Fail(); ;
            }
        }

        [TestMethod]
        public void ReadPrint()
        {
            string RPCPrint = "{\"jsonrpc\": \"2.0\", \"result\": {\"machine_name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"pausable\": false, \"failure\": null, \"profile_name\": \"Replicator2X\", \"extrusion_mass_a_grams\": 7.00589, \"id\": 1, \"name\": \"1 inch cube\", \"can_cancel\": true, \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"duration_s\": 1637, \"progress\": null, \"type\": \"PrintJob\", \"extrusion_distance_a_mm\": 2296.18, \"conclusion\": null}, \"id\": 7}";
            ConveyorJob Response = ServerAPI.GetResult<ConveyorJob>(RPCPrint);
            if (Response == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadSlice()
        {
            string RPCPrint = "{\"jsonrpc\": \"2.0\", \"result\": {\"machine_name\": \"23C1:B015:7523733353635171A221\", \"pausable\": false, \"failure\": null, \"profile_name\": \"Replicator2X\", \"id\": 2, \"name\": \"1 inch cube\", \"can_cancel\": true, \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"progress\": null, \"type\": \"SliceJob\", \"conclusion\": null}, \"id\": 9}";
            ConveyorJob Response = ServerAPI.GetResult<ConveyorJob>(RPCPrint);
            if (Response == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ParseInvalid()
        {
            string JSON = "jiasoisdsaondasiodsadasdasfgsadf";
            JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
            if (Reply != JsonReplyType.Invalid)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ParseError()
        {
            string JSON = "{\"jsonrpc\": \"2.0\", \"id\": 4, \"error\": {\"message\": \"method not found\", \"code\": -32601}}";
            JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
            if (Reply != JsonReplyType.Error)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void DetectResult()
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