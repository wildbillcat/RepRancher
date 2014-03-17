using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorPrinter
    {
        public bool can_print { get; set; }
        public int number_of_toolheads { get; set; }
        public bool has_heated_platform { get; set; }
        public string display_name { get; set; }
        public string printer_type { get; set; }
        public string profile_name { get; set; }
        public int[] toolhead_target_temperature { get; set; }
        public int[] build_volume { get; set; }
        public string state { get; set; }
        public string driver_name { get; set; }
        public string[] machine_names { get; set; }
        public int[] firmware_version { get; set; }
        public object temperature { get; set; } //This value is always null.
    }

    public class ConveyorPhysicalPrinter : ConveyorPrinter
    {
        public ConveyorPhysicalPrinterName name { get; set; }
    }

    public class ConveyorVirtualPrinter : ConveyorPrinter
    {
        public string name { get; set; }
    }

}
