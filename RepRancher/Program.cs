using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;


namespace RepRancher
{
    class Program
    {
        static void Main(string[] args)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create("http://localhost.:8332");
            webRequest.Credentials = new NetworkCredential("user", "pwd");
            /// important, otherwise the service can't desirialse your request properly
            webRequest.ContentType = "application/json-rpc";
             webRequest.Method = "POST";
 
            JObject joe = new JObject();
            joe.Add(new JProperty("jsonrpc", "1.0"));
            joe.Add(new JProperty("id", "1"));
            joe.Add(new JProperty("method", Method));

            Dictionary<int, string> Params = new Dictionary<int,string>();
            // params is a collection values which the method requires..
            if (Params.Keys.Count == 0)
            {
                joe.Add(new JProperty("params", new JArray()));
            }
            else
            {
                JArray props = new JArray();
                // add the props in the reverse order!
                for (int i = Params.Keys.Count - 1; i >= 0; i--)
                {
                // add the params
                props.Add(Params[i]);
                }
                joe.Add(new JProperty("params", props));
            }
 
            // serialize json for the request
            string s = JsonConvert.SerializeObject(joe);
            byte[] byteArray = Encoding.UTF8.GetBytes(s);
            webRequest.ContentLength = byteArray.Length;
            Stream dataStream = webRequest.GetRequestStream();
            dataStream.Write(byteArray, 0, byteArray.Length);
            dataStream.Close();
 
            WebResponse webResponse = webRequest.GetResponse();
        }
    }
}
