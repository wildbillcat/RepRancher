using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._0._1
{
    /*
     * This Class is a list of static methods to generate RPC commands and return their replies.
     */
    public class ServerAPI
    {
        /*
         * print
         * This method creates and starts a print job.
         * 
         * @param int rpcid : This is the rpc identification number of the rpc method, since the server can reply asyncronously
         * @param bool has_start_end : Default: false
         * @param string input_file : This is the direct path to the file looking to be printed
         * @param ConveyorJobMetadata job_metadata : This denotes how long the print will take and how much material will be used
         * @param string machine_name : This is the Machine hash of the printer
         * @param string[] material_name : This is an array of Materials types, ie. "PLA", "ABS"
         * @param ConveyorSlicerSettings slicer_settings : This contains all the settings used to slice a file before printing. 
         * @param string thumbnail_dir : We theorize this is a file path where the pictures the new printer takes will be placed.
         * @return string : This is the RPC String used to issue the command
         */
        public static string Print(int rpcid, bool has_start_end, string input_file, Conveyor_JSONRPC_API._3._0._0.ConveyorPrintJobMetadata job_metadata,
            string machine_name, string[] material_name, Conveyor_JSONRPC_API._3._0._0.ConveyorSlicerSettings slicer_settings,
            string thumbnail_dir)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("has_start_end", has_start_end));
            Params.Add(new JProperty("input_file", input_file));
            JObject MetaData = new JObject();
            MetaData.Add("duration_s", job_metadata.duration_s);
            MetaData.Add("extrusion_distance_a_mm", job_metadata.extrusion_distance_a_mm);
            MetaData.Add("extrusion_mass_a_grams", job_metadata.extrusion_mass_a_grams);
            Params.Add(new JProperty("job_metadata", MetaData));
            Params.Add(new JProperty("machine_name", machine_name));
            Params.Add(new JProperty("metadata", null));
            JObject Slicer = new JObject();
            Slicer.Add("default_raft_extruder", slicer_settings.default_raft_extruder);
            Slicer.Add("default_support_extruder", slicer_settings.default_support_extruder);
            Slicer.Add("do_auto_raft", slicer_settings.do_auto_raft);
            Slicer.Add("do_auto_support", slicer_settings.do_auto_support);
            Slicer.Add("extruder", slicer_settings.extruder);
            Slicer.Add("extruder_temperatures", new JArray(slicer_settings.extruder_temperatures));
            Slicer.Add("heat_platform", slicer_settings.heat_platform);
            Slicer.Add("infill", slicer_settings.infill);
            Slicer.Add("layer_height", slicer_settings.layer_height);
            Slicer.Add("materials", new JArray(slicer_settings.materials));
            Slicer.Add("path", slicer_settings.path);
            Slicer.Add("platform_temperature", slicer_settings.platform_temperature);
            Slicer.Add("print_speed", slicer_settings.print_speed);
            Slicer.Add("raft", slicer_settings.raft);
            Slicer.Add("shells", slicer_settings.shells);
            Slicer.Add("slicer", slicer_settings.slicer);
            Slicer.Add("support", slicer_settings.support);
            Slicer.Add("travel_speed", slicer_settings.travel_speed);
            Params.Add(new JProperty("slicer_settings", Slicer));
            Params.Add(new JProperty("thumbnail_dir", thumbnail_dir));
            return BuildRPCString(rpcid, "print", Params);
        }

        private static string BuildRPCString(int rpcid, string MethodName)
        {
            return BuildRPCString(rpcid, MethodName, new List<JProperty>());
        }

        private static string BuildRPCString(int rpcid, string MethodName, List<JProperty> Params)
        {
            JObject rpcCall = new JObject();
            rpcCall.Add(new JProperty("id", rpcid));
            rpcCall.Add(new JProperty("jsonrpc", "2.0"));
            rpcCall.Add(new JProperty("method", MethodName));
            // params is a collection values which the method requires..
            if (Params.Count == 0)
            {
                rpcCall.Add(new JProperty("params", new JArray()));
            }
            else
            {
                JObject props = new JObject();
                // add the props in the reverse order!
                foreach (JProperty param in Params)
                {
                    // add the params
                    props.Add(param);
                }
                rpcCall.Add(new JProperty("params", props));
            }

            // serialize json for the request
            return JsonConvert.SerializeObject(rpcCall);
        }

        /*
         * GetResult
         * 
         * This Method parses out the Result value into the expected object
         * 
         * @param string JSON : This is the json reply recieved from conveyor.
         * @return T : This is the object or object collection parsed from the reply.
         */
        public static T GetResult<T>(string JSON)
        {
            if (JSON[JSON.Length - 1] != '}')
            {
                JSON = string.Concat(JSON, "}");
            }
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jResult = JReply["result"];
            T result = jResult.ToObject<T>();
            return result;
        }
    }
}
