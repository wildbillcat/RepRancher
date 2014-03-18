using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._0._0
{
    /*
     * This Class is a list of static methods to generate RPC commands and return their replies.
     */
    public class ServerAPI
    {
        /*
         * hello
         * This method *MUST* be called exactly once when a client first connects to conveyor. 
         * Clients *MUST* not invoke any other methods before calling hello.
         * 
         * Clients *MUST* not invoke hello more than once.
         * params
         * {            }
         * result
         * "world"
         * 
         * @param int rpcid : This is the rpcidentification number of the rpc method, since the server can reply asyncronously.
         */
        public static string Hello(int rpcid)
        {
            return BuildRPCString(rpcid, "hello");
        }

        /*
         * print
         * This method creates and starts a print job.
         * params
         * {
         * "gcode_processor_names":null,
         * "has_start_end":true,
         * "input_file":"C:/Users/Rob/AppData/Local/Temp/conveyor-ui-{46224d0f-264c-41cf-abff-6b7443314f21}/Mr_Jaws_2.3.0.gcode",
         * "machine_name":"23C1:B015:7523733353635171A221",
         * "material_name":["PLA","PLA"],
         * "slicer_name":"miraclegrue",
         * "slicer_settings": 
         * }
         * result
         * (job)
         */
        public static string Print(int rpcid, bool has_start_end, string input_file, ConveyorJobMetadata job_metadata, string machine_name, string[] material_name, string slicer_name, ConveyorSlicerSettings slicer_settings)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("has_start_end", has_start_end));
            Params.Add(new JProperty("input_file", input_file));
            Params.Add(new JProperty("job_metadata", job_metadata));
            Params.Add(new JProperty("machine_name", machine_name));
            Params.Add(new JProperty("metadata", null));
            Params.Add(new JProperty("slicer_name", slicer_name));
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
            return BuildRPCString(rpcid, "print", Params);
        }

        /*
         * printtofile
         * This method creates and starts a print-to-file job.
         * The "printername" field name and type should be changed to "profilename" and (profile-name).
         * params
         * { "profilename":     (profile-name)            
         * , "inputpath":       (absolute-file-path)            
         * , "outputpath":      (absolute-file-path)            
         * , "preprocessor":    (preprocessors)            
         * , "skip_start_end":  (bool)            
         * , "archive_lvl":     (archive-level)            
         * , "archive_dir:"     (absolute-directory-path)            
         * , "slicer_settings": (slicer-settings)            
         * , "material":        (material-name)            
         * }
         * result
         * (job)
         */
        public static string PrintToFile(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "printtofile");
        }

        /*
         * slice
         * This method creates and starts a slice job.
         * params
         * { "profilename":     (profile-name)            
         * , "inputpath":       (absolute-file-path)            
         * , "outputpath":      (absolute-file-path)            
         * , "preprocessor":    (preprocessors)            
         * , "skip_start_end":  (bool)            
         * , "archive_lvl":     (archive-level)            
         * , "archive_dir:"     (absolute-directory-path)            
         * , "slicer_settings": (slicer-settings)            
         * , "material":        (material-name)            
         * }
         *  result
         *  (job)
         */
        public static string Slice(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "slice");
        }

        /*
         * canceljob
         * This method schedules a job for cancellation.        
         * The job may or may not be canceled when this method returns.
         * 
         * params
         * { "rpcid": (job-rpcid)            
         * }
         * result
         * null
         */
        public static string CancelJob(int rpcid, int jobid)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("id", jobid));
            return BuildRPCString(rpcid, "canceljob", Params);
        }

        /*
         * getprinter
         * This method returns the details for a printer.
         * params
         * { "uniquename": (printer-unique-name)            
         * }
         * result
         * (printer)
         */
        public static string GetPrinter(int rpcid, string uniquename)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("uniquename", uniquename));
            return BuildRPCString(rpcid, "getprinter", Params);
        }

        /*
         * getprinters
         * This method returns the list of printers.
         * params
         * {            
         * }
         * result
         * [ (printer)            
         * , ...            
         * ]
         */
        public static string GetPrinters(int rpcid)
        {
            return BuildRPCString(rpcid, "getprinters");
        }

        /*
         * getjob
         * This method returns the details for a job.
         * params
         * { "rpcid": (job-rpcid)            
         * }
         * result
         * (job)
         */
        public static string GetJob(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "print");
        }

        /*
         * getjobs
         * 
         * This method returns the list of jobs.
         * 
         * params
         * 
         * {
         * }
         * 
         * result
         * 
         * [ (job)
         * , ...
         * ]
         */
        public static string GetJobs(int rpcid)
        {
            return BuildRPCString(rpcid, "getjobs");
        }

        /*
         * getports
         * 
         * This method returns the list of jobs.
         * 
         * params
         * 
         * {
         * }
         * 
         * result
         * 
         * [ (job)
         * , ...
         * ]
         */
        public static string GetPorts(int rpcid)
        {
            return BuildRPCString(rpcid, "getports");
        }

        /*
        * "method":"connect",
        * "params":{
        * "driver_name":null,
        * "machine_name":null,
        * "persistent":false,
        * "port_name":"COM3:9153:45077",
        * "profile_name":null}
        */
        public static string Connect(int rpcid, string driver_name, string machine_name, bool persistent, string port_name, string profile_name)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("driver_name", driver_name));
            Params.Add(new JProperty("machine_name", machine_name));
            Params.Add(new JProperty("persistent", persistent));
            Params.Add(new JProperty("port_name", port_name));
            Params.Add(new JProperty("profile_name", profile_name));
            return BuildRPCString(rpcid, "connect", Params);
        }

        /*
         * dir
         */
        public static string Dir(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "print");
        }

        /*
         * printer\_query
         */
        public static string Printer_Query(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "print");
        }

        /*
         * printer\_scan
         */
        public static string Printer_Scan(int rpcid)
        {
            throw new NotImplementedException();
            List<string> Params = new List<string>();
            //Params.Add();
            return BuildRPCString(rpcid, "print");
        }

        private static string BuildRPCString(int rpcid, string MethodName)
        {
            return BuildRPCString(rpcid, MethodName, new List<JProperty>());
        }

        private static string BuildRPCString(int rpcid, string MethodName, List<JProperty> Params)
        {
            JObject rpcCall = new JObject();
            rpcCall.Add(new JProperty("jsonrpc", "2.0"));
            rpcCall.Add(new JProperty("id", rpcid));
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
         * getmany
         * Used to Parse the Results of the Following:
         * getports - port[]
         * getjobs - job[]
         * getprinters - printer[]
         * 
         */
        public static T GetResult<T>(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            //string Result = JsonConvert.SerializeObject(JReply.GetValue("result"));
            //T result = JsonConvert.DeserializeObject<T>(Result);
            JToken jResult = JReply["result"];
            T result = jResult.ToObject<T>();
            return result;
        }
    }
}
