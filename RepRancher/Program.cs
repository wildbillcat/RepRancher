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
            //rpcCall.Add(new JProperty("method", "add"));

            List<object> Params = new List<object>();
            // params is a collection values which the method requires..
            if (Params.Count == 0)
            {
                rpcCall.Add(new JProperty("params", new JArray()));
            }
            else
            {
                JArray props = new JArray();
                // add the props in the reverse order!
                foreach(string param in Params)
                {
                    // add the params
                    props.Add(param);
                }
                rpcCall.Add(new JProperty("params", props));
            }

            // serialize json for the request
            string s = JsonConvert.SerializeObject(rpcCall);
            byte[] byteArray = Encoding.UTF8.GetBytes(s);
            

            CookieContainer CookieContainer = new CookieContainer();
            HttpWebRequest HttpRequest = WebRequest.CreateHttp("http://localhost:9999");
            //HttpWebRequest HttpRequest = WebRequest.CreateHttp("http://validate.jsontest.com/");
            //HttpWebRequest HttpRequest = WebRequest.CreateHttp("http://www.raboof.com/projects/jayrock/demo.ashx");
            HttpRequest.ContentType = "application/json";
            HttpRequest.Method = "POST";
            HttpRequest.CookieContainer = CookieContainer;

            HttpRequest.ContentLength = byteArray.Length;
            using (Stream dataStream = HttpRequest.GetRequestStream())
            {
                dataStream.Write(byteArray, 0, byteArray.Length);
                dataStream.Close();
            }

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
