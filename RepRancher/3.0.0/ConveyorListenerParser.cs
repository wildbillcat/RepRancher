using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Conveyor_JSONRPC_API._3._0._0;

namespace RepRancher._3._0._0
{
    class ConveyorListenerParser
    {
        /*
         * Shared Resources Object
         */
        SharedResources SharedResources;
        /*
         * Tracks if parsing has failed due to incomplete command?
         */
        public bool previousParseFailure;

        public ConveyorListenerParser(SharedResources Shared_Resources)
        {
            SharedResources = Shared_Resources;
            previousParseFailure = false;
        }

        public void ListenerParserThreadRun()
        {
            int ProcessStalls = 0;
            Console.Error.WriteLine(DateTime.Now.ToString() + ": Initializing Conveyor 3.0.0 ListenerParser");
            Console.Error.WriteLine();
            while (true)
            {                
                if (SharedResources.contentAvailable || ProcessStalls > 5)
                {
                    //Resets the number of Process Stalls
                    ProcessStalls = 0;

                    //Lock the Conveyor Reply String
                    SharedResources.ConveyorReplyMutex.WaitOne();
                    //Check to see if there is a command
                    //System.Console.WriteLine("Processor determining if there is a Complete JSON object");
                    //Processor determining if there is a Complete JSON object
                    string[] command = ContainsCompleteJSONObject(SharedResources.repliesFromConveyor);
                    SharedResources.repliesFromConveyor = command[0];

                    if (command.Length == 1)
                    {
                        SharedResources.contentAvailable = false;
                        SharedResources.ConveyorReplyMutex.ReleaseMutex();
                    }
                    else
                    {
                        SharedResources.ConveyorReplyMutex.ReleaseMutex();
                        try
                        {
                            if (ProcessJSONMessage(command[1]))
                            {
                                //Successfully Processed Object
                            }
                            else
                            {
                                System.Console.Error.WriteLine(DateTime.Now.ToString() + ": Something went Wrong and the JSON object could not be processed");
                                System.Console.Error.WriteLine(command[1]);
                                System.Console.Error.WriteLine();
                            }
                        }
                        catch (Exception e)
                        {
                            System.Console.Error.WriteLine(DateTime.Now.ToString() + ": It's all gone very wrong! Please check log");
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
                    System.Threading.Thread.Sleep(1000);//Sleep for 1 second
                    ProcessStalls++;
                }                
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
                //Detected Method
                Console.Error.WriteLine(DateTime.Now.ToString() + ": Detected Method : " + MethodName);
                if (MethodName.Equals(ClientAPI.jobadded))
                {
                    //This should trigger a printer poll
                    //InvokeCommand("getprinters");
                    ConveyorJob AddedJob = ClientAPI.GetParams<ConveyorJob>(JSON);
                    SharedResources.CurrentJobs.AddOrUpdate(AddedJob.id, AddedJob, (key, existingVal) =>
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
                    ConveyorJob ChangedJob = ClientAPI.GetParams<ConveyorJob>(JSON);
                    SharedResources.CurrentJobs.AddOrUpdate(ChangedJob.id, ChangedJob, (key, existingVal) =>
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
                    ConveyorPhysicalPrinter ChangedPrinter = ClientAPI.GetParams<ConveyorPhysicalPrinter>(JSON);
                    SharedResources.CurrentPrinters.AddOrUpdate(ChangedPrinter.name.GetMachine_Hash(), ChangedPrinter, (key, existingVal) =>
                    {
                        // The only updatable fields are the temerature array and lastQueryDate.
                        existingVal.state = ChangedPrinter.state;
                        existingVal.firmware_version = ChangedPrinter.firmware_version;
                        existingVal.can_print = ChangedPrinter.can_print;
                        existingVal.temperature = ChangedPrinter.temperature;
                        existingVal.display_name = ChangedPrinter.display_name;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.machine_temperature_changed))
                {
                    ConveyorPhysicalPrinter ChangedPrinter = ClientAPI.GetParams<ConveyorPhysicalPrinter>(JSON);
                    SharedResources.CurrentPrinters.AddOrUpdate(ChangedPrinter.name.GetMachine_Hash(), ChangedPrinter, (key, existingVal) =>
                    {
                        existingVal.state = ChangedPrinter.state;
                        existingVal.firmware_version = ChangedPrinter.firmware_version;
                        existingVal.can_print = ChangedPrinter.can_print;
                        existingVal.temperature = ChangedPrinter.temperature;
                        existingVal.display_name = ChangedPrinter.display_name;
                        return existingVal;
                    });
                }
                else if (MethodName.Equals(ClientAPI.port_attached))
                {
                    //This should trigger a printer poll
                    //InvokeCommand("getprinters");
                    ConveyorPort AttachedPort = ClientAPI.GetParams<ConveyorPort>(JSON);
                    SharedResources.CurrentPorts.AddOrUpdate(AttachedPort.machine_hash, AttachedPort, (key, existingVal) =>
                    {
                        // The only updatable fields are the temerature array and lastQueryDate.
                        existingVal.machine_hash = AttachedPort.machine_hash;
                        existingVal.driver_profiles = AttachedPort.driver_profiles;
                        existingVal.machine_name = AttachedPort.machine_name;
                        existingVal.port_type = AttachedPort.port_type;
                        return existingVal;
                    });
                    Command ConnectCommand = new ConnectCommand(SharedResources.rpcid.FetchRPCID(), AttachedPort.machine_hash);
                    SharedResources.IssueCommand(ConnectCommand);
                }
                else if (MethodName.Equals(ClientAPI.port_detached))
                {
                    //This should trigger a printer poll
                    Newtonsoft.Json.Linq.JObject PortNameParams = ClientAPI.GetParams<Newtonsoft.Json.Linq.JObject>(JSON);
                    string DetachedPortName = PortNameParams.GetValue("port_name").ToString();
                    ConveyorPort RemovedPort; //Presently not used
                    SharedResources.CurrentPorts.TryRemove(DetachedPortName, out RemovedPort);
                }
                else
                {
                    Console.Error.WriteLine(DateTime.Now.ToString() + ": This Method \"" + MethodName + "\"is not known! Take note!");
                    Console.Error.WriteLine(JSON);
                    Console.Error.WriteLine();
                }
            }
            else if (Reply == JsonReplyType.Result)
            {
                //Fetch methodID in order to figure out what kind of reply to expect
                int MethodID = ConveyorJsonReplyParser.GetResultID(JSON);
                //Recieved Response to Command
                Command PreviousCommand;
                if (SharedResources.CommandHistory.TryGetValue(MethodID, out PreviousCommand))
                {
                    //This looks up the method originally called in order to put the Reply into context.
                    if (PreviousCommand is GetPrintersCommand)//method[0].Equals("getprinters"))
                    {
                        ConveyorPrinter[] printers = ServerAPI.GetResult<ConveyorPrinter[]>(JSON);
                        foreach (ConveyorPhysicalPrinter p in printers)
                        {
                            SharedResources.CurrentPrinters.AddOrUpdate(p.name.GetMachine_Hash(), p, (key, existingVal) =>
                            {
                                existingVal.display_name = p.display_name;
                                existingVal.printer_type = p.printer_type;
                                existingVal.profile_name = p.profile_name;
                                existingVal.has_heated_platform = p.has_heated_platform;
                                existingVal.toolhead_target_temperature = p.toolhead_target_temperature;
                                existingVal.build_volume = p.build_volume;
                                existingVal.state = p.state;
                                existingVal.driver_name = p.driver_name;
                                existingVal.temperature = p.temperature;
                                existingVal.can_print = p.can_print;
                                existingVal.machine_names = p.machine_names;
                                existingVal.number_of_toolheads = p.number_of_toolheads;
                                existingVal.firmware_version = p.firmware_version;
                                return existingVal;
                            });
                        }
                    }
                    else if (PreviousCommand is GetJobsCommand)//method[0].Equals("getjobs"))
                    {
                        ConveyorJob[] jobs = ServerAPI.GetResult<ConveyorJob[]>(JSON);
                        foreach (ConveyorJob j in jobs)
                        {
                            SharedResources.CurrentJobs.AddOrUpdate(j.id, j, (key, existingVal) =>
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
                    else if (PreviousCommand is GetPortsCommand)//method[0].Equals("getports"))
                    {
                        ConveyorPort[] ports = ServerAPI.GetResult<ConveyorPort[]>(JSON);
                        foreach (ConveyorPort p in ports)
                        {
                            SharedResources.CurrentPorts.AddOrUpdate(p.machine_hash, p, (key, existingVal) =>
                            {
                                existingVal.machine_name = p.machine_name;
                                existingVal.driver_profiles = p.driver_profiles;
                                existingVal.machine_type = p.machine_type;
                                existingVal.port_type = p.port_type;
                                return existingVal;
                            });
                        }
                    }
                    else if (PreviousCommand is ConnectCommand)//method[0].Equals("connect"))
                    {
                        ConveyorPhysicalPrinter p = ServerAPI.GetResult<ConveyorPhysicalPrinter>(JSON);
                        SharedResources.CurrentPrinters.AddOrUpdate(p.name.GetMachine_Hash(), p, (key, existingVal) =>
                        {
                            existingVal.name = p.name;
                            existingVal.printer_type = p.printer_type;
                            existingVal.profile_name = p.profile_name;
                            existingVal.has_heated_platform = p.has_heated_platform;
                            existingVal.toolhead_target_temperature = p.toolhead_target_temperature;
                            existingVal.build_volume = p.build_volume;
                            existingVal.state = p.state;
                            existingVal.driver_name = p.driver_name;
                            existingVal.temperature = p.temperature;
                            existingVal.machine_names = p.machine_names;
                            existingVal.number_of_toolheads = p.number_of_toolheads;
                            existingVal.firmware_version = p.firmware_version;
                            existingVal.can_print = p.can_print;
                            return existingVal;
                        });
                    }
                    else if (PreviousCommand is HelloCommand)//method[0].Equals("hello"))
                    {
                        string reply = ServerAPI.GetResult<string>(JSON);
                        if (reply.Equals("world"))
                        {
                            //Recieved a reply! Good to start
                        }
                    }
                    else if (PreviousCommand is PrintCommand)//method[0].Equals("print"))
                    {
                        ConveyorJob j = ServerAPI.GetResult<ConveyorJob>(JSON);
                        SharedResources.CurrentJobs.AddOrUpdate(j.id, j, (key, existingVal) =>
                        {
                            existingVal.machine_name = j.machine_name;
                            existingVal.failure = j.failure;
                            existingVal.profile_name = j.profile_name;
                            existingVal.extrusion_mass_a_grams = j.extrusion_mass_a_grams;
                            existingVal.name = j.name;
                            existingVal.can_cancel = j.can_cancel;
                            existingVal.elapsed_time = j.elapsed_time;
                            existingVal.state = j.state;
                            existingVal.driver_name = j.driver_name;
                            existingVal.progress = j.progress;
                            existingVal.type = j.type;
                            existingVal.conclusion = j.conclusion;
                            return existingVal;
                        });
                        PrintCommand PreviousPrintCommand = (PrintCommand)PreviousCommand;
                        //PreviousPrintCommand.
                        if (!PreviousCommand.Recieved)
                        {
                            SharedResources.MakerFarmToConveyorJobIds.AddOrUpdate(PreviousPrintCommand.MakerFarmJobId, j.id, (key, existingVal) =>
                            {
                                existingVal = j.id;
                                return existingVal;
                            });
                        }
                    }
                    else
                    {
                        //Do not yet have a means to process the return for method recieved
                        Console.Error.WriteLine(DateTime.Now.ToString() + ": This application could not handle the method reply recieved:");
                        Console.Error.WriteLine(JSON);
                        Console.Error.WriteLine();
                    }
                    PreviousCommand.Recieved = true;
                    SharedResources.CommandHistory.AddOrUpdate(PreviousCommand.rpcid, PreviousCommand, (key, existingVal) =>
                        {
                            existingVal.Recieved = PreviousCommand.Recieved;
                            existingVal.Reply = PreviousCommand.Reply;
                            return existingVal;
                        });
                }
                else
                {
                    //RepRancher did not issue a method with this RPC id!
                    Console.Error.WriteLine(DateTime.Now.ToString() + ": This application recieved a reply to a command it did not issue:");
                    Console.Error.WriteLine(JSON);
                    Console.Error.WriteLine();
                }
            }
            else if (Reply == JsonReplyType.Error)
            {
                //RepRancher recieved an error!
                Console.Error.WriteLine(DateTime.Now.ToString() + ": This application recieved an Error from Conveyor:");
                Console.Error.WriteLine(JSON);
                Console.Error.WriteLine();
                Console.WriteLine("Error");
                Console.WriteLine(JSON);
                Console.WriteLine();
            }
            else if (Reply == JsonReplyType.Invalid)
            {
                //RepRancher detected an invalid json string!
                Console.Error.WriteLine(DateTime.Now.ToString() + ": This application Detected an invalid JSON string:");
                Console.Error.WriteLine(JSON);
                Console.Error.WriteLine();
                Console.WriteLine("Invalid JSON Detected:");
                Console.WriteLine(JSON);
                Console.WriteLine();
            }
            else
            {
                Console.Error.WriteLine(DateTime.Now.ToString() + ": An Impossible situation as occured!:");
                Console.Error.WriteLine(JSON);
                Console.Error.WriteLine();
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
