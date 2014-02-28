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
         * This contains the aknowledgement notice of all commands issued by reprancher this session
         */
        ConcurrentDictionary<int, bool> methodReplyRecieved;

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

        /*
         * This is a list of the current ports known to be attached to the Conveyor Service
         */
        ConcurrentDictionary<string, port> CurrentPorts;

        /*
         * This is a list of the current printers known to the Conveyor Service
         */
        ConcurrentDictionary<string, printer> CurrentPrinters;

        /*
         * This is a list of jobs known to the Conveyor Service
         */
        ConcurrentDictionary<int, job> CurrentJobs;

        /*
         * This is a list of Conveyor JobIDs indexed by MakerWare Jobs
         */
        ConcurrentDictionary<int, int> MakerWareToConveyorJobIds;

        /*
         * This is a list of MakerFarm JobIDs indexed by RPCIDs
         */
        ConcurrentDictionary<int, int> RPCIDtoMakerFarmJobIds;

        /*
         * This is the Conveyor Connection Service, which allows for writing back to the Conveyor Service.
         */
        ConveyorService ConveyorSvc;

        public ConveyorListenerService(TcpClient TcpClient, Stream DataStream, ConcurrentDictionary<int, string[]> MethodHistory, ConcurrentDictionary<string, port> currentPorts, ConcurrentDictionary<string, printer> currentPrinters, ConcurrentDictionary<int, job> currentJobs, ConcurrentDictionary<int, bool> MethodReplyRecieved, ConcurrentDictionary<int, int> makerWareToConveyorJobIds, ConcurrentDictionary<int, int> rPCIDtoMakerFarmJobIds, ConveyorService ConveyorService)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            ConveyorReplyMutex = new Mutex();
            repliesFromConveyor = "";
            previousParseFailure = false;
            methodHistory = MethodHistory;
            methodReplyRecieved = MethodReplyRecieved;
            Running = new Semaphore(2, 2);
            Dispose = false;
            CurrentPorts = currentPorts;
            CurrentPrinters = currentPrinters;
            CurrentJobs = currentJobs;
            MakerWareToConveyorJobIds = makerWareToConveyorJobIds;
            RPCIDtoMakerFarmJobIds = rPCIDtoMakerFarmJobIds;
            ConveyorSvc = ConveyorService;
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
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("Listener thread returning"); }
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
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("Processor thread returning"); }
                    return;
                }
                Running.Release();
                if (contentAvailable || ProcessStalls > 5)
                {
                    ProcessStalls = 0;
                    contentAvailable = true;
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("Processor Waiting to review Replies"); }
                    ConveyorReplyMutex.WaitOne();
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("Processor Waiting to review Replies"); }
                    //Check to see if there is a command
                    //System.Console.WriteLine("Processor determining if there is a Complete JSON object");
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("Processor determining if there is a Complete JSON object"); }
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
                                if (ConveyorService.NoisyClient) { System.Console.WriteLine("Successfully Processed Object"); }
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
                if (ConveyorService.NoisyClient) { System.Console.WriteLine("Detected Method : " + MethodName); }
                Console.Error.WriteLine("Detected Method : " + MethodName);
                if (MethodName.Equals(ClientAPI.jobadded))
                {
                    //This should trigger a printer poll
                    //InvokeCommand("getprinters");
                    job AddedJob = ClientAPI.GetParams<job>(JSON);
                    CurrentJobs.AddOrUpdate(AddedJob.id, AddedJob, (key, existingVal) =>
                    {
                        existingVal.failure = AddedJob.failure;
                        existingVal.state = AddedJob.state;
                        existingVal.progress = AddedJob.progress;
                        existingVal.type = AddedJob.type;
                        existingVal.conclusion = AddedJob.conclusion;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.jobchanged))
                {
                    job ChangedJob = ClientAPI.GetParams<job>(JSON);
                    CurrentJobs.AddOrUpdate(ChangedJob.id, ChangedJob, (key, existingVal) =>
                    {
                        existingVal.failure = ChangedJob.failure;
                        existingVal.state = ChangedJob.state;
                        existingVal.progress = ChangedJob.progress;
                        existingVal.type = ChangedJob.type;
                        existingVal.conclusion = ChangedJob.conclusion;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.machine_state_changed))
                {
                    printer ChangedPrinter = ClientAPI.GetParams<printer>(JSON);
                    CurrentPrinters.AddOrUpdate(ChangedPrinter.name, ChangedPrinter, (key, existingVal) =>
                    {
                        // The only updatable fields are the temerature array and lastQueryDate.
                        existingVal.state = ChangedPrinter.state;
                        existingVal.firmware_version = ChangedPrinter.firmware_version;
                        existingVal.canPrint = ChangedPrinter.canPrint;
                        existingVal.temperature = ChangedPrinter.temperature;
                        existingVal.displayName = ChangedPrinter.displayName;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.machine_temperature_changed))
                {
                    printer ChangedPrinter = ClientAPI.GetParams<printer>(JSON);
                    CurrentPrinters.AddOrUpdate(ChangedPrinter.name, ChangedPrinter, (key, existingVal) =>
                    {
                        existingVal.state = ChangedPrinter.state;
                        existingVal.firmware_version = ChangedPrinter.firmware_version;
                        existingVal.canPrint = ChangedPrinter.canPrint;
                        existingVal.temperature = ChangedPrinter.temperature;
                        existingVal.displayName = ChangedPrinter.displayName;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.port_attached))
                {
                    //This should trigger a printer poll
                    //InvokeCommand("getprinters");
                    port AttachedPort = ClientAPI.GetParams<port>(JSON);
                    CurrentPorts.AddOrUpdate(AttachedPort.name, AttachedPort, (key, existingVal) =>
                    {
                        // The only updatable fields are the temerature array and lastQueryDate.
                        existingVal.label = AttachedPort.label;
                        existingVal.driver_profiles = AttachedPort.driver_profiles;
                        existingVal.iserial = AttachedPort.iserial;
                        existingVal.type = AttachedPort.type;
                        return existingVal;
                    });
                    ConveyorSvc.InvokeCommand("connect -portname " + AttachedPort.name);
                }
                else if (MethodName.Equals(ClientAPI.port_detached))
                {
                    //This should trigger a printer poll
                    ConveyorSvc.InvokeCommand("getprinters");
                    string DetachedPortName = ClientAPI.GetParams<string>(JSON);
                    port RemovedPort; //Presently not used
                    CurrentPorts.TryRemove(DetachedPortName, out RemovedPort);
                }
                else
                {
                    Console.Error.WriteLine("This Method \""+ MethodName + "\"is not known! Take note!");
                    Console.Error.WriteLine(JSON);
                    Console.Error.WriteLine();
                }
            }
            else if (Reply == JsonReplyType.Result)
            {
                //Fetch methodID in order to figure out what kind of reply to expect
                int MethodID = ConveyorJsonReplyParser.GetResultID(JSON);
                if (ConveyorService.NoisyClient) { System.Console.WriteLine("Recieved Response to Command : " + MethodID); }
                string[] method;
                if (methodHistory.TryGetValue(MethodID, out method))
                {
                    //This looks up the method originally called in order to put the Reply into context.
                    if (method[0].Equals("getprinters"))
                    {
                        printer[] printers = Conveyor_JSONRPC_API.ServerAPI.GetResult<printer[]>(JSON);                        
                        foreach (printer p in printers)
                        {
                            CurrentPrinters.AddOrUpdate(p.name, p, (key, existingVal) =>
                            {
                                existingVal.displayName = p.displayName;
                                existingVal.printerType = p.printerType;
                                existingVal.profile_name = p.profile_name;
                                existingVal.hasHeatedPlatform = p.hasHeatedPlatform;
                                existingVal.toolhead_target_temperature = p.toolhead_target_temperature;
                                existingVal.build_volume = p.build_volume;
                                existingVal.state = p.state;
                                existingVal.driver_name = p.driver_name;
                                existingVal.temperature = p.temperature;
                                existingVal.canPrintToFile = p.canPrintToFile;
                                existingVal.machineNames = p.machineNames;
                                existingVal.numberOfToolheads = p.numberOfToolheads;
                                existingVal.firmware_version = p.firmware_version;
                                existingVal.canPrint = p.canPrint;
                                return existingVal;
                            });
                        }
                    }
                    else if (method[0].Equals("getjobs"))
                    {
                        job[] jobs = Conveyor_JSONRPC_API.ServerAPI.GetResult<job[]>(JSON);
                        foreach (job j in jobs)
                        {
                            CurrentJobs.AddOrUpdate(j.id, j, (key, existingVal) =>
                            {
                                existingVal.failure = j.failure;
                                existingVal.state = j.state;
                                existingVal.progress = j.progress;
                                existingVal.type = j.type;
                                existingVal.conclusion = j.conclusion;
                                return existingVal;
                            });
                        }
                    }
                    else if (method[0].Equals("getports"))
                    {
                        port[] ports = Conveyor_JSONRPC_API.ServerAPI.GetResult<port[]>(JSON);
                        foreach (port p in ports)
                        {
                            CurrentPorts.AddOrUpdate(p.name, p, (key, existingVal) =>
                            {
                                existingVal.label = p.label;
                                existingVal.driver_profiles = p.driver_profiles;
                                existingVal.iserial = p.iserial;
                                existingVal.type = p.type;
                                return existingVal;
                            });
                        }
                    }
                    else if (method[0].Equals("connect"))
                    {
                        printer p = Conveyor_JSONRPC_API.ServerAPI.GetResult<printer>(JSON);
                        CurrentPrinters.AddOrUpdate(p.name, p, (key, existingVal) =>
                        {
                            existingVal.displayName = p.displayName;
                            existingVal.printerType = p.printerType;
                            existingVal.profile_name = p.profile_name;
                            existingVal.hasHeatedPlatform = p.hasHeatedPlatform;
                            existingVal.toolhead_target_temperature = p.toolhead_target_temperature;
                            existingVal.build_volume = p.build_volume;
                            existingVal.state = p.state;
                            existingVal.driver_name = p.driver_name;
                            existingVal.temperature = p.temperature;
                            existingVal.canPrintToFile = p.canPrintToFile;
                            existingVal.machineNames = p.machineNames;
                            existingVal.numberOfToolheads = p.numberOfToolheads;
                            existingVal.firmware_version = p.firmware_version;
                            existingVal.canPrint = p.canPrint;
                            return existingVal;
                        });
                    }
                    else if (method[0].Equals("hello"))
                    {
                        string reply = Conveyor_JSONRPC_API.ServerAPI.GetResult<string>(JSON);
                        if (reply.Equals("world"))
                        {
                            //Recieved a reply! Good to start
                        }
                    }
                    else if (method[0].Equals("print"))
                    {
                        job j = Conveyor_JSONRPC_API.ServerAPI.GetResult<job>(JSON);
                        CurrentJobs.AddOrUpdate(j.id, j, (key, existingVal) =>
                        {
                            existingVal.machine_name = j.machine_name;
                            existingVal.failure = j.failure;
                            existingVal.profile_name = j.profile_name;
                            existingVal.port_name = j.port_name;
                            existingVal.name = j.name;
                            existingVal.state = j.state;
                            existingVal.driver_name = j.driver_name;
                            existingVal.progress = j.progress;
                            existingVal.type = j.type;
                            existingVal.conclusion = j.conclusion;
                            return existingVal;
                        });
                        if (!methodReplyRecieved[MethodID])
                        {
                            if (ConveyorService.NoisyClient) { System.Console.WriteLine("Did not yet mark a return for Print method. Update the Makerware to JobID Dictionary "); }
                            int MakerFarmJobId = 0;
                            if (RPCIDtoMakerFarmJobIds.TryGetValue(MethodID, out MakerFarmJobId))
                            {
                                if (MakerWareToConveyorJobIds.TryUpdate(MakerFarmJobId, j.id, 0))
                                {
                                    int temp;
                                    RPCIDtoMakerFarmJobIds.TryRemove(MakerFarmJobId, out temp);
                                }
                            }
                        }
                    }
                    else
                    {
                        if (ConveyorService.NoisyClient) { System.Console.WriteLine("Do not yet have a means to process the return for method : " + method[0]); }
                    }
                    methodReplyRecieved.TryUpdate(MethodID, true, false);
                }
                else
                {
                    if (ConveyorService.NoisyClient) { System.Console.WriteLine("RepRancher did not issue a method with this RPC id!"); }
                }
            }
            else if (Reply == JsonReplyType.Error)
            {
                //JsonError<string> Error = JsonConvert.DeserializeObject<JsonError<string>>(JSON);
                Console.WriteLine("Error");
                Console.WriteLine(JSON);
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
