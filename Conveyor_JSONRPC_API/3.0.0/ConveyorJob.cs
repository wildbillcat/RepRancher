using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorJob
    {
        public string machine_name { get; set; }
        public bool pausable { get; set; }
        public ConveyorFailure failure { get; set; }
        public string profile_name { get; set; }
        public double extrusion_mass_a_grams { get; set; }
        public int id { get; set; }
        public string name { get; set; }
        public bool can_cancel { get; set; }
        public double elapsed_time { get; set; } //time in seconds of how long it has spend printing
        public string state { get; set; }
        public string driver_name { get; set; }
        public double duration_s { get; set; } //time in seconds needed to complete the entire print
        public ConveyorJobProgress progress { get; set; }
        public string type { get; set; }
        public double extrusion_distance_a_mm { get; set; }
        public string conclusion { get; set; }
    }

    public class ConveyorFailure
    {
        public ConveyorException exception { get; set; }
    }

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

    public class ConveyorJobProgress
    {
        public int progress { get; set; }
        public string name { get; set; }
    }
}
