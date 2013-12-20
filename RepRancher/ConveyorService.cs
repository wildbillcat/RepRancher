using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Threading;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using Conveyor_JSONRPC_API;
using Conveyor_JSONRPC_API.Types;

namespace RepRancher
{
    class ConveyorService
    {
        IPEndPoint ipEndPoint;
        TcpClient tcpClient;
        Stream dataStream;
        //List<string> repliesFromConveyor;
        Thread t1;
        ConveyorListenerService ears;
        public static Mutex gM1;

        public ConveyorService(string IPaddress, int PortNumber)
        {
            gM1 = new Mutex(true, "ConveyorReplyList");
            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            ears = new ConveyorListenerService(tcpClient, dataStream);
            t1 = new Thread(new ThreadStart(ears.ThreadRun));
            t1.Start();
        }
    }

    class ConveyorListenerService
    {
        TcpClient tcpClient;
        Stream dataStream;

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
        }

        public void ThreadRun()
        {
            while (true)
            {
                byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                ProcessJSONMessageAsync(Reply);
            }
        }

        public static bool ProcessJSONMessageAsync(string JSON)
        {
            //Determine Message Type:
            JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
            if (Reply != JsonReplyType.Method)
            {
                string MethodName = ConveyorJsonReplyParser.GetMethodName(JSON);
                Console.WriteLine("Detected Method : " + MethodName);
                if (MethodName.Equals(ClientAPI.jobadded))
                {
                    job AddedJob = ClientAPI.JobAdded(JSON);
                    Console.WriteLine("Job Name : " + AddedJob.name);
                    Console.WriteLine("Progress : " + AddedJob.progress.progress);
                    Console.WriteLine("Machine Name: " + AddedJob.machine_name);
                    Console.WriteLine();
                }
                else if (MethodName.Equals(ClientAPI.jobchanged))
                {
                    job ChangedJob = ClientAPI.JobChanged(JSON);
                    Console.WriteLine("Job Name : " + ChangedJob.name);
                    Console.WriteLine("Progress : " + ChangedJob.progress.progress);
                    Console.WriteLine("Machine Name: " + ChangedJob.machine_name);
                    Console.WriteLine();
                }
                else if (MethodName.Equals(ClientAPI.machine_state_changed))
                {
                    printer ChangedPrinter = ClientAPI.Machine_State_changed(JSON);
                    Console.WriteLine("Display Name : " + ChangedPrinter.displayName);
                    Console.WriteLine("Name : " + ChangedPrinter.name);
                    Console.WriteLine("Unique Name : " + ChangedPrinter.uniqueName);
                    Console.WriteLine("Temperature : " + ChangedPrinter.state);
                    Console.WriteLine();
                }
                else if (MethodName.Equals(ClientAPI.machine_temperature_changed))
                {
                    printer ChangedPrinter = ClientAPI.Machine_Temperature_Changed(JSON);
                    Console.WriteLine("Display Name : " + ChangedPrinter.displayName);
                    Console.WriteLine("Name : " + ChangedPrinter.name);
                    Console.WriteLine("Unique Name : " + ChangedPrinter.uniqueName);
                    Console.WriteLine("Temperature : " + ChangedPrinter.temperature);
                    Console.WriteLine();

                }
                else if (MethodName.Equals(ClientAPI.port_attached))
                {
                    port AttachedPort = ClientAPI.Port_Attached(JSON);
                    Console.WriteLine("Name : " + AttachedPort.name);
                    Console.WriteLine("Type : " + AttachedPort.type);
                    Console.WriteLine("Pid : " + AttachedPort.pid);
                    Console.WriteLine("Vid : " + AttachedPort.vid);
                    Console.WriteLine();
                }
                else if (MethodName.Equals(ClientAPI.port_detached))
                {
                    string DetachedPortName = ClientAPI.Port_Detached(JSON); 
                    Console.WriteLine(DetachedPortName);
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("This Method is not known! Take note!");
                    Console.WriteLine();
                    //should write to a central log file.
                }
            }
            else if (Reply != JsonReplyType.Result)
            {
                int MethodID = ConveyorJsonReplyParser.GetResultID(JSON);
                Console.WriteLine("Recieved Response to Command : ", MethodID);
                Console.WriteLine();
            }
            else if (Reply != JsonReplyType.Error)
            {
                JsonError<string> Error = JsonConvert.DeserializeObject<JsonError<string>>(JSON);
                Console.WriteLine("Error");
                Console.WriteLine(Error.error.message);
                Console.WriteLine();
            } 
            else if (Reply != JsonReplyType.Invalid)
            {
                Console.WriteLine("Invalid JSON Detected:");
                Console.WriteLine(JSON);
                Console.WriteLine();
            }
            else
            {
                //Something went really Wrong
                Console.WriteLine("Something went really wrong!");
                Console.WriteLine();
                return false;
            }
            Console.WriteLine(JSON);
            return true;
        }
    }
}
