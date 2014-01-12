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
        Thread t1;
        ConveyorListenerService ears;
        public static Mutex ConveyorReplyMutex;


        public ConveyorService(string IPaddress, int PortNumber)
        {
            ConveyorReplyMutex = new Mutex(true, "ConveyorReplyMutex");
            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            ears = new ConveyorListenerService(tcpClient, dataStream, ConveyorReplyMutex);
            t1 = new Thread(new ThreadStart(ears.ThreadRun));
            t1.Start();
        }
    }

    class ConveyorListenerService
    {
        TcpClient tcpClient;
        Stream dataStream;
        string repliesFromConveyor;
        public Mutex ConveyorReplyMutex;

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream, Mutex conveyorReplyMutex)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            ConveyorReplyMutex = conveyorReplyMutex;
        }

        public void ThreadRun()
        {
            FileStream ostrm;
            StreamWriter writer;
            TextWriter oldOut = Console.Out;
            try
            {
                ostrm = new FileStream("./Redirect.txt", FileMode.OpenOrCreate, FileAccess.Write);
                writer = new StreamWriter(ostrm);
            }
            catch (Exception e)
            {
                Console.WriteLine("Cannot open Redirect.txt for writing");
                Console.WriteLine(e.Message);
                return;
            }
            Console.SetOut(writer);

            while (true)
            {
                byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);

                //Lock the Replies
                //ConveyorReplyMutex.
                
                //Attach new input to current string
                repliesFromConveyor = string.Concat(repliesFromConveyor, Reply);

                //Check to see if there is a command
                string[] command = ContainsCompleteJSONObject(repliesFromConveyor);
                if (command.Length == 1)
                {
                    repliesFromConveyor = command[0];
                }
                else
                {
                    repliesFromConveyor = command[0];
                    try
                    {
                        if (ProcessJSONMessage(command[1]))
                        {
                            System.Console.WriteLine("Successfully Processed Object");
                        }
                        else
                        {
                            System.Console.WriteLine("It's all gone wrong");
                        }
                    }
                    catch(Exception e)
                    {
                        System.Console.WriteLine("It's all gone very wrong! See:");
                        System.Console.WriteLine(e.Message);
                    }
                    
                }

                //Unlock the Replies

                //ProcessJSONMessage(Reply);
            }
        }

        //String[0] = New JSON string
        //String[1] = JSON Object
        public string[] ContainsCompleteJSONObject(string JSON)
        {
            System.Console.WriteLine("Analyzing the following String:");
            System.Console.WriteLine(JSON);
            int Bracket = 0;
            bool BracketFound = false;
            for(int i = 0; i < JSON.Length; i++){
                if(JSON[i] == '{'){
                    BracketFound = true;
                    Bracket = i;
                    System.Console.WriteLine("Bracket found at character: " + Bracket);
                    break;
                }
            }

            if(BracketFound){
                BracketFound = false;
            }else{
                //Bracket wasn't found, return
                return new string[] {JSON};
            }

            if(Bracket > 0){
                System.Console.WriteLine("Shedding the Following:");
                System.Console.WriteLine(JSON.Substring(0,Bracket));
                JSON = JSON.Substring(Bracket+1);
            }
            
            Bracket = 1;
            for(int i = 1; i < JSON.Length; i++){
                char C = JSON[i];
                if(C == '{'){
                    Bracket++;
                }else if(C == '}'){
                    Bracket--;
                }
                if(Bracket == 0){
                    BracketFound = true;
                    Bracket = i;
                    break;
                }
            }
            
            if(BracketFound){
                string JSONObject = JSON.Substring(0, Bracket);
                JSON = JSON.Substring(Bracket+1);
                return new string[] { JSON, JSONObject };
            }
            //If execution gets this far, object is incomplete, just return JSON
            return new string[] { JSON };
        }

        public static bool ProcessJSONMessage(string JSON)
        {
            //Determine Message Type:
            JsonReplyType Reply = ConveyorJsonReplyParser.ReplyType(JSON);
            if (Reply == JsonReplyType.Method)
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
            else if (Reply == JsonReplyType.Result)
            {
                int MethodID = ConveyorJsonReplyParser.GetResultID(JSON);
                Console.WriteLine("Recieved Response to Command : ", MethodID);
                Console.WriteLine();
            }
            else if (Reply == JsonReplyType.Error)
            {
                JsonError<string> Error = JsonConvert.DeserializeObject<JsonError<string>>(JSON);
                Console.WriteLine("Error");
                Console.WriteLine(Error.error.message);
                Console.WriteLine();
            } 
            else if (Reply == JsonReplyType.Invalid)
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
