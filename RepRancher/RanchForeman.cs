using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher
{
    /*
     * This is the main class that monitor's everything that is going on. 
     */
    class RanchForeman
    {       
        /*
         * This is the APIKey to MakerFarm
         */
        string ClientAPIKey;

        /*
         * This is the ClientID used to access MakerFarm
         */
        int MakerFarmClientID;

        Uri uri;
        Uri ISpyUri;
        Uri DoTellUri;
        Uri ISayUri;
        //File Fetching URI
        Uri TakeThis;

        /*
         * FileStream to Associated Conveyor Error Log
         */
        System.IO.FileStream ostrm;

        /*
         * StreamWriter used to communicate log errors to the file.
         */
        System.IO.StreamWriter errorLog;

        /*
         * This Timer is used to flush errors to the text file in a timely manner, to make sure that a crash doesnt get missed.
         */
        System.Timers.Timer ErrorFlush;

        /*
        * This is the connection to MakerFarm
        */
        RepRancher.MakerFarmService.Container MakerFarmServiceContainer;

        /*
         * This determines if Makerfarm should be contacted and updated
         */
        bool MakerFarmClientEnable;

        /*
         * This Timer is used to trigger updates to MakerFarm
         */
        System.Timers.Timer MakerFarm;

        List<Rancher> Ranchers;

        public RanchForeman()
        {
            try
            {
                int end = Properties.Settings.Default.ErrorFile.LastIndexOf("\\");
                if (!System.IO.Directory.Exists(Properties.Settings.Default.ErrorFile.Substring(0, end)))
                {
                    System.IO.Directory.CreateDirectory(Properties.Settings.Default.ErrorFile.Substring(0, end));
                }
                ostrm = new System.IO.FileStream(Properties.Settings.Default.ErrorFile, System.IO.FileMode.OpenOrCreate, System.IO.FileAccess.Write);
                errorLog = new System.IO.StreamWriter(ostrm);
                System.Console.SetError(errorLog);
                //Opened Connection to Error Log
                Console.Error.WriteLine(DateTime.Now.ToString() + ": Error Log Connection Succeessfully opened");
                Console.Error.WriteLine();
                //Opening Test Message for Log
                errorLog.Flush();
                int ErrorTimer = 1000 * Properties.Settings.Default.ErrorTimer;
                ErrorFlush = new System.Timers.Timer(ErrorTimer);
                ErrorFlush.Elapsed += new System.Timers.ElapsedEventHandler(FlushErrorLogEvent);
                ErrorFlush.Enabled = true;
            }
            catch (Exception e)
            {
                Console.WriteLine("Cannot open ./error.txt for writing! This session will not have any error logs!");
                Console.WriteLine(e.Message);
            }

            //Reading MakerFarm Uri
            uri = new Uri(Properties.Settings.Default.MakerFarmAPIUri);
            //Creating MakerFarm Service Container
            MakerFarmServiceContainer = new MakerFarmService.Container(uri);
            ClientAPIKey = Properties.Settings.Default.MakerFarmClientAPIKey;
            MakerFarmClientID = Properties.Settings.Default.MakerFarmClientID;
            ISpyUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/ISpy");
            DoTellUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/DoTell");
            ISayUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/ISay");
            TakeThis = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/TakeThis");

            Ranchers = new List<Rancher>();
            RancherBrandCollection RancherBrands = Properties.Settings.Default.RancherBrands;
            foreach (RancherBrand R in RancherBrands)
            {
                if (R.Enabled)
                {
                    if (R.Type == RancherType.Conveyor_2_4_1)
                    {
                        Ranchers.Add(new _2._4._1.ConveyorRancher(R, TakeThis, ClientAPIKey));
                    }
                    else if (R.Type == RancherType.Conveyor_3_0_0)
                    {
                        Ranchers.Add(new _3._0._0.ConveyorRancher(R, TakeThis, ClientAPIKey));
                    }
                    else if (R.Type == RancherType.Conveyor_3_0_1)
                    {
                        Ranchers.Add(new _3._0._1.ConveyorRancher(R, TakeThis, ClientAPIKey));
                    }
                    else if (R.Type == RancherType.DimensionSST768)
                    {
                        new NotImplementedException();
                    }
                    else
                    {
                        //Unknown Type of Rancher!
                        Console.Error.WriteLine(DateTime.Now.ToString() + ": Unknown Type of Client Specified: " + R.Type.ToString());
                        Console.Error.WriteLine();
                    }
                }                
            }

            MakerFarmClientEnable = Properties.Settings.Default.MakerFarmClientEnable;
            if (MakerFarmClientEnable)
            {
                MakerFarm = new System.Timers.Timer(Properties.Settings.Default.MakerFarmTime * 1000);
                MakerFarm.Elapsed += new System.Timers.ElapsedEventHandler(MakerFarmEvent);
                MakerFarm.Enabled = true;
            }
        }

        private void FlushErrorLogEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            errorLog.Flush();
        }

        private void MakerFarmEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            //Time to check on what the printers are doing
            MakerFarm.Enabled = false;
            MakerFarm.Stop();

            //Query all of the Clients for their known printers and build a list to report to Makerfarm
            List<string> PrintersKnown = new List<string>();
            foreach (Rancher R in Ranchers)
            {
                PrintersKnown.AddRange(R.GetKnownPrinters());
            }

            //Report the List to MakerFarm
            try
            {
                MakerFarmServiceContainer.Execute(ISpyUri, "POST", new System.Data.Services.Client.BodyOperationParameter("ClientAPIKey", ClientAPIKey), new System.Data.Services.Client.BodyOperationParameter("Machines", PrintersKnown.ToArray()));
            }
            catch
            {
                Console.Error.WriteLine(DateTime.Now.ToString() + ": Failed to report printers Seen to MakerFarm.");
                Console.Error.WriteLine();
                MakerFarm.Enabled = true;
                MakerFarm.Start();
                return;
            }
            RepRancher.MakerFarmService.MachineInterest[] ReportOn = new MakerFarmService.MachineInterest[1];
            try
            {
                ReportOn = MakerFarmServiceContainer.Execute<RepRancher.MakerFarmService.MachineInterest>(DoTellUri, "POST", false, new System.Data.Services.Client.BodyOperationParameter("ClientAPIKey", ClientAPIKey)).ToArray();
            }
            catch
            {
                Console.Error.WriteLine(DateTime.Now.ToString() + ": Failed to find out from makerfarm what printers I should report on.");
                Console.Error.WriteLine();
                MakerFarm.Enabled = true;
                MakerFarm.Start();
                return;
            }
            
            /* It appears a concurrent means of fetching from all the clients and merging simultaneously is harder than first expected. */
            //Fetch Updates from all the clients as to the statuses of the Printers concurrently, prioritising connected over disconnected printers.
            System.Collections.Concurrent.ConcurrentDictionary<string, MakerFarmUpdate> MakerFarmUpdates = new System.Collections.Concurrent.ConcurrentDictionary<string, MakerFarmUpdate>();
            Parallel.ForEach(Ranchers, Rancher =>
            {
                try
                {
                    foreach (MakerFarmUpdate MakerFUpdate in Rancher.GetMakerFarmUpdates(ReportOn))
                    {
                        MakerFarmUpdates.AddOrUpdate(MakerFUpdate.MachineUpdate.MachineName, MakerFUpdate, (key, existingVal) =>
                        {
                            if (MakerFUpdate.MachineUpdate.MachineStatus.Equals("DISCONNECTED"))
                            {
                                //New update is disconnected, disregard
                            }
                            else if (existingVal.MachineUpdate.MachineStatus.Equals("DISCONNECTED"))
                            {
                                //The Old MachineUpdate was disconnected! Update it
                                existingVal.MachineUpdate = MakerFUpdate.MachineUpdate;
                                existingVal.JobUpdate = MakerFUpdate.JobUpdate;
                            }
                            return existingVal;
                        });
                    }
                }
                catch
                {
                    Console.Error.WriteLine(DateTime.Now.ToString() + ": An Error Occurred while Fetching Information from Clients and updating the Update List");
                    Console.Error.WriteLine();
                    MakerFarm.Enabled = true;
                    MakerFarm.Start();
                    return;
                }                
            }
             );        
            
            //Now that the MakerFarm Updates have been cleared up, lets send them to MakerFarm
            Parallel.ForEach(MakerFarmUpdates.Values, MakerUpdate =>
            {
                try
                {
                    MakerFarmServiceContainer.Execute(ISayUri, "POST", new System.Data.Services.Client.BodyOperationParameter("ClientAPIKey", ClientAPIKey), new System.Data.Services.Client.BodyOperationParameter("MachineUpdate", MakerUpdate.MachineUpdate), new System.Data.Services.Client.BodyOperationParameter("JobUpdate", MakerUpdate.JobUpdate));
                }
                catch
                {
                    Console.Error.WriteLine(DateTime.Now.ToString() + ": Writing one of the printer updates to makerfarm Failed. Printer: " + MakerUpdate.MachineUpdate.MachineName);
                    Console.Error.WriteLine();
                    MakerFarm.Enabled = true;
                    MakerFarm.Start();
                    return;
                }                
            }
             );

            MakerFarm.Enabled = true;
            MakerFarm.Start();
        }
    }
}
