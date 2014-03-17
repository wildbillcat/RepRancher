using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public static class ConveyorJsonReplyParser
    {
        public static JsonReplyType ReplyType(string Reply)
        {
            try
            {
                JObject JReply = JsonConvert.DeserializeObject<JObject>(Reply);
                foreach (JToken J in JReply.Children())
                {
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
