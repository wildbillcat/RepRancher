using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorPrintJobMetadata
    {
        public int duration_s { get; set; }
        public double extrusion_distance_a_mm { get; set; }
        public double extrusion_mass_a_grams { get; set; }
    }

    public class ConveyorSliceJobMetadata
    {
        public string machine_name { get; set; } //Machine Hash of printer being printed to
    }
}
