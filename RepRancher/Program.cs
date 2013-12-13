using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
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
            rpcCall.Add(new JProperty("id", "2"));
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
            byte[] byteArray = Encoding.ASCII.GetBytes(s);

            using (TcpClient tcpClient = new TcpClient())
            {
                IPAddress ipAddress = IPAddress.Parse("127.0.0.1");
                IPEndPoint ipEndPoint = new IPEndPoint(ipAddress, 9999);
                tcpClient.Connect(ipEndPoint);
                string Reply;
                using (Stream dataStream = tcpClient.GetStream())
                {
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                    int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                    Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                    Console.WriteLine(Reply);
                }
            }

        }
    }
}
