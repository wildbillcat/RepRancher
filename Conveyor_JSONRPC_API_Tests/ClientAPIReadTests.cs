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
            string JSON = "{\"params\": {\"machine_name\": \"23C1:B015:7523733353635171E0D1\", \"failure\": null, \"profile_name\": \"Replicator2\", \"port_name\": \"COM3:9153:45077\", \"id\": 2, \"name\": \"Mr_Jaws\", \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"progress\": null, \"type\": \"PRINT_JOB\", \"conclusion\": null}, \"jsonrpc\": \"2.0\", \"method\": \"jobadded\"}";
            job job = ClientAPI.GetParams<job>(JSON);
            if (job == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadJobChanged()
        {
            string JSON = "{\"params\": {\"machine_name\": \"23C1:B015:7523733353635171A221\", \"failure\": null, \"profile_name\": \"Replicator2X\", \"port_name\": \"COM4:9153:45077\", \"id\": 1, \"name\": \"Mr_Jaws_2.3.0\", \"state\": \"RUNNING\", \"driver_name\": \"s3g\", \"progress\": {\"progress\": 5, \"name\": \"verify\"}, \"type\": \"PRINT_JOB\", \"conclusion\": null}, \"jsonrpc\": \"2.0\", \"method\": \"jobchanged\"}";
            job job = ClientAPI.GetParams<job>(JSON);
            if (job == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReachMachineStateChanged()
        {
            string JSON = "{\"params\": {\"displayName\": \"The Replicator 2X\", \"name\": \"23C1:B015:7523733353635171A221\", \"printerType\": \"The Replicator 2X\", \"profile_name\": \"Replicator2X\", \"hasHeatedPlatform\": true, \"toolhead_target_temperature\": [0, 0], \"build_volume\": [246, 152, 155], \"state\": \"OPERATION\", \"driver_name\": \"s3g\", \"port_name\": \"COM4:9153:45077\", \"temperature\": {\"heated_platforms\": [2], \"tools\": {\"0\": 23, \"1\": 0}}, \"uniqueName\": \"23C1:B015:7523733353635171A221\", \"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2X\"], \"numberOfToolheads\": 2, \"firmware_version\": 705, \"canPrint\": true}, \"jsonrpc\": \"2.0\", \"method\": \"machine_state_changed\"}";
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReachMachineTemperatureChanged()
        {
            string JSON = "{\"params\": {\"displayName\": \"The Replicator 2\", \"name\": \"23C1:B015:7523733353635171E0D1\", \"printerType\": \"The Replicator 2\", \"profile_name\": \"Replicator2\", \"hasHeatedPlatform\": false, \"toolhead_target_temperature\": [0], \"build_volume\": [285, 153, 155], \"state\": \"OPERATION\", \"driver_name\": \"s3g\", \"port_name\": \"COM3:9153:45077\", \"temperature\": {\"heated_platforms\": [], \"tools\": {\"0\": 109}}, \"uniqueName\": \"23C1:B015:7523733353635171E0D1\", \"canPrintToFile\": true, \"machineNames\": [\"TheReplicator2\"], \"numberOfToolheads\": 1, \"firmware_version\": 705, \"canPrint\": true}, \"jsonrpc\": \"2.0\", \"method\": \"machine_temperature_changed\"}";
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadPortAttached()
        {
            string JSON = "{\"params\": {\"name\": \"COM3:9153:45077\", \"vid\": 9153, \"pid\": 45077, \"label\": \"Replicator 2\", \"driver_profiles\": {\"s3g\": [\"Replicator2X\", \"Replicator2\"]}, \"iserial\": \"7523733353635171E0D1\", \"path\": \"COM3\", \"type\": \"SERIAL\"}, \"jsonrpc\": \"2.0\", \"method\": \"port_attached\"}";
            port Port = ClientAPI.GetParams<port>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }

        [TestMethod]
        public void ReadPortRemoved()
        {
            string JSON = "{\"params\": { \"port_name\": \"COM3:9153:45077\"}, \"jsonrpc\": \"2.0\", \"method\": \"port_detached\"}";
            detachment Port = ClientAPI.GetParams<detachment>(JSON);
            if (Port == null)
            {
                Assert.Fail();
            }
        }
    }
}
