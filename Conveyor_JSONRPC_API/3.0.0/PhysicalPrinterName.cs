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
        public int pid { get; set; } //4 digits
        public string port_type { get; set; }
        public int vid { get; set; } //4 digits

        public string GetMachine_Hash()
        {
            string PID = pid.ToString("X");
            for (int i = PID.Length; i < 4; i++)
            {
                PID = string.Concat("0", PID);
            }
            string VID = vid.ToString("X");
            for (int i = VID.Length; i < 4; i++)
            {
                VID = string.Concat("0", VID);
            }
            return string.Concat(VID, ":", PID, ":", iserial);
        }
    }
}
