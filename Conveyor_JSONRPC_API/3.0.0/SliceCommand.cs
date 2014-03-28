using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class SliceCommand : Command
    {
        bool add_start_end;
        string input_file;
        ConveyorSliceJobMetadata job_metadata;
        string output_file;
        string profile_name;
        string slicer_name;
        ConveyorSlicerSettings slicer_settings;
        string thumbnail_dir;

        public SliceCommand(int RpcId, bool Add_start_end, string Input_file, ConveyorSliceJobMetadata Job_metadata, string Output_file,
            string Profile_name,  string Slicer_name, ConveyorSlicerSettings Slicer_settings,
            string Thumbnail_dir)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
            add_start_end = Add_start_end;
            input_file = Input_file;
            job_metadata = Job_metadata;
            output_file = Output_file;
            profile_name = Profile_name;
            slicer_name = Slicer_name;
            slicer_settings = Slicer_settings;
            thumbnail_dir = Thumbnail_dir;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Slice(rpcid, add_start_end, input_file, job_metadata, output_file,
             profile_name, slicer_name, slicer_settings,
             thumbnail_dir);
        }
    }
}
