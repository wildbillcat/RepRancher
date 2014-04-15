using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Conveyor_JSONRPC_API._3._0._0;

namespace RepRancher._3._0._1
{
    class ConveyorRancher : RepRancher._3._0._0.ConveyorRancher
    {

        public ConveyorRancher(RancherBrand Brand, Uri Fetch, string ClientAPIKey) : base(Brand, Fetch, ClientAPIKey) { }

        public override RepRancher.MakerFarmUpdate[] GetMakerFarmUpdates(RepRancher.MakerFarmService.MachineInterest[] ReportOn)
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
                    Abort.Add(i);
                }
            }
            //Now that there is a list of no longer valid jobs, let's toss them
            foreach (int i in Abort)
            {
                ConveyorJob TempJ;
                int TempVal;
                SharedResources.CurrentJobs.TryGetValue(SharedResources.MakerFarmToConveyorJobIds[i], out TempJ);
                SharedResources.MakerFarmToConveyorJobIds.TryRemove(i, out TempVal);
                string FilePath = string.Concat(PrintTemporaryFileStoragePath, TempJ.name); //makerbot
                if (TempJ.driver_name.Equals("s3g"))
                {
                    FilePath = string.Concat(FilePath, ".gcode");
                }
                else if (TempJ.driver_name.Equals("birdwing"))
                {
                    FilePath = string.Concat(FilePath, ".makerbot");
                }
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
                ConveyorPhysicalPrinter P;
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
                    MUpdate.MachineName = P.name.GetMachine_Hash();
                    MUpdate.CurrentTaskProgress = null;
                    MUpdate.MachineStatus = P.state + "\n" +
                        "Printer Type: " + P.printer_type + "\n" +
                        "Firmware Version: ";
                    foreach (int i in P.firmware_version)
                    {
                        MUpdate.MachineStatus = string.Concat(MUpdate.MachineStatus, i.ToString(), ".");
                    }
                    MUpdate.MachineStatus = string.Concat(MUpdate.MachineStatus, "\n");

                    if (P.temperature != null)
                    {
                        /* Presently there is no support for head Temperatures in the 3.0 software
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
                         */
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
                            if (J.progress.name.Equals("print") || J.progress.name.Equals("printing"))
                            {
                                MUpdate.CurrentTaskProgress = J.progress.progress;
                            }
                            else
                            {
                                MUpdate.CurrentTaskProgress = null;
                            }
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
                            if (jj.type.Equals("PrintJob"))
                            {
                                ConveyorPhysicalPrinterName JerbPrinterName = Newtonsoft.Json.JsonConvert.DeserializeObject<ConveyorPhysicalPrinterName>(jj.machine_name.ToString());
                                if (!jj.state.Equals("STOPPED") && JerbPrinterName.GetMachine_Hash().Equals(Mi.MachineName))
                                {
                                    jobs.Add(jj);
                                }
                            }
                        }
                        if (jobs.Count() == 0 && P.can_print)
                        {
                            //Lets fetch the file we need to print.
                            string PostData = "{\"ClientAPIKey\":\"" + SharedResources.ClientAPIKey + "\",\"MachineName\":\"" + P.name.GetMachine_Hash() + "\",\"JobId\":" + Mi.CurrentJob.ToString() + "}";
                            string FilePath = string.Concat(PrintTemporaryFileStoragePath, Mi.PrintFileName);
                            using (var client = new System.Net.WebClient())
                            {
                                client.Headers.Add("Content-Type", "application/json;odata=verbose");
                                byte[] result = client.UploadData(SharedResources.TakeThis, "POST", Encoding.UTF8.GetBytes(PostData));
                                System.IO.File.WriteAllBytes(FilePath, result);
                            }

                            //No job is running on the Printer! Lets send one.
                            ConveyorPrintJobMetadata ConveyorJobData = new ConveyorPrintJobMetadata();
                            ConveyorJobData.duration_s = Mi.EstToolpathTime * 60; //Converts minutes to seconds
                            ConveyorJobData.extrusion_distance_a_mm = Mi.EstMaterialUse;
                            ConveyorJobData.extrusion_mass_a_grams = Mi.EstMaterialUse * 28.3495; //Converts Ounces to Grams
                            ConveyorSlicerSettings SliceSettings = new ConveyorSlicerSettings();
                            Conveyor_JSONRPC_API._3._0._1.PrintCommand Print = new Conveyor_JSONRPC_API._3._0._1.PrintCommand(SharedResources.rpcid.FetchRPCID(), true, FilePath, ConveyorJobData, P.name.GetMachine_Hash(), SliceSettings.materials, new ConveyorSlicerSettings(P.printer_type), "", Mi.CurrentJob);
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
                                if (JinQ.type.Equals("PrintJob"))
                                {
                                    ConveyorPhysicalPrinterName JerbPrinterName = Newtonsoft.Json.JsonConvert.DeserializeObject<ConveyorPhysicalPrinterName>(JinQ.machine_name.ToString());
                                    if (JerbPrinterName.GetMachine_Hash().Equals(P.name) && string.IsNullOrEmpty(JinQ.conclusion))
                                    {
                                        J = JinQ;
                                    }
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
                        foreach (ConveyorJob jerb in SharedResources.CurrentJobs.Values.Where(p => p.type.Equals("PrintJob")))
                        {
                            if (jerb.type.Equals("PrintJob"))
                            {
                                ConveyorPhysicalPrinterName JerbPrinterName = Newtonsoft.Json.JsonConvert.DeserializeObject<ConveyorPhysicalPrinterName>(jerb.machine_name.ToString());
                                if (JerbPrinterName.GetMachine_Hash().Equals(Mi.MachineName) && string.IsNullOrEmpty(jerb.conclusion))
                                {
                                    J = jerb;
                                }
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
            return MakerFarmUpdates.ToArray();
        }
    }
}
