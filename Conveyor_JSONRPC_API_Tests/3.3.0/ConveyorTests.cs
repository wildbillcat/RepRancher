using System;
using Conveyor_JSONRPC_API._3._3._0;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Conveyor_JSONRPC_API_Tests._3._3._0
{
    [TestClass]
    public class ConveyorTests : ConveyorService
    {
        public ConveyorTests() : base(System.Net.IPAddress.Parse("127.0.0.1"), 9999)
        {
            //Construct Conveyor
        }

        [TestMethod]
        public void MachineStateChanged()
        {
            ProcessJSONMessage();
        }
    }
}
