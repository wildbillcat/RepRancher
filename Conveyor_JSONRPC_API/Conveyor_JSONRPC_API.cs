using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Conveyor_JSONRPC_API.Types;

namespace Conveyor_JSONRPC_API
{
    namespace Types
    {
        /*
         *  absolute-directory-path :: (string)
         *  
         *  An absolute directory path.
         */
        /* Commented out since API Class is indistingishable from a native type
        public class absolutedirectorypath : String
        {

        }
         */

        /*
         *  absolute-file-path :: (string)
         *  
         *  An absolute file path.
         */
        /* Commented out since API Class is indistingishable from a native type
        public class absolutefilepath : string
        {
            public string value { get; set; }
        }
         */

        /*
         * {
         * "name": "COM3:9153:45077", 
         * "vid": 9153, 
         * "pid": 45077, 
         * "label": "Replicator 2", 
         * "driver_profiles": {
         *      "s3g": ["Replicator2X", "Replicator2"]}, 
         * "iserial": "7523733353635171E0D1", 
         * "path": "COM3", 
         * "type": "SERIAL"
         * }
         */
        public class port
        {
            public string name { get; set; }
            public int vid { get; set; }
            public int pid { get; set; }
            public string label { get; set; }
            public Dictionary<string, string[]> driver_profiles { get; set; }
            public string iserial { get; set; }
            public string path { get; set; }
            public string type { get; set; }
        }

        /*
         *  job
         *  
         *{
         *"machine_name": "23C1:B015:75237333536351713081", 
         *"failure": null, 
         *"profile_name": "Replicator2", 
         *"port_name": "COM3:9153:45077", 
         *"id": 36, 
         *"name": "D2", 
         *"state": "RUNNING", 
         *"driver_name": "s3g", 
         *"progress": {
         *"progress": 34, 
         *"name": "print"}, 
         *"type": "PRINT_JOB", 
         *"conclusion": null
         *}
         */
        public class job
        {
            public string machine_name { get; set; }
            public JobFailure failure { get; set; }
            public string profile_name { get; set; }
            public string port_name { get; set; }
            public int id { get; set; }
            public string name { get; set; } //name of the Print Job
            public string state { get; set; }
            public string driver_name { get; set; }
            public jobstep progress { get; set; }
            public string type { get; set; }
            public string conclusion { get; set; }
        }

        /*
         * failure 
         * "failure": {
         * "exception": {
         * "winerror": "None", 
         * "name": "UnspecifiedAxisLocationError", 
         * "errno": "None", 
         * "args": "()", 
         * "strerror": "None", 
         * "filename": "None", 
         * "message": "UnspecifiedAxis: X\nCommand: G1 Z155 F900\nLineNumber: 16322"
         * }}         * 
         */
        public class JobFailure
        {
            public JobException exception { get; set; }
        }

        /*
         * exception 
         * "exception": {
         * "winerror": "None", 
         * "name": "UnspecifiedAxisLocationError", 
         * "errno": "None", 
         * "args": "()", 
         * "strerror": "None", 
         * "filename": "None", 
         * "message": "UnspecifiedAxis: X\nCommand: G1 Z155 F900\nLineNumber: 16322"
         * }
         */
        public class JobException{
            public string winerror { get; set; }
            public string name { get; set; }
            public string errno { get; set; }
            public object args { get; set; }
            public string strerror { get; set; }
            public string filename { get; set; }
            public string message { get; set; }
        }

        /*
         *  job-step
         *  
         * { "name": (job-step-name)
         * , "progress": (number)
         * }
         */
        public class jobstep
        {
            public string name { get; set; }
            public int progress { get; set; }
        }

        /*
         *  printer
         *  
         * { 
         * "displayName": "The Replicator 2X", 
         * "name": "The Replicator 2X", 
         * "printerType": "The Replicator 2X", 
         * "profile_name": "Replicator2X", 
         * "hasHeatedPlatform": true, 
         * "toolhead_target_temperature": null, 
         * "build_volume": [246, 152, 155], 
         * "state": "DISCONNECTED", 
         * "driver_name": "s3g", "port_name": null, 
         * "temperature": 
         * {
         * "heated_platforms": {}, 
         * "tools": {}
         * }, 
         * "uniqueName": "The Replicator 2X", 
         * "canPrintToFile": null, 
         * "machineNames": ["TheReplicator2X"], 
         * "numberOfToolheads": 2, 
         * "firmware_version": null, 
         * "canPrint": false
         * }
         */
        public class printer
        {
            public string displayName { get; set; }
            public string name { get; set; }
            public string printerType { get; set; }
            public string profile_name { get; set; }
            public bool hasHeatedPlatform { get; set; }
            public string[] toolhead_target_temperature { get; set; } //Not sure if Null toolhead targets are acceptable.
            public int[] build_volume { get; set; }
            public string state { get; set; }
            public string driver_name { get; set; }
            public string port_name { get; set; }
            public tooltemperatures temperature { get; set; }
            public string uniqueName { get; set; }
            public bool? canPrintToFile { get; set; }
            public string[] machineNames { get; set; }
            public int numberOfToolheads { get; set; }
            public string firmware_version { get; set; }
            public bool canPrint { get; set; }
        }

        /*
         *  slicer-settings :: (string)
         *  
         * A slicer settings object.
         * {
         * "default_raft_extruder":0,
         * "default_support_extruder":0,
         * "do_auto_raft":true,
         * "do_auto_support":false,
         * "extruder":"0",
         * "extruder_temperatures":[230,230],
         * "heat_platform":false,
         * "infill":0.10,
         * "layer_height":0.20,
         * "path":null,
         * "platform_temperature":110,
         * "print_speed":90,
         * "raft":true,
         * "shells":2,
         * "slicer":"MIRACLEGRUE",
         * "support":false,
         * "travel_speed":150
         * }
         */
        public class slicersettings
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
            public string path { get; set; } //
            public int platform_temperature { get; set; }
            public int print_speed { get; set; }
            public bool raft { get; set; }
            public int shells { get; set; }
            public string slicer { get; set; }
            public bool support { get; set; }
            public int travel_speed { get; set; }
           
            public slicersettings()
            {
                default_raft_extruder = 0;
                do_auto_raft = true;
                do_auto_support = false;
                extruder = "0";
                extruder_temperatures = new int[]{230, 230};
                heat_platform = false;
                infill = 0.1;
                layer_height = 0.2;
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

        /*
         *   tool-temperatures :: (string)
         *   
         * A list of temperatures for all toolheads and heated build platforms on the printer.
         * 
         * { "tools" :
         * { (tool-name) : 
         * (temperature)
         * , ...
         * }
         * , "heated_platforms" :
         * { (tool-name) : 
         * (temperature)
         * , ...
         * }
         * }
         */
        public class tooltemperatures
        {
            public Dictionary<string, int> tools { get; set; }
            public int[] heated_platforms { get; set; }
        }

        /*
         *  tool :: (tool)
         *  
         * implicit class created to account for object in tooltemperatures object.
         * 
         * { 'toolname':               (tool-name)
         * , 'temperature':             (temperature)}
         */
        public class tool
        {
            
            public string toolname { get; set; }
            public double temperature { get; set; }
        }
    }

    /*
     * The server only ever makes JSON-RPC notification calls to the client. 
     * It never expects a response. The result for any of the client API methods is 'null'.
     */
    public static class ClientAPI
    {
        //JSON Method Names
        public static string machine_temperature_changed = "machine_temperature_changed";
        public static string machine_state_changed = "machine_state_changed";
        public static string jobadded = "jobadded";
        public static string jobchanged = "jobchanged";
        public static string port_detached = "port_detached";
        public static string port_attached = "port_attached";

        public static T GetParams<T>(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            T Params = jParams.ToObject<T>();
            return Params;
        }

        /*
         * machine_temperature_changed
         * 
         * The server invokes this method whenever a machine temperature changes.
         * 
         * params
         * 
         * (job)
         */
        public static printer Machine_Temperature_Changed(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            printer PRINTER = jParams.ToObject<printer>();
            return PRINTER;
        }

        /*
         * machine_state_changed
         * 
         * The server invokes this method whenever a machine state changes.
         * 
         * params
         * 
         * (job)
         */
        public static printer Machine_State_changed(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            printer PRINTER = jParams.ToObject<printer>();
            return PRINTER;
        }

        /*
         * jobadded
         * 
         * The server invokes this method whenever a new job is added.
         * 
         * params
         * 
         * (job)
         */
        public static job JobAdded(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            job JOB = jParams.ToObject<job>();
            return JOB;
        }

        /*
         * jobchanged
         * The server invokes this method whenever a job changes.
         * params
         * (job)
         */
        public static job JobChanged(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            job JOB = jParams.ToObject<job>();
            return JOB;
        }

        /*
         * port_attached
         * The server invokes this method after a job finishes.
         * params
         * (job)
         */
        public static port Port_Attached(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            port PORT = jParams.ToObject<port>();
            return PORT;
        }

        /*
         * jobremoved
         * The server invokes this method after a job finishes.
         * params
         * (job)
         */
        public static string Port_Detached(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            string PORT_NAME = jParams.Value<string>("port_name");
            return PORT_NAME;
        }

    }

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
        public static string Print(int rpcid, string[] gcode_processor_names, bool has_start_end, string input_file, string machine_name, string[] material_name, string slicer_name, slicersettings slicer_settings)
        {
            List<JProperty> Params = new List<JProperty>();
            Params.Add(new JProperty("gcode_processor_names", gcode_processor_names));
            Params.Add(new JProperty("has_start_end", has_start_end));
            Params.Add(new JProperty("input_file", input_file));
            Params.Add(new JProperty("machine_name", machine_name));
            Params.Add(new JProperty("material_name", material_name));
            Params.Add(new JProperty("slicer_name", slicer_name));
            Params.Add(new JProperty("slicer_settings", slicer_settings));
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
            Params.Add(new JProperty("jobid", jobid.ToString()));
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
         * getprinters
         * This parses the return of the GetPrintersMethod
         */
        public static printer[] GetPrinters(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            string Result = JReply.GetValue("result").ToString();
            printer[] printers = JsonConvert.DeserializeObject<printer[]>(Result);
            return printers;
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
         * getjobs
         * 
         * This method parses the return of getjobs
         */
        public static job[] GetJobs(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            string Result = JReply.GetValue("result").ToString();
            job[] jobs = JsonConvert.DeserializeObject<job[]>(Result);
            return jobs;
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
         * getports
         * 
         * This method parses the return of getports
         */
        public static port[] GetPorts(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            string Result = JReply.GetValue("result").ToString();
            port[] ports = JsonConvert.DeserializeObject<port[]>(Result);
            return ports;
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
            rpcCall.Add(new JProperty("id", rpcid.ToString()));
            rpcCall.Add(new JProperty("method", MethodName));
            //rpcCall.Add(new JProperty("method", "add"));


            // params is a collection values which the method requires..
            if (Params.Count == 0)
            {
                rpcCall.Add(new JProperty("params", new JArray()));
            }
            else
            {
                JArray props = new JArray();
                // add the props in the reverse order!
                foreach (string param in Params)
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
            string Result = JsonConvert.SerializeObject(JReply.GetValue("result"));
            T result = JsonConvert.DeserializeObject<T>(Result);
            return result;
        }
    }

    /*
     *  jsonrpcresult
     *  
     * object to encapsulate result messages from Conveyor, which will be formatted in an rpc syntax
     * 
     */
    public class JsonRpcResult<T>
    {
        public double jsonrpc { get; set; }
        public T result { get; set; }
        public int id { get; set; }
    }

    /*
     *  jsonerror
     *  
     * object to encapsulate error messages from Conveyor, which will be formatted in an rpc syntax
     * 
     */
    public class JsonError<T>
    {
        public double jsonrpc { get; set; }
        public int id { get; set; }
        public ConveyorError error { get; set; }
    }

    public class ConveyorError
    {
        public string message { get; set; }
        public int code { get; set; }
        public Data data { get; set; }
    }

    public class Data
    {
        string[] args { get; set; }
        string name { get; set; }
    }

    public enum JsonReplyType
    {
        Error, Method, Result, Invalid
    }

    public static class ConveyorJsonReplyParser
    {
        public static JsonReplyType ReplyType(string Reply){
            try
            {
                JObject JReply = JsonConvert.DeserializeObject<JObject>(Reply);
                foreach(JToken J in JReply.Children()){
                    if (J != null)
                    {
                        JProperty Prop = (JProperty)J;
                        if (Prop.Name.Equals("error"))
                        {
                            return JsonReplyType.Error;
                        }
                        else if (Prop.Name.Equals("params"))
                        {
                            return JsonReplyType.Method;
                        }
                        else if (Prop.Name.Equals("result"))
                        {
                            return JsonReplyType.Result;
                        }
                    }
                }

            }
            catch { }
            return JsonReplyType.Invalid;
        }

        public static string GetMethodName(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            string MethodName = JReply.Value<string>("method");
            return MethodName;
        }

        public static int GetResultID(string JSON)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);

            int ResultID = int.Parse(JReply.GetValue("id").ToString());
            return ResultID;
        }
    }

}
