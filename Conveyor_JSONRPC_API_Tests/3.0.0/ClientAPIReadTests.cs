using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
/* Commenting out unimplemented 3.0 code
namespace Conveyor_JSONRPC_API_Tests._3._0._0
{
    [TestClass]
    public class ClientAPIReadTests
    {

        [TestMethod]
        public void ReadJobAdded()
        {
            string JSON = "{\"params\": {\"machine_name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"pausable\": false, \"failure\": null, \"profile_name\": \"Replicator2X\", \"extrusion_mass_a_grams\": 7.00589, \"id\": 1, \"name\": \"1 inch cube\", \"can_cancel\": true, \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"duration_s\": 1637, \"progress\": null, \"type\": \"PrintJob\", \"extrusion_distance_a_mm\": 2296.18, \"conclusion\": null}, \"jsonrpc\": \"2.0\", \"method\": \"jobadded\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("jobadded"))
            {
                Assert.Fail();
            }
            job job = ClientAPI.GetParams<job>(JSON);
            if (job == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadJobChanged()
        {
            string JSON = "{\"params\": {\"machine_name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"pausable\": true, \"failure\": null, \"profile_name\": \"Replicator2X\", \"extrusion_mass_a_grams\": 7.00589, \"id\": 3, \"name\": \"1 inch cube\", \"can_cancel\": true, \"elapsed_time\": 76.893, \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"duration_s\": 1637, \"progress\": {\"progress\": 0, \"name\": \"print\"}, \"type\": \"PrintJob\", \"extrusion_distance_a_mm\": 2296.18, \"conclusion\": null}, \"jsonrpc\": \"2.0\", \"method\": \"jobchanged\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("jobchanged"))
            {
                Assert.Fail();
            }
            job job = ClientAPI.GetParams<job>(JSON);
            if (job == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReachMachineStateChanged()
        {
            string JSON = "{\"params\": {\"can_print\": true, \"number_of_toolheads\": 2, \"has_heated_platform\": true, \"display_name\": \"Rep2X\", \"name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"printer_type\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"toolhead_target_temperature\": null, \"build_volume\": [246, 152, 155], \"state\": \"PAUSED\", \"driver_name\": \"s3g\", \"machine_names\": [\"TheReplicator2X\"], \"firmware_version\": [7, 5], \"temperature\": null}, \"jsonrpc\": \"2.0\", \"method\": \"machine_state_changed\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("machine_state_changed"))
            {
                Assert.Fail();
            }
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReachMachineTemperatureChanged()
        {
            string JSON = "{\"params\": {\"can_print\": true, \"number_of_toolheads\": 2, \"has_heated_platform\": true, \"display_name\": \"Rep 2X\", \"name\": {\"iserial\": \"7523733353635171A221\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"printer_type\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"toolhead_target_temperature\": null, \"build_volume\": [246, 152, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"machine_names\": [\"TheReplicator2X\"], \"firmware_version\": [7, 5], \"temperature\": null}, \"jsonrpc\": \"2.0\", \"method\": \"machine_temperature_changed\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("machine_temperature_changed"))
            {
                Assert.Fail();
            }
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadPortAttached()
        {
            string JSON = "{\"params\": {\"driver_profiles\": {\"s3g\": [\"Replicator2X\", \"Replicator2\"]}, \"machine_hash\": \"23C1:B015:7523733353635171E0D1\", \"machine_name\": {\"iserial\": \"7523733353635171E0D1\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}, \"port_type\": \"UsbPort\", \"machine_type\": \"Replicator 2\"}, \"jsonrpc\": \"2.0\", \"method\": \"port_attached\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("port_attached"))
            {
                Assert.Fail();
            }
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadPortRemoved()
        {
            string JSON = "{\"params\": {\"machine_name\": {\"iserial\": \"7523733353635171E0D1\", \"pid\": 45077, \"port_type\": \"UsbPort\", \"vid\": 9153}}, \"jsonrpc\": \"2.0\", \"method\": \"port_detached\"}";
            string methodname = Conveyor_JSONRPC_API.ConveyorJsonReplyParser.GetMethodName(JSON);
            if (!methodname.Equals("port_detached"))
            {
                Assert.Fail();
            }
            detachment Port = ClientAPI.GetParams<detachment>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void DetectMethod()
        {
            string JSON = "{\"params\": {\"displayName\": \"The Replicator 2\", \"name\": \"23C1:B015:7523733353635171E0D1\", \"printerType\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"hasHeatedPlatform\": false, \"toolhead_target_temperature\": [0], \"build_volume\": [285, 153, 155], \"state\": \"IDLE\", \"driver_name\": \"s3g\", \"port_name\": \"COM3:9153:45077\", \"temperature\": {\"heated_platforms\": [], \"tools\": {\"0\": 104}}, \"uniqueName\": \"23C1:B015:7523733353635171E0D1\", \"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2\"], \"numberOfToolheads\": 1, \"firmware_version\": 705, \"canPrint\": true}, \"jsonrpc\": \"2.0\", \"method\": \"machine_state_changed\"}";
            JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
            if (Reply != JsonReplyType.Method)
            {
                Assert.Fail();
            }
            Console.WriteLine(ConveyorJsonReplyParser.GetMethodName(JSON));
        }
    }
}
*/