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

            JObject rpcCall = new JObject();
            rpcCall.Add(new JProperty("jsonrpc", "2.0"));
            rpcCall.Add(new JProperty("id", "1"));
            rpcCall.Add(new JProperty("method", "hello"));

            Dictionary<int, string> Params = new Dictionary<int, string>();
            // params is a collection values which the method requires..
            if (Params.Keys.Count == 0)
            {
                rpcCall.Add(new JProperty("params", new JArray()));
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
                rpcCall.Add(new JProperty("params", props));
            }

            // serialize json for the request
            string s = JsonConvert.SerializeObject(rpcCall);

            CookieContainer CookieContainer = new CookieContainer();
            HttpWebRequest HttpRequest = WebRequest.CreateHttp("http://localhost:9999");
            HttpRequest.ContentType = "text/json";
            HttpRequest.Method = "POST";
            HttpRequest.CookieContainer = CookieContainer;
            HttpWebResponse HttpResponse;
            try
            {
                HttpResponse = (HttpWebResponse)HttpRequest.GetResponse();
            }
            catch (WebException error)
            {
                HttpResponse = (HttpWebResponse)error.Response;
            }
            string Reply;
            using (var streamReader = new StreamReader(HttpResponse.GetResponseStream()))
            {
               Reply = streamReader.ReadToEnd();
            }
            Console.WriteLine(Reply);
        }
    }
}
