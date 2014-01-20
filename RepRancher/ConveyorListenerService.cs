﻿using System;
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
    class ConveyorListenerService
    {
        /*
         * This semaphore is used to control read access to the dispose variable, used to trigger the end of the threads
         */
         Semaphore Running;

        /*
         * This variable triggers a the disposal of the threads on this object
         */
         bool Dispose;

        /*
         * This contains the history of all commands issued by reprancher this session
         */
        ConcurrentDictionary<int, string[]> methodHistory;

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

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream, ConcurrentDictionary<int, string[]> MethodHistory)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            ConveyorReplyMutex = new Mutex();
            repliesFromConveyor = "";
            previousParseFailure = false;
            methodHistory = MethodHistory;
            Running = new Semaphore(2, 2);
            Dispose = false;
        }

        public void TriggerDispose()
        {
            Running.WaitOne();
            Running.WaitOne();
            Dispose = true;
            Running.Release(2);
        }

        public void ListenerThreadRun()
        {

            while (true)
            {
                Running.WaitOne();
                if (Dispose)
                {
                    Running.Release();
                    Console.WriteLine("Listener thread returning.");
                    return;
                }
                Running.Release();
                string Reply = "";
                try
                {
                    byte[] bytesToRead = new byte[tcpClient.ReceiveBufferSize];
                    int bytesRead = dataStream.Read(bytesToRead, 0, tcpClient.ReceiveBufferSize);
                    Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                }
                catch
                {
                    Running.WaitOne();
                    Running.WaitOne();
                    Dispose = true;
                    Running.Release(2);
                }

                //Lock the Replies to append
                ConveyorReplyMutex.WaitOne();

                //Attach new input to current string
                repliesFromConveyor = string.Concat(repliesFromConveyor, Reply);

                //Mark content as being available
                contentAvailable = true;

                //Release the Replies
                ConveyorReplyMutex.ReleaseMutex();
            }
        }

        public void ProcessorThreadRun()
        {
            int ProcessStalls = 0;
            while (true)
            {
                Running.WaitOne();
                if (Dispose)
                {
                    Running.Release();
                    Console.WriteLine("Processor thread returning.");
                    return;
                }
                Running.Release();
                if (contentAvailable || ProcessStalls > 5)
                {
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
                    //no replies to queue up, lets take a look.
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
            for (int i = 0; i < JSON.Length; i++)
            {
                if (JSON[i] == '{')
                {
                    BracketFound = true;
                    Bracket = i;
                    break;
                }
            }

            if (BracketFound)
            {
                BracketFound = false;
            }
            else
            {
                //Bracket wasn't found, return
                return new string[] { JSON };
            }

            if (Bracket > 0)
            {
                JSON = JSON.Substring(Bracket + 1);
            }

            Bracket = 1;
            for (int i = 1; i < JSON.Length; i++)
            {
                char C = JSON[i];
                if (C == '{')
                {
                    Bracket++;
                }
                else if (C == '}')
                {
                    Bracket--;
                }
                if (Bracket == 0)
                {
                    BracketFound = true;
                    Bracket = i;
                    break;
                }
            }

            if (BracketFound)
            {
                previousParseFailure = false;
                string JSONObject = JSON.Substring(0, Bracket);
                JSON = JSON.Substring(Bracket + 1);
                return new string[] { JSON, JSONObject };
            }
            else
            {
                if (previousParseFailure)
                {
                    int NewStart = Bracket + 1;
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

        public bool ProcessJSONMessage(string JSON)
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
                //Fetch methodID in order to figure out what kind of reply to expect
                int MethodID = ConveyorJsonReplyParser.GetResultID(JSON);
                Console.WriteLine("Recieved Response to Command : " + MethodID);
                string[] method;
                if (methodHistory.TryGetValue(MethodID, out method))
                {
                    //This looks up the method originally called in order to put the Reply into context.
                    if (method[0].Equals("getprinters"))
                    {

                        printer[] printers = Conveyor_JSONRPC_API.ServerAPI.GetPrinters(JSON);
                        Console.WriteLine("Command of " + method[0] + "with rpcid " + MethodID + " with result:");
                        foreach (printer p in printers)
                        {
                            Console.WriteLine("UniqueName : " + p.uniqueName + "\n State : " + p.state);
                            Console.WriteLine();
                        }
                    }
                    else if (method[0].Equals("getjobs"))
                    {
                        job[] jobs = Conveyor_JSONRPC_API.ServerAPI.GetJobs(JSON);
                        foreach (job j in jobs)
                        {
                            Console.WriteLine("Job ID: " + j.id);
                            Console.WriteLine("Job Name: " + j.name);
                            Console.WriteLine("Job Type: " + j.type);
                            Console.WriteLine("Job State: " + j.state);
                            Console.WriteLine("Job Assigned Machine: " + j.state);
                        }
                    }
                    else
                    {
                        Console.WriteLine("Do not yet have a means to process the return for method : " + method[0]);
                    }
                }
                else
                {
                    Console.WriteLine("RepRancher did not issue a method with this RPC id!");
                }
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