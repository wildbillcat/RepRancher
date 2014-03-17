using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorPhysicalPrinterName
    {
        public string iserial { get; set; }
        public int pid { get; set; }
        public string port_type { get; set; }
        public int vid { get; set; }

        public string GetMachine_Hash()
        {
            return string.Concat(vid.ToString("X"), ":", pid.ToString("X"), ":", iserial);
        }
    }
}
