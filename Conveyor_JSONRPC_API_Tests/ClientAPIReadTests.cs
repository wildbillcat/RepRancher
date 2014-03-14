using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Conveyor_JSONRPC_API;
using Conveyor_JSONRPC_API.Types;

namespace Conveyor_JSONRPC_API_Tests
{
    [TestClass]
    public class ClientAPIReadTests
    {

        [TestMethod]
        public void ReadJobAdded()
        {
            string JSON = "
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
            string JSON = "
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
            string JSON = "
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
            string JSON = "
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
            string JSON = "
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
