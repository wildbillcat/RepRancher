using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorException
    {
        public string winerror { get; set; }
        public string name { get; set; }
        public string errno { get; set; }
        public string args { get; set; }
        public string strerror { get; set; }
        public string filename { get; set; }
        public string message { get; set; }
    }
}
