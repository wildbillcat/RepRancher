using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorJob
    {
        public object machine_name { get; set; }
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

    public class ConveyorSliceJob : ConveyorJob
    {
        public new string machine_name { get; set; }

        public ConveyorSliceJob(ConveyorJob J)
        {
            machine_name = (string)J.machine_name;
            pausable = J.pausable;
            failure = J.failure;
            profile_name = J.profile_name;
            extrusion_mass_a_grams = J.extrusion_mass_a_grams;
            id = J.id;
            name = J.name;
            can_cancel = J.can_cancel;
            elapsed_time = J.elapsed_time;
            state = J.state;
            driver_name = J.driver_name;
            duration_s = J.duration_s;
            progress = J.progress;
            type = J.type;
            extrusion_distance_a_mm = J.extrusion_distance_a_mm;
            conclusion = J.conclusion;
        }
    }

    public class ConveyorPrintJob : ConveyorJob
    {
        public new ConveyorPhysicalPrinterName machine_name { get; set; }

        public ConveyorPrintJob(ConveyorJob J)
        {
            machine_name = JsonConvert.DeserializeObject<ConveyorPhysicalPrinterName>(J.machine_name.ToString());
            pausable = J.pausable;
            failure = J.failure;
            profile_name = J.profile_name;
            extrusion_mass_a_grams = J.extrusion_mass_a_grams;
            id = J.id;
            name = J.name;
            can_cancel = J.can_cancel;
            elapsed_time = J.elapsed_time;
            state = J.state;
            driver_name = J.driver_name;
            duration_s = J.duration_s;
            progress = J.progress;
            type = J.type;
            extrusion_distance_a_mm = J.extrusion_distance_a_mm;
            conclusion = J.conclusion;
        }
    }
}
