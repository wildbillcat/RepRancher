using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class PrintCommand : Command
    {
        bool has_start_end; 
        string input_file; 
        ConveyorPrintJobMetadata job_metadata;
        string machine_name; 
        string[] material_name; 
        string slicer_name; 
        ConveyorSlicerSettings slicer_settings;
        string thumbnail_dir;
        public int MakerFarmJobId;

        public PrintCommand(int RpcId, bool Has_start_end, string Input_file, ConveyorPrintJobMetadata Job_metadata,
            string Machine_name, string[] Material_name, string Slicer_name, ConveyorSlicerSettings Slicer_settings,
            string Thumbnail_dir, int MakerFarmJobID)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
            has_start_end = Has_start_end;
            input_file = Input_file;
            job_metadata = Job_metadata;
            machine_name = Machine_name;
            material_name = Material_name;
            slicer_name = Slicer_name;
            slicer_settings = Slicer_settings;
            thumbnail_dir = Thumbnail_dir;
            MakerFarmJobId = MakerFarmJobID;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Print(rpcid, has_start_end, input_file, job_metadata, 
             machine_name, material_name, slicer_name, slicer_settings,
             thumbnail_dir);
        }
    }
}
