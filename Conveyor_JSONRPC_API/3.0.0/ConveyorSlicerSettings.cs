using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConveyorSlicerSettings
    {
        public int default_raft_extruder { get; set; }
        public int default_support_extruder { get; set; }
        public bool do_auto_raft { get; set; }
        public bool do_auto_support { get; set; }
        public string extruder { get; set; }
        public int[] extruder_temperatures { get; set; }
        public bool heat_platform { get; set; }
        public double infill { get; set; }
        public double layer_height { get; set; }
        public string[] materials { get; set; }
        public string path { get; set; }
        public int platform_temperature { get; set; }
        public int print_speed { get; set; }
        public bool raft { get; set; }
        public int shells { get; set; }
        public string slicer { get; set; }
        public bool support { get; set; }
        public int travel_speed { get; set; }

        public ConveyorSlicerSettings() : this("Replicator 2") { }

        public ConveyorSlicerSettings(string model)
        {
            if (model.Equals("Replicator 2X"))
            {
                default_raft_extruder = 0;
                default_support_extruder = 0;
                do_auto_raft = true;
                do_auto_support = false;
                extruder = "0";
                extruder_temperatures = new int[2] { 230, 230 };
                heat_platform = true;
                infill = .1;
                layer_height = .2;
                materials = new string[2] { "ABS", "PLA" };
                path = null;
                platform_temperature = 110;
                print_speed = 90;
                raft = true;
                shells = 2;
                slicer = "MIRACLEGRUE";
                support = false;
                travel_speed = 150;
            }
            else //Replicator 2 will be the default printer if no other types are specified.
            {
                default_raft_extruder = 0;
                default_support_extruder = 0;
                do_auto_raft = true;
                do_auto_support = false;
                extruder = "0";
                extruder_temperatures = new int[2] { 230, 230 };
                heat_platform = true;
                infill = .1;
                layer_height = .2;
                materials = new string[2] { "PLA", "PLA" };
                path = null;
                platform_temperature = 110;
                print_speed = 90;
                raft = true;
                shells = 2;
                slicer = "MIRACLEGRUE";
                support = false;
                travel_speed = 150;
            }

        }
    }
}
