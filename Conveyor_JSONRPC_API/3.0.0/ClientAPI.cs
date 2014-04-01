using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Conveyor_JSONRPC_API._3._0._0
{
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

        //This Generic Method is used to Parse Method Parameters recieved from conveyor
        public static T GetParams<T>(string JSON)
        {
            if (JSON[JSON.Length - 1] != '}')
            {
                JSON = string.Concat(JSON, "}");
            }
            JObject JReply = JsonConvert.DeserializeObject<JObject>(JSON);
            JToken jParams = JReply["params"];
            T Params = jParams.ToObject<T>();
            return Params;
        }
    }
}
