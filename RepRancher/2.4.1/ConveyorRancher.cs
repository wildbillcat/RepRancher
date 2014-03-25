using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Conveyor_JSONRPC_API._2._4._1;
using Conveyor_JSONRPC_API._2._4._1.Types;

namespace RepRancher._2._4._1
{
    public class ConveyorRancher : RepRancher.Rancher
    {
        private RepRancher.MakerFarmService.RancherCommandGlossary DefaultAvailableCommands { get; set; }

        /*
         * This is where the print files sent to the client are stored temporarily.
         */
        string PrintTemporaryFileStoragePath { get; set; }

        /*
         * This is how many seconds we expect to .
         */
        int PrinterReplyTimeout { get; set; }

        /*
         * This thread is assigned to listen to the incoming stream from conveyor and to jot down 
         * everything it recieves. 
         */
        System.Threading.Thread ConveyorListenerStreamThread { get; set; }

        /*
         * This thread is assigned to parse and make sense of all the information recieved by the 
         * ConveyorListenerStreamThread from Conveyor.  
         */
        System.Threading.Thread ConveyorListenerParserThread { get; set; }

        /*
         * This is the number of seconds RepRancher will wait before assuming a response isn't coming from conveyor for blocking commands.
         */
        int ConveyorReplyTimeout { get; set; }

        /*
         * This is an object wrapper around several shared objects which allow for the threads to communicate.
         */
        SharedResources SharedResources { get; set; }
        
        /*
         * This is the listening stream class which is assigned to it's own thread to recieve conveyor's input.
         */
        ConveyorListenerStream ConveyorListenerStream;

        /*
         * This is the parsing class which is assigned to it's own thread to parse conveyor's input.
         */
        ConveyorListenerParser ConveyorListenerParser;

        public ConveyorRancher(RancherBrand Brand, Uri Fetch, string ClientAPIKey)
        {
            /*
             * This configuration should be true of all 2.4.1 Clients
             */
            DefaultAvailableCommands = new RepRancher.MakerFarmService.RancherCommandGlossary();
            DefaultAvailableCommands.Print_Send = true;
            DefaultAvailableCommands.Print_Cancel = true;
            DefaultAvailableCommands.Print_Pause = false;
            DefaultAvailableCommands.Print_Resume = false;

            /*
             * Client Specific Configuration
             */
            //This defines the storage folder used for this particular client instance
            PrintTemporaryFileStoragePath = Brand.PrintTemporaryFileStoragePath;
            
            //This is the number of seconds RepRancher will wait before assuming a response isn't coming from conveyor for blocking commands.
            ConveyorReplyTimeout = Brand.PrinterReplyTimeout;

            //This is the TCP Client used to connect to the Conveyor Service
            SharedResources = new SharedResources(System.Net.IPAddress.Parse(Brand.IPAddress), Brand.PortNumber, Fetch, ClientAPIKey);

            //This is the Listener Stream used to listen in to conveyor
            ConveyorListenerStream = new ConveyorListenerStream(SharedResources);

            //This is the Parser for all the input taken from conveyor
            ConveyorListenerParser =  new ConveyorListenerParser(SharedResources);

            ConveyorListenerStreamThread = new System.Threading.Thread(new System.Threading.ThreadStart(ConveyorListenerStream.ListenerStreamThreadRun));
            ConveyorListenerStreamThread.Start();

            ConveyorListenerParserThread = new System.Threading.Thread(new System.Threading.ThreadStart(ConveyorListenerParser.ListenerParserThreadRun));
            ConveyorListenerParserThread.Start();
        }

        public string[] GetKnownPrinters()
        {
            return SharedResources.CurrentPrinters.Keys.ToArray();
        }

        public RepRancher.MakerFarmService.RancherCommandGlossary[] GetRancherCommandGlossary(RepRancher.MakerFarmService.MachineInterest[] ReportOn)
        {
            List<RepRancher.MakerFarmService.RancherCommandGlossary> PrinterAbilities = new List<RepRancher.MakerFarmService.RancherCommandGlossary>();
            foreach (RepRancher.MakerFarmService.MachineInterest Interest in ReportOn)
            {
                if (SharedResources.CurrentPrinters.ContainsKey(Interest.MachineName))
                {
                    RepRancher.MakerFarmService.RancherCommandGlossary Gloss = new RepRancher.MakerFarmService.RancherCommandGlossary();
                    Gloss.MachineName = Interest.MachineName;
                    Gloss.Print_Cancel = DefaultAvailableCommands.Print_Cancel;
                    Gloss.Print_Pause = DefaultAvailableCommands.Print_Pause;
                    Gloss.Print_Resume = DefaultAvailableCommands.Print_Resume;
                    Gloss.Print_Send = DefaultAvailableCommands.Print_Send;
                    PrinterAbilities.Add(Gloss);
                }                
            }
            return PrinterAbilities.ToArray();
        }

        public RepRancher.MakerFarmUpdate[] GetMakerFarmUpdates(RepRancher.MakerFarmService.MachineInterest[] ReportOn)
        {
            List<MakerFarmUpdate> MakerFarmUpdates = new List<MakerFarmUpdate>();
            /*
             * **************************************Begin File Deletion Section************************************************
             */
            //First lets see if RepRancher is Tracking any jobs that MakerFarm isnt interested in. If so, let's toss them out and delete their files.
            List<int> Abort = new List<int>();
            foreach (int i in SharedResources.MakerFarmToConveyorJobIds.Keys)
            {
                bool invalid = true;
                foreach (RepRancher.MakerFarmService.MachineInterest Mi in ReportOn)
                {
                    if (Mi.CurrentJob == i)
                    {
                        invalid = false;
                        break;
                    }
                }
                if (invalid)
                {
                    Abort.Add(SharedResources.MakerFarmToConveyorJobIds[i]);
                }
            }
            //Now that there is a list of no longer valid jobs, let's toss them
            foreach (int i in Abort)
            {
                string FilePath = string.Concat(PrintTemporaryFileStoragePath, i.ToString(), ".gcode");
                if (System.IO.File.Exists(FilePath))
                {
                    System.IO.File.Delete(FilePath);
                }
            }
            /*
             * **************************************End File Deletion Section************************************************
             */


            //Now that RepRancher knows what Makerfarm is interested in hearing about, act on that information!
            //Report all the information Makerfarm in intersted in hearing about
            foreach (RepRancher.MakerFarmService.MachineInterest Mi in ReportOn)
            {
                ConveyorPrinter P;
                if (SharedResources.CurrentPrinters.TryGetValue(Mi.MachineName, out P))
                {
                    //The Machine Exists, before worrying about the job and printer status lets make sure the Printer doesn't want us to cancel the job.
                    if (Mi.PoisonJobs)
                    {
                        /*
                         * Call poison Print Jobs Method
                         */
                        PoisonPrinterPrintJobs(Mi.MachineName);

                    }//Now Done with poisoning Jobs, lets report on what is going on

                    //Lets Build a Machine Status!
                    RepRancher.MakerFarmService.MachineStatusUpdate MUpdate = new RepRancher.MakerFarmService.MachineStatusUpdate();
                    MUpdate.MachineName = P.name;
                    MUpdate.CurrentTaskProgress = null;
                    MUpdate.MachineStatus = P.state + "\n" +
                        "Printer Type: " + P.printerType + "\n" +
                        "Firmware Version: " + P.firmware_version + "\n";
                    if (P.temperature != null)
                    {
                        foreach (string key in P.temperature.tools.Keys)
                        {
                            MUpdate.MachineStatus = MUpdate.MachineStatus + "Tool " + key + " : " + P.temperature.tools[key] + " \n ";
                        }
                        if (P.temperature.heated_platforms != null && P.hasHeatedPlatform)
                        {
                            int[] BedTemp = Newtonsoft.Json.JsonConvert.DeserializeObject<int[]>(P.temperature.heated_platforms.ToString());
                            foreach (int temp in BedTemp)
                            {
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "Heated Platform: " + temp + "\n";
                            }
                        }
                    }


                    ConveyorJob J;
                    RepRancher.MakerFarmService.JobStatusUpdate JUpdate = new RepRancher.MakerFarmService.JobStatusUpdate();
                    int ConveyorJobId = 0;
                    bool MFJobExists = SharedResources.MakerFarmToConveyorJobIds.TryGetValue(Mi.CurrentJob, out ConveyorJobId);
                    bool CurrentJobExists = SharedResources.CurrentJobs.TryGetValue(ConveyorJobId, out J);
                    //Check if MakerFarm assigned a job
                    if (Mi.CurrentJob != 0 && CurrentJobExists && MFJobExists)//if Current job isn't equal to 0, the MakerFarmID translates to a Conveyor Job and the Job exists, lets populate!
                    {
                        JUpdate.JobId = Mi.CurrentJob;
                        JUpdate.started = true;
                        if (string.IsNullOrEmpty(J.conclusion))
                        {
                            JUpdate.complete = false;
                        }
                        else
                        {
                            JUpdate.complete = true;
                        }
                        JUpdate.Status = J.state + "\n" +
                            "File Name: " + J.name + "\n";
                        if (J.progress != null)
                        {
                            JUpdate.Status = JUpdate.Status + "Progress: " + J.progress.name + " " + J.progress.progress + "\n";
                            MUpdate.CurrentTaskProgress = J.progress.progress;
                        }
                        else
                        {
                            MUpdate.CurrentTaskProgress = null;
                        }
                        if (J.failure != null)
                        {
                            JUpdate.Status = JUpdate.Status + "Failure: " + J.failure + "\n";
                        }
                    }
                    else if (Mi.CurrentJob != 0 && !Mi.PoisonJobs && !Mi.PreviouslyCollected)
                    {
                        //Makerfarm has assigned a job and RepRancher has not yet sent it!
                        List<ConveyorJob> jobs = new List<ConveyorJob>();
                        foreach (ConveyorJob jj in SharedResources.CurrentJobs.Values)
                        {
                            if (!jj.state.Equals("STOPPED") && jj.machine_name.Equals(Mi.MachineName))
                            {
                                jobs.Add(jj);
                            }
                        }
                        if (jobs.Count() == 0 && P.canPrint)
                        {
                            //Lets fetch the file we need to print.
                            string PostData = "{\"ClientAPIKey\":\"" + SharedResources.ClientAPIKey + "\",\"MachineName\":\"" + P.name + "\",\"JobId\":" + Mi.CurrentJob.ToString() + "}";
                            string FilePath = string.Concat(PrintTemporaryFileStoragePath, Mi.PrintFileName, ".gcode");
                            using (var client = new System.Net.WebClient())
                            {
                                client.Headers.Add("Content-Type", "application/json;odata=verbose");
                                byte[] result = client.UploadData(SharedResources.TakeThis, "POST", Encoding.UTF8.GetBytes(PostData));
                                System.IO.File.WriteAllBytes(FilePath, result);
                            }

                            //No job is running on the Printer! Lets send one.
                            string[] PrinterMaterials = new string[2] { "PLA", "PLA" };
                            PrintCommand Print = new PrintCommand(SharedResources.rpcid.FetchRPCID(), null, true, FilePath, P.name, PrinterMaterials, "miraclegrue", new slicersettings(), Mi.CurrentJob);
                            bool SuccessfullJobSend = SharedResources.IssueCommand(Print);
                            bool MethodReception = false;
                            DateTime CommandSent = DateTime.Now;
                            //Wait for Print

                            while (!MethodReception)
                            {
                                //Waiting for print to send
                                if (DateTime.Now.Subtract(CommandSent) > new TimeSpan(0, 0, ConveyorReplyTimeout))
                                {
                                    //If recieving a response from conveyor about the print has taken over 5 seconds, abort waiting and carry on.
                                    break;
                                }
                                System.Threading.Thread.Sleep(500);
                                Command MethodReceptionCMD;
                                //Check if reply recieved
                                SharedResources.CommandHistory.TryGetValue(Print.rpcid, out MethodReceptionCMD);
                                MethodReception = MethodReceptionCMD.Recieved;
                            }
                            if (SuccessfullJobSend || MethodReception)
                            {
                                JUpdate.JobId = Mi.CurrentJob;
                                JUpdate.started = true;
                                JUpdate.complete = false;
                                JUpdate.Status = "Print Job Queued to Conveyor!";
                            }
                            else
                            {
                                JUpdate.JobId = Mi.CurrentJob;
                                JUpdate.started = false;
                                JUpdate.complete = false;
                                JUpdate.Status = "Print Job Queued to Conveyor!";
                            }
                        }
                        else
                        {
                            //Something is running on the printer already or something is amiss with the printer, can't send the Job
                            JUpdate.JobId = 0;
                            JUpdate.started = false;
                            JUpdate.complete = false;
                            JUpdate.Status = "Another activity is presently going on the printer. Client can not start job.";
                            //Potentiallty there is a non-Makerfarm Job Printing. Lets append it's status to the Printer.
                            J = null;
                            foreach (ConveyorJob JinQ in SharedResources.CurrentJobs.Values)
                            {
                                if (JinQ.machine_name.Equals(P.name) && string.IsNullOrEmpty(JinQ.conclusion))
                                {
                                    J = JinQ;
                                }
                            }
                            if (J != null)
                            {
                                //Job is no longer null, meaning something has happened on the printer! Lets let users know.
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "\nNon-MakerFarm Job: \n";
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "Status: " + J.state + "\n" +
                                "File Name: " + J.name + "\n";
                                if (J.progress != null && J.state.Equals("RUNNING"))
                                {
                                    MUpdate.MachineStatus = MUpdate.MachineStatus + "Progress: " + J.progress.name + " " + J.progress.progress + "%\n";
                                    MUpdate.CurrentTaskProgress = J.progress.progress;
                                }
                            }
                        }
                    }
                    else
                    {
                        JUpdate.JobId = 0;
                        JUpdate.started = false;
                        JUpdate.complete = false;
                        JUpdate.Status = null;
                        //Potentiallty there is a non-Makerfarm Job Printing. Lets append it's status to the Printer.
                        J = null;
                        foreach (ConveyorJob jerb in SharedResources.CurrentJobs.Values)
                        {
                            if (jerb.machine_name.Equals(Mi.MachineName) && string.IsNullOrEmpty(jerb.conclusion))
                            {
                                J = jerb;
                            }
                        }
                        if (J != null)
                        {
                            //Job is no longer null, meaning something has happened on the printer! Lets let users know.
                            MUpdate.MachineStatus = MUpdate.MachineStatus + "\nNon-MakerFarm Job: \n";
                            MUpdate.MachineStatus = MUpdate.MachineStatus + "Status: " + J.state + "\n" +
                            "File Name: " + J.name + "\n";
                            if (J.progress != null && J.state.Equals("RUNNING"))
                            {
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "Progress: " + J.progress.name + " " + J.progress.progress + "%\n";
                                MUpdate.CurrentTaskProgress = J.progress.progress;
                            }
                        }

                    }
                    //Built up information about this machine, add it to the list of updates for Makerfarm
                    MakerFarmUpdates.Add(new MakerFarmUpdate(MUpdate, JUpdate));
                }
                else
                {
                    //This Client does not know about the Requested machine.
                    Console.Error.WriteLine("ConveyorClient does not know about the following requested Printer: " + Mi.MachineName);
                    Console.Error.WriteLine();
                }
            }

            throw new NotImplementedException();
        }

        //Private method used by the Rancher, canceled all jobs based on printer name provided
        void PoisonPrinterPrintJobs(string MachineName)
        {
            //This is the list of Jobs to be Canceled
            List<ConveyorJob> jobs = new List<ConveyorJob>();

            //Check each Job assigned to the printer. If there are any jobs assigned to it that are not presently stopped, add that job to the list of jobs to be canceled.
            foreach (ConveyorJob jj in SharedResources.CurrentJobs.Values)
            {
                if (!jj.state.Equals("STOPPED") && jj.machine_name.Equals(MachineName))
                {
                    jobs.Add(jj);
                }
            }

            //Iterate through the list of jobs which need to be canceled.
            foreach (ConveyorJob ActiveMakerbotJob in jobs)
            {
                //For as long as there are jobs assigned to this printer that haven't been canceled, seach for and destroy them.
                CancelCommand Cancel = new CancelCommand(SharedResources.rpcid.FetchRPCID(), ActiveMakerbotJob.id);
                
                //This issues the Cancel Command for the Job. If the Issuing of the Command Fails, it will return false, which will cause the reply loop to skip.
                bool MethodReception = !SharedResources.IssueCommand(Cancel);
                //Grabs the sending time so the loop can time out if conveyor isnt responding.
                DateTime CommandSent = DateTime.Now;
                //Wait for cancelation confirmation
                while (!MethodReception)
                {
                    //Waiting for job cancelation notice
                    if (DateTime.Now.Subtract(CommandSent) > new TimeSpan(0, 0, ConveyorReplyTimeout))
                    {
                        //If recieving a response from conveyor about the print has taken over the timeout, abort waiting and carry on.
                        break;
                    }
                    System.Threading.Thread.Sleep(500);
                    Command Updated;
                    //Check to see if the Command has recieved a reply from conveyor
                    SharedResources.CommandHistory.TryGetValue(Cancel.rpcid, out Updated);
                    if (Updated.Recieved)
                    {
                        //If reply has bee recieved, break loop.
                        MethodReception = true;
                    }
                    //Check if reply recieved
                }
            }
        }


    }
}
