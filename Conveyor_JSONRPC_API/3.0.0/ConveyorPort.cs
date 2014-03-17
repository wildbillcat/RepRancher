using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorPort
    {
        public Dictionary<string, string[]> driver_profiles { get; set; }
        public string machine_hash { get; set; }
        public PhysicalPrinterName machine_name { get; set; }
        public string port_type { get; set; }
        public string machine_type { get; set; }
    }
}
