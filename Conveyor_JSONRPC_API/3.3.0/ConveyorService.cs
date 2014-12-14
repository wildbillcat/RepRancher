using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._3._0
{
    class ConveyorService : Conveyor_JSONRPC_API.ConveyorService
    {
        ConveyorService(System.Net.IPAddress ConveyorIP, int ConveyorPort) : base(ConveyorIP, ConveyorPort){
            
        }

        /// <summary>
        /// Sends a Hello Command to Conveyor
        /// </summary>
        protected override void Hello(){
            List<JProperty> Parameters = new List<JProperty>();
            Parameters.Add(new JProperty("username", "RepRancher"));
            SendCommand("hello", Parameters);
        }

        /// <summary>
        /// THis Parses JSON Objects given to the service, updating method reception, etc.
        /// </summary>
        protected override bool ProcessJSONMessage(string JSONReply)
        {
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSONReply);
            
            int id = (int)JReply.Property("id");
            string method = (string)JReply.Property("method");
            //Method Result // Has "id": 4
            if (id > 0)
            {
                var Result = JReply.Property("result").Value;
                if (Result == null)
                {
                    //Do Nothing

                }else if (Result is JArray)
                {
                    //Method Returned Array of JObjects
                    foreach(JObject item in Result){
                        ParseJSONObject(item);
                    }
                }
                else
                {
                    //Single Object
                    return ParseJSONObject((JObject)Result);
                }
                //If ID was found, it is a result object. 
            }//ClientMethod // Has "method": "machine_state_changed"
            else if (method != null)
            {
                //machine_state_changed
                if (method.Equals("machine_state_changed"))
                {
                    /*{"params": {"compatible_firmware": false, "has_been_connected_to": false, "platform_temperature": null, "has_heated_platform": false, "toolheads": {"extruder": [{"index": 0, "filament_presence": false, "preheating": false, "tool_present": true, "current_temperature": 25, "tool_id": 4, "target_temperature": 0}]}, "number_of_toolheads": 1, "can_print": true, "printer_type": "Platypus", "firmware_version": [1, 4, 0, 188], "current_process": null, "toolhead_temperature": null, "connection_type": "offline", "toolhead_target_temperature": null, "display_name": "Replicator 6", "name": {"iserial": "23C100053C7059002409", "pid": 5, "port_type": "UsbPort", "vid": 9153}, "disabled_errors": ["filament_slip"], "driver_name": "birdwing", "build_volume": [252, 199, 150], "state": "IDLE", "profile_name": "Platypus", "online": false, "api_version": "1.0.0"}, "jsonrpc": "2.0", "method": "machine_state_changed"}*/
                    //JSON has a single printer object. Update/Add it
                }//jobadded
                else if (method.Equals("jobadded"))
                {
                    /*{"params": {"machine_name": null, "pausable": false, "failure": null, "profile_name": "Platypus", "id": 0, "name": "1 inch cube", "can_cancel": true, "state": "RUNNING", "driver_name": "birdwing", "progress": null, "type": "PrintToFileJob", "conclusion": null}, "jsonrpc": "2.0", "method": "jobadded"}*/
                }//jobchanged
                else if (method.Equals("jobchanged"))
                {
                    /*{"params": {"machine_name": null, "pausable": false, "failure": null, "profile_name": "Platypus", "id": 0, "name": "1 inch cube", "can_cancel": true, "state": "RUNNING", "driver_name": "birdwing", "progress": {"progress": 0, "name": "slice"}, "type": "PrintToFileJob", "conclusion": null}, "jsonrpc": "2.0", "method": "jobchanged"}*/
                }

                //If Method was found, this is an update from conveyor
            }

            

            //Error 

            //Other?
            throw new NotImplementedException();
        }

        protected override bool ParseJSONObject(JObject JSONObject)
        {

            throw new NotImplementedException();
        }
    }
}
