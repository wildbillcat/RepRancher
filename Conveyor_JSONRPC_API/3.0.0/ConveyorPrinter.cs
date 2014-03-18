using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorPrinter
    {
        public object name { get; set; }
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
        public new ConveyorPhysicalPrinterName name { get; set; }

        public ConveyorPhysicalPrinter(ConveyorPrinter P)
        {
            name = JsonConvert.DeserializeObject<ConveyorPhysicalPrinterName>(P.name.ToString());
            can_print = P.can_print;
            number_of_toolheads = P.number_of_toolheads;
            has_heated_platform = P.has_heated_platform;
            display_name = P.display_name;
            printer_type = P.printer_type;
            profile_name = P.profile_name;
            toolhead_target_temperature = P.toolhead_target_temperature;
            build_volume = P.build_volume;
            state = P.state;
            driver_name = P.driver_name;
            machine_names = P.machine_names;
            firmware_version = P.firmware_version;
            temperature = P.temperature;
        }
    }

    public class ConveyorVirtualPrinter : ConveyorPrinter
    {
        public new string name { get; set; }

        public ConveyorVirtualPrinter(ConveyorPrinter P)
        {
            name = P.name.ToString();
            can_print = P.can_print;
            number_of_toolheads = P.number_of_toolheads;
            has_heated_platform = P.has_heated_platform;
            display_name = P.display_name;
            printer_type = P.printer_type;
            profile_name = P.profile_name;
            toolhead_target_temperature = P.toolhead_target_temperature;
            build_volume = P.build_volume;
            state = P.state;
            driver_name = P.driver_name;
            machine_names = P.machine_names;
            firmware_version = P.firmware_version;
            temperature = P.temperature;
        }
    }

}
