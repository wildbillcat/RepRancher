using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
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
        Thread t2;
        ConveyorListenerService ConveyorListenerServer;
        System.Timers.Timer ErrorFlush;

        /*
         * This is a list of the commands queued for printing.
         */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string> methodHistory;

        /*
         * FileStream to Associated Conveyor Error Log
         */
        FileStream ostrm;

        /*
         * StreamWriter used to communicate log errors to the file.
         */
        StreamWriter errorLog;


        public ConveyorService(string IPaddress, int PortNumber)
        {
            commandQueue = new ConcurrentQueue<string>();
            methodHistory = new ConcurrentDictionary<int, string>();
            try
            {
                ostrm = new FileStream("./error.txt", FileMode.Create, FileAccess.Write);
                errorLog = new StreamWriter(ostrm);
                System.Console.SetError(errorLog);
                Console.WriteLine("Opened Connection to Error Log");
                Console.WriteLine();
                Console.Error.WriteLine("Opening Test Message for Log");
                errorLog.Flush();
                ErrorFlush = new System.Timers.Timer(2000);
                ErrorFlush.Elapsed += new System.Timers.ElapsedEventHandler(OnTimedEvent);
                ErrorFlush.Enabled = true;
            }
            catch (Exception e)
            {
                Console.WriteLine("Cannot open ./error.txt for writing! This session will not have any error logs!");
                Console.WriteLine(e.Message);
                return;
            }

            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient();
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            ConveyorListenerServer = new ConveyorListenerService(tcpClient, dataStream);
            t1 = new Thread(new ThreadStart(ConveyorListenerServer.ListenerThreadRun));
            t2 = new Thread(new ThreadStart(ConveyorListenerServer.ProcessorThreadRun));
            t1.Start();
            t2.Start();
        }

        private void OnTimedEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            errorLog.Flush();
        }
    }

    class ConveyorCommandService
    {
        /*
         * This TCP Client is the connection to the Conveyor Service that is being Monitored
         */
        TcpClient tcpClient;

        /*
         * This is the TCP connection that the listener reads and Parses
         */
        Stream dataStream;

        /*
        * This is a list of the commands queued for printing.
        */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string> methodHistory;

        public ConveyorCommandService(TcpClient TcpClient, Stream DataStream, ConcurrentQueue<string> Commands, ConcurrentDictionary<int, string> History)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            commandQueue = Commands;
            methodHistory = History;
        }

        public void CommandThreadRun()
        {
            while (true)
            {
                //check with makerfarm and see if there are any assigned jobs

                //process commands in the queue:
                commandQueue.
            }
        }

    }

    class ConveyorListenerService
    {
        /*
         * This TCP Client is the connection to the Conveyor Service that is being Monitored
         */
        TcpClient tcpClient;

        /*
         * This is the TCP connection that the listener reads and Parses
         */
        Stream dataStream;

        /*
         * Used to hold all input recieved from Conveyor Service
         */
        string repliesFromConveyor;

        /*
         *  ListenerThreadRun sets to true after appending string with new input
         *  ProcessorThreadRun sets to false after repliesFromConveyor < 2 or if a complete JSON object is not detected in the current string.
         */
        bool contentAvailable;

        /*
         * This Mutex controls access to both repliesFromConveyor and contentAvailable
         */
        public Mutex ConveyorReplyMutex;

        /*
         * Tracks if parsing has failed due to incomplete command?
         */
        public bool previousParseFailure; 

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            ConveyorReplyMutex = new Mutex();
            repliesFromConveyor = "";
            previousParseFailure = false;
            //System.Console.Error.WriteLine();
        }

        public void ListenerThreadRun()
        {
            
            while (true)
            {
                byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);

                //Lock the Replies to append
                ConveyorReplyMutex.WaitOne();
                //System.Console.WriteLine("Listener Lock to append Replies");
                //Attach new input to current string
                repliesFromConveyor = string.Concat(repliesFromConveyor, Reply);
                //System.Console.WriteLine("Reply:");
                //System.Console.WriteLine(Reply);
                //Mark content as being available
                contentAvailable = true;
                //Release the Replies
                ConveyorReplyMutex.ReleaseMutex();
                //System.Console.WriteLine("Listener Unlock the Replies:");
            }
        }

        public void ProcessorThreadRun()
        {
            int ProcessStalls = 0;
            while (true)
            {
                if(contentAvailable || ProcessStalls > 5){
                    ProcessStalls = 0;
                    contentAvailable = true;
                    //System.Console.WriteLine("Processor Waiting to review Replies:");
                    //Lock the repliesFronConveyor string for analyzation
                    ConveyorReplyMutex.WaitOne();
                    //Check to see if there is a command
                    //System.Console.WriteLine("Processor determining if there is a Complete JSON object");
                    string[] command = ContainsCompleteJSONObject(repliesFromConveyor);
                    repliesFromConveyor = command[0];

                    if (command.Length == 1)
                    {
                        contentAvailable = false;
                        ConveyorReplyMutex.ReleaseMutex();
                    }
                    else
                    {
                        ConveyorReplyMutex.ReleaseMutex();
                        try
                        {
                            if (ProcessJSONMessage(command[1]))
                            {
                                //System.Console.Error.WriteLine("Successfully Processed Object");
                            }
                            else
                            {
                                System.Console.Error.WriteLine("Something went Wrong, Please check log");
                            }
                        }
                        catch (Exception e)
                        {
                            System.Console.Error.WriteLine("It's all gone very wrong! Please check log");
                            System.Console.Error.WriteLine("Error Message:");
                            System.Console.Error.WriteLine(e.Message);
                            System.Console.Error.WriteLine("Stack Trace:");
                            System.Console.Error.WriteLine(e.StackTrace);
                            System.Console.Error.WriteLine("JSON Object:");
                            System.Console.Error.WriteLine(command[1]);
                        }
                    } 
                }
                else
                {
                    Thread.Sleep(1000);//Sleep for 1 second
                }
                ProcessStalls++;
            }
        }

        //String[0] = New JSON string
        //String[1] = JSON Object
        public string[] ContainsCompleteJSONObject(string JSON)
        {
            int Bracket = 0;
            bool BracketFound = false;
            for(int i = 0; i < JSON.Length; i++){
                if(JSON[i] == '{'){
                    BracketFound = true;
                    Bracket = i;
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
                previousParseFailure = false;
                string JSONObject = JSON.Substring(0, Bracket);
                JSON = JSON.Substring(Bracket+1);
                return new string[] { JSON, JSONObject };
            }
            else
            {
                if (previousParseFailure)
                {
                    int NewStart = Bracket+1;
                    Bracket = 0;
                    for (int i = 0; i < JSON.Length; i++)
                    {
                        char C = JSON[i];
                        if (C == '{')
                        {
                            Bracket++;
                            if (Bracket == NewStart)
                            {
                                JSON = JSON.Substring(i);
                                break;
                            }
                        }
                    }
                }
                else
                {
                    previousParseFailure = true;
                }
                
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
                    Console.WriteLine("Temperature : " + ChangedPrinter.temperature.tools.ToString());
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
            //Console.WriteLine(JSON);
            return true;
        }
    }
}
