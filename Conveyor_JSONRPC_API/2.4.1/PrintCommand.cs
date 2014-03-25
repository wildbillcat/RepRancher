using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Conveyor_JSONRPC_API._2._4._1.Types;

namespace Conveyor_JSONRPC_API._2._4._1
{
    public class PrintCommand : Command
    {
        public string[] gcode_processor_names;
        public bool has_start_end;
        public string input_file;
        public string machine_name;
        public string[] material_name;
        public string slicer_name;
        public slicersettings slicer_settings;
        public int MakerFarmJobId;

        public PrintCommand(int RpcId, string[] Gcode_Processor_Names, bool Has_Start_End, string Input_File, string Machine_Name, string[] Material_Name, string Slicer_Name, slicersettings Slicer_Settings, int MakerFarmJobID)
        {
            rpcid = RpcId;
            gcode_processor_names = Gcode_Processor_Names;
            has_start_end = Has_Start_End;
            input_file = Input_File;
            machine_name = Machine_Name;
            material_name = Material_Name;
            slicer_name = Slicer_Name;
            slicer_settings = Slicer_Settings;
            MakerFarmJobId = MakerFarmJobID;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Print(rpcid, gcode_processor_names, has_start_end, input_file, machine_name, material_name, slicer_name, slicer_settings);
        }
    }
}
