using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Configuration;
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
using System.Data.Services.Client;
using RepRancher.MakerFarmService;


namespace RepRancher
{
    public class ConveyorService
    {
        public bool EnableMakerFarmClient;
        /*
         * This is the IP Address of the Conveyor Service
         */
        IPEndPoint ipEndPoint;

        /*
         * This is the TCP Client used to connect to the Conveyor Service
         */
        TcpClient tcpClient;

        /*
         * This is the Data Stream where data is written to and read from Conveyor
         */
        Stream dataStream;

        /*
         * These threads are ised to run the ConveyorListenerServer and ConveyorCommandServer
         */
        Thread t1;
        Thread t2;
        Thread t3;

        /*
         * This Class runs on two threads, one of which continually listens to Conveyor looking for input and the other parses and processes the Data Recieved.
         */
        ConveyorListenerService ConveyorListenerServer;

        /*
         * This Class runs on a thread to process commands recieved from the user and from MakerFarm.
         */
        ConveyorCommandService ConveyorCommandServer;

        /*
         * This Timer is used to flush errors to the text file in a timely manner, to make sure that a crash doesnt get missed.
         */
        System.Timers.Timer ErrorFlush;

        /*
         * This Timer is used to send a simple hello command, to test that conveyor is still running.
         */
        System.Timers.Timer KeepAlive;
       
        /*
         * This is a list of the commands queued for printing.
         */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string[]> methodHistory;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, bool> methodReplyRecieved;

        /*
         * FileStream to Associated Conveyor Error Log
         */
        FileStream ostrm;

        /*
         * StreamWriter used to communicate log errors to the file.
         */
        StreamWriter errorLog;

        /*
         * This contains and controls the current RPCID used by the Threads
         */
        ConcurrentRPCID rpcid;

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
         * Determines how much output is sent to screen
         */
        public static bool NoisyClient;

        /*
         * This is the connection to MakerFarm
         */
        RepRancher.MakerFarmService.Container MakerFarmServiceContainer;

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

        public ConveyorService(string IPaddress, int PortNumber)
        {
            NoisyClient = bool.Parse(ConfigurationManager.AppSettings["NoisyClient"]);
            CurrentPorts = new ConcurrentDictionary<string, port>();
            CurrentPrinters = new ConcurrentDictionary<string, printer>();
            CurrentJobs = new ConcurrentDictionary<int, job>();

            rpcid = new ConcurrentRPCID();
            commandQueue = new ConcurrentQueue<string>();
            methodHistory = new ConcurrentDictionary<int, string[]>();
            methodReplyRecieved = new ConcurrentDictionary<int, bool>();
            MakerWareToConveyorJobIds = new ConcurrentDictionary<int, int>();
            RPCIDtoMakerFarmJobIds = new ConcurrentDictionary<int, int>();
            if (NoisyClient) { System.Console.WriteLine("Attempting to Open Connection to Error Log (error.txt)");}
            try
            {
                ostrm = new FileStream(ConfigurationManager.AppSettings["ErrorFile"], FileMode.OpenOrCreate, FileAccess.Write);
                errorLog = new StreamWriter(ostrm);
                System.Console.SetError(errorLog);
                if (NoisyClient) { System.Console.WriteLine("Opened Connection to Error Log");}
                Console.WriteLine();
                if (NoisyClient) { System.Console.WriteLine("Opening Test Message for Log");}
                errorLog.Flush();
                int ErrorTimer = 1000 * int.Parse(ConfigurationManager.AppSettings["ErrorTimer"]);
                if (NoisyClient) { System.Console.WriteLine("Error Timer in ms: " + ErrorTimer); }
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
            if (NoisyClient) { System.Console.WriteLine("Reading MakerFarm Uri"); }
            uri = new Uri(ConfigurationManager.AppSettings["MakerFarmAPIUri"]);
            if (NoisyClient) { System.Console.WriteLine("Creating MakerFarm Service Container"); }
            MakerFarmServiceContainer = new MakerFarmService.Container(uri);
            ClientAPIKey = ConfigurationManager.AppSettings["MakerFarmClientAPIKey"];
            MakerFarmClientID = int.Parse(ConfigurationManager.AppSettings["MakerFarmClientID"]);
            ISpyUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/ISpy");
            DoTellUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/DoTell");
            ISayUri = new Uri(uri, "ClientsAPI(" + MakerFarmClientID + ")/ISay");

            EnableMakerFarmClient = bool.Parse(ConfigurationManager.AppSettings["EnableMakerFarmClient"]);

            if (NoisyClient) { System.Console.WriteLine("Initializing connection to conveyor"); }
            ipEndPoint = new IPEndPoint(IPAddress.Parse(IPaddress), PortNumber);
            tcpClient = new TcpClient(); 
            tcpClient.Connect(ipEndPoint);
            dataStream = tcpClient.GetStream();
            ConveyorListenerServer = new ConveyorListenerService(tcpClient, dataStream, methodHistory, CurrentPorts, CurrentPrinters, CurrentJobs, methodReplyRecieved, MakerWareToConveyorJobIds, RPCIDtoMakerFarmJobIds);
            ConveyorCommandServer = new ConveyorCommandService(tcpClient, dataStream, commandQueue, methodHistory, rpcid);
            t1 = new Thread(new ThreadStart(ConveyorListenerServer.ListenerThreadRun));
            t2 = new Thread(new ThreadStart(ConveyorListenerServer.ProcessorThreadRun));
            t3 = new Thread(new ThreadStart(ConveyorCommandServer.CommandThreadRun));
            if (NoisyClient) { System.Console.WriteLine("Listener thread starting"); }
            t1.Start();
            if (NoisyClient) { System.Console.WriteLine("Processor thread starting"); }
            t2.Start();
            if (NoisyClient) { System.Console.WriteLine("Command thread starting"); }
            t3.Start();
            int KeepAliveTime = int.Parse(ConfigurationManager.AppSettings["KeepAliveTime"])*1000;
            if (KeepAliveTime > 0)
            {
                KeepAlive = new System.Timers.Timer(KeepAliveTime);
                KeepAlive.Elapsed += new System.Timers.ElapsedEventHandler(KeepAliveEvent);
                KeepAlive.Enabled = true;
            }
        }

        //This event triggers a call to check on printer status's
        public void KeepAliveEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            if (NoisyClient) { System.Console.WriteLine("Keep Alive Timer Fired"); }
            KeepAlive.Enabled = false;
            KeepAlive.Stop();
            this.Startup();
            if (EnableMakerFarmClient)
            {
                string[] ispy = CurrentPrinters.Keys.ToArray();
                //Now that status has been pulled, lets say hi to Makerfarm
                MakerFarmServiceContainer.Execute(ISpyUri, "POST", new BodyOperationParameter("ClientAPIKey", ClientAPIKey), new BodyOperationParameter("Machines", ispy));
                MachineInterest[] ReportOn = MakerFarmServiceContainer.Execute<MachineInterest>(DoTellUri, "POST", false, new BodyOperationParameter("ClientAPIKey", ClientAPIKey)).ToArray();
                //Now that RepRancher knows what Makerfarm is interested in hearing about, lets gather up that information and report on it!
                foreach (RepRancher.MakerFarmService.MachineInterest Mi in ReportOn)
                {
                    printer P;
                    if (CurrentPrinters.TryGetValue(Mi.MachineName, out P))
                    {
                        //Printer Makerfarm asked about exists! Lets Build a Machine Status!
                        MachineStatusUpdate MUpdate = new MachineStatusUpdate();
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
                                int[] BedTemp = JsonConvert.DeserializeObject<int[]>(P.temperature.heated_platforms.ToString());
                                foreach (int temp in BedTemp)
                                {
                                    MUpdate.MachineStatus = MUpdate.MachineStatus + "Heated Platform: " + temp + "\n";
                                }
                            }
                        }
                        job J;
                        JobStatusUpdate JUpdate = new JobStatusUpdate();
                        int ConveyorJobId = 0;
                        if (Mi.CurrentJob != 0 && MakerWareToConveyorJobIds.TryGetValue(Mi.CurrentJob, out ConveyorJobId) && CurrentJobs.TryGetValue(ConveyorJobId, out J))//if Current job isn't equal to 0, the MakerFarmID translates to a Conveyor Job and the Job exists, lets populate!
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
                            if (J.progress != null && J.state.Equals("OPERATION"))
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
                        else
                        {
                            JUpdate.JobId = 0;
                            JUpdate.started = false;
                            JUpdate.complete = false;
                            JUpdate.Status = null;
                            //Potentiallty there is a non-Makerfarm Job Printing. Lets append it's status to the Printer.
                            J = CurrentJobs.Values.Where(p => p.machine_name != null && p.machine_name.Equals(P.name)).OrderByDescending(p => p.id).FirstOrDefault();
                            if (J != null)
                            {
                                //Job is no longer null, meaning something has happened on the printer! Lets let users know.
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "\nNon-MakerFarm Job: \n";
                                MUpdate.MachineStatus = MUpdate.MachineStatus + "Status: " + J.state + "\n" +
                                "File Name: " + J.name + "\n";
                                if (J.progress != null)
                                {
                                    MUpdate.MachineStatus = MUpdate.MachineStatus + "Progress: " + J.progress.name + " " + J.progress.progress + "%\n";
                                    MUpdate.CurrentTaskProgress = J.progress.progress;
                                }
                            }

                        }
                        if (P.state.Equals("IDLE") || P.state.Equals("DISCONNECTED"))
                        {
                            MUpdate.CurrentTaskProgress = null;
                        }
                        //Built up information about this machine, submit to makerfarm
                        MakerFarmServiceContainer.Execute(ISayUri, "POST", new BodyOperationParameter("ClientAPIKey", ClientAPIKey), new BodyOperationParameter("MachineUpdate", MUpdate), new BodyOperationParameter("JobUpdate", JUpdate));
                    }
                    //string machineStatus = 
                }
            }
            KeepAlive.Enabled = true;
            KeepAlive.Start();
        }

        public bool Valid()
        {
            return t1.IsAlive && t2.IsAlive && t3.IsAlive;
        }

        public void Startup()
        {
            //List Ports
            if (NoisyClient) { System.Console.WriteLine("Getting Ports"); }
            int CommandID = int.Parse(InvokeCommand("getports"));
            bool MethodReception = false;
            //Wait for Ports

            MethodReception = false;
            CommandID = int.Parse(InvokeCommand("getports"));
            
            while (!MethodReception)
            {
                if (NoisyClient) { System.Console.WriteLine("Waiting for Ports"); }
                System.Threading.Thread.Sleep(500);
                methodReplyRecieved.TryGetValue(CommandID, out MethodReception);
                //Check if reply recieved
            }
            if (NoisyClient) { System.Console.WriteLine("Ports Recieved"); }
            //List Printers
            if (NoisyClient) { System.Console.WriteLine("Getting Printers"); }
            MethodReception = false;
            if (NoisyClient) { System.Console.WriteLine("Waiting for Ports"); }
            CommandID = int.Parse(InvokeCommand("getprinters"));
            //Wait for Printers
            while (!MethodReception)
            {
                if (NoisyClient) { System.Console.WriteLine("Waiting for Printers"); }
                System.Threading.Thread.Sleep(500);
                methodReplyRecieved.TryGetValue(CommandID, out MethodReception);
                //Check if reply recieved
            }
            if (NoisyClient) { System.Console.WriteLine("Printers Recieved"); }

            //List Jobs
            if (NoisyClient) { System.Console.WriteLine("Getting Jobs"); }
            MethodReception = false;
            CommandID = int.Parse(InvokeCommand("getjobs"));
            //Wait for Printers
            while (!MethodReception)
            {
                if (NoisyClient) { System.Console.WriteLine("Waiting for Jobs"); }
                System.Threading.Thread.Sleep(500);
                methodReplyRecieved.TryGetValue(CommandID, out MethodReception);
                //Check if reply recieved
            }
            if (NoisyClient) { System.Console.WriteLine("Jobs Recieved"); }

            if (NoisyClient) { System.Console.WriteLine("Preparing to Connect"); }
            foreach(string key in CurrentPorts.Keys){
                port P = null;
                if(CurrentPorts.TryGetValue(key, out P)){
                    //Port Found, Test if it is attached to printer. if not, connect
                    bool PortAttached = false;
                    if (NoisyClient) { System.Console.WriteLine("Checking if Port is Attached to a Printer"); }
                    foreach (string pkey in CurrentPrinters.Keys)
                    {
                        printer p = null;
                        if (CurrentPrinters.TryGetValue(pkey, out p))
                        {
                            if (P.name.Equals(p.port_name))
                            {
                                PortAttached = true;
                                if (NoisyClient) { System.Console.WriteLine("Port is attached to a printer"); }
                                //Port exists and is attached to a printer
                            }
                        }
                    }
                    if (!PortAttached)
                    {
                        if (NoisyClient) { System.Console.WriteLine("Port was not attached to a printer, Connecting"); }
                        MethodReception = false;
                        string command = "Connect -portname " + P.name;
                        CommandID = int.Parse(InvokeCommand(command));
                        while (!MethodReception)
                        {
                            if (NoisyClient) { System.Console.WriteLine("Waiting for connection"); }
                            System.Threading.Thread.Sleep(500);
                            methodReplyRecieved.TryGetValue(CommandID, out MethodReception);
                            //Check if reply recieved set to true, breaking the loop
                        }
                        if (NoisyClient) { System.Console.WriteLine("Port Connected"); }
                    }
                }
            }
        }

        public void Dispose()
        {
            Console.WriteLine("Ending Keep Alive Timer");
            KeepAlive.Stop();
            KeepAlive.Enabled = false;
            Console.WriteLine("Telling Listener Service to close up shop.");
            ConveyorListenerServer.TriggerDispose();
            Console.WriteLine("Telling Conveyor Hello-Goodbye.");
            InvokeCommand("hello");
            Console.WriteLine("Joining First Thread.");
            t1.Join();
            Console.WriteLine("Joining Second Thread.");
            t2.Join();
            Console.WriteLine("Telling Listener Service to close up shop.");
            ConveyorCommandServer.TriggerDispose();            
            Console.WriteLine("Joining Third Thread.");
            t3.Join();
            Console.WriteLine("Closing Data Stream.");
            dataStream.Close();
            Console.WriteLine("Closing TCP Connection.");
            tcpClient.Close();
            Console.WriteLine("Ending the Error Log Timer.");
            ErrorFlush.Stop();
            ErrorFlush.Enabled = false;
            Console.WriteLine("Closing Error Log Stream.");
            errorLog.Close();
            Console.WriteLine("Closing Error Log File Connection.");
            ostrm.Close();
        }

        /*
         * Used to parse and run commands from users and webservers.
         */
        public string InvokeCommand(string command)
        {
            string[] Command = command.Split(' ');
            string outPut = "";
            int rpcID = 0;
            if (Command[0].Equals("help"))
            {
                if (Command.Length > 1)
                {
                    if(Command[1].Equals("getjobs")){
                        return "The getjobs command does not use any parameters. It returns an array of job objects of any jobs that conveyor has dealt with this session.";
                    }else if(Command[1].Equals("getprinters")){
                        return "The getprinters command does not use any parameters. It return an array of printer objects of any printer conveyor is currently watching.";
                    }else if(Command[1].Equals("getports")){
                        return "The getports command does not use any parameters. It returns an array of port objects that conveyor currently sees. Connecting to these objects then allows for the use of affiliated printers.";
                    }else if(Command[1].Equals("connect")){
                        return "The connect command requires the following parameters: \n " + 
                            "-port_name [portname] ie. -portname COM3:9153:45077 \n " + 
                            "The following parameters are optional: \n " + 
                            "-driver_name [drivername] ie. -driver_name s3g \n " + 
                            "-machine_name [machinename] ie. -machine_name 23C1:B015:7523733353635171E0D1 \n " + 
                            "-persistent [boolean] ie. -persistent false \n " + 
                            "-profile_name [profilename] ie. -profile_name Replicator2";
                    }else if(Command[1].Equals("hello")){{
                        return "The hello command does not use any parameters. It returns a world reply if successfull, and should be called to the conveyor service first before any other command.";
                    }
                    }else if(Command[1].Equals("restart")){
                        return "The restart command does not use any parameters. It disposes of the current connection to the conveyor service and reconnects using a new set of threads.";
                    }else if(Command[1].Equals("exit")){
                        return "The exit command does not use any parameters. It closes the connection to conveyor and cause RepRancher to exit.";
                    }else if (Command[1].Equals("print")){
                        return "The connect command requires the following parameters: \n " +
                            "-input_file [filename] ie. -input_file C:\\printfile.gcode \n " +
                            "-machine_name [machinename] ie. -machine_name 23C1:B015:7523733353635171A221 \n \n" +
                            "The following parameters are optional: \n " +
                            "-gcode_processor_names [gcodeprocessornames] ie. -gcode_processor_names not,sure,of,options \n " +
                            "-has_start_end [boolean] ie. -has_start_end true \n " +
                            "-material_name [materialnames] ie. -material_name false PLA,PLA \n " +
                            "-slicer_name [slicername] ie. -slicer_name miraclegrue \n \n" +
                            "The following parameters can be used to modify the slicer settings: \n " +
                            "-default_raft_extruder [defaultraftextruder] ie. -default_raft_extruder 0 \n " + 
                            "-default_support_extruder [defaultsupportextruder] ie. -default_support_extruder 0 \n " +
                            "-do_auto_raft [boolean] ie. -do_auto_raft true  \n " +
                            "-do_auto_support [boolean] ie. -do_auto_support false  \n " +
                            "-extruder [extruder] ie. -extruder 0  \n " +
                            "-extruder_temperatures [extrudertemperatures] ie. -extruder_temperatures 230,230  \n " +
                            "-heat_platform [boolean] ie. -heat_platform false  \n " +
                            "-infill [infill] ie. -infill 0.1  \n " +
                            "-layer_height [layerheight] ie. -layer_height .2  \n " +
                            "-path [path] ie. -path C:\\SkienforgeProfile \n " +
                            "-platform_temperature [platformtemperature] ie. -platform_temperature 110  \n " +
                            "-print_speed [printspeed] ie. -print_speed 90  \n " +
                            "-raft [boolean] ie. -raft true  \n " +
                            "-shells [shells] ie. -shells 2  \n " +
                            "-slicer [slicer] ie. -slicer MIRACLEGRUE  \n " +
                            "-support [boolean] ie. -support false  \n " +
                            "-travel_speed [travel_speed] ie. -travel_speed 150  \n ";
                    }
                    else if (Command[1].Equals("list"))
                    {
                        return "The list command takes one of the following parameters, returning information about the specified type. \n jobs ie. list jobs \n printers ie. list printers \n ports ie. list ports \n";
                    }
                    else if (Command[1].Equals("canceljob"))
                    {
                        return "The canceljob command requires the following parameter: \n" + 
                            "-jobid [id] ie. -jobid 1 \n";
                    }
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }else{
                    //Returns a string of help data giving the user a list of what commands are available, and what they accomplish
                    return "So far a hand full of methods have been made available. \n Should you need more details on a specific command, type: \n help command \n \n" +
                        "Commands Specific to RepRancher: \n exit \n restart \n list" +
                    "\n \n Available Conveyor Commands: \n hello \n getprinters \n getjobs \n getports \n connect \n print \n canceljob \n";
                }

            } if (Command[0].Equals("print"))
            {
                if (Command.Length < 5)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    string[] gcode_processor_names = null;
                    bool has_start_end = true;
                    string input_file = ""; //Required
                    string machine_name = ""; //Required
                    string[] material_name = new string[] {"PLA","PLA"};
                    string slicer_name = "miraclegrue";
                    slicersettings slicer_settings = new slicersettings();
                    for (int i = 1; i < Command.Length; i++)
                    {
                        string cmd = Command[i];
                        if (cmd.Equals("-gcode_processor_names"))
                        {
                            i++;
                            gcode_processor_names = Command[i].Split(',');
                        }
                        else if (cmd.Equals("-has_start_end"))
                        {
                            i++;
                            has_start_end = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-input_file"))
                        {
                            i++;
                            input_file = Command[i];
                        }
                        else if (cmd.Equals("-machine_name"))
                        {
                            i++;
                            machine_name = Command[i];
                        }
                        else if (cmd.Equals("-material_name"))
                        {
                            i++;
                            material_name = Command[i].Split(',');
                        }
                        else if (cmd.Equals("-slicer_name"))
                        {
                            i++;
                            slicer_name = Command[i];
                        }
                        else if (cmd.Equals("-default_raft_extruder"))
                        {
                            i++;
                            slicer_settings.default_raft_extruder = int.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-default_support_extruder"))
                        {
                            i++;
                            slicer_settings.default_support_extruder = int.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-do_auto_raft"))
                        {
                            i++;
                            slicer_settings.do_auto_raft = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-do_auto_support"))
                        {
                            i++;
                            slicer_settings.do_auto_support = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-extruder"))
                        {
                            i++;
                            slicer_settings.extruder = Command[i];
                        }
                        else if (cmd.Equals("-extruder_temperatures"))
                        {
                            i++;
                            List<int> temps = new List<int>();
                            foreach (string s in Command[i].Split(','))
                            {
                                temps.Add(int.Parse(s));
                            }
                            slicer_settings.extruder_temperatures = temps.ToArray();
                        }
                        else if (cmd.Equals("-heat_platform"))
                        {
                            i++;
                            slicer_settings.heat_platform = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-infill"))
                        {
                            i++;
                            slicer_settings.infill = double.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-layer_height"))
                        {
                            i++;
                            slicer_settings.layer_height = double.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-path"))
                        {
                            i++;
                            slicer_settings.path = Command[i];
                        }
                        else if (cmd.Equals("-platform_temperature"))
                        {
                            i++;
                            slicer_settings.platform_temperature = int.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-print_speed"))
                        {
                            i++;
                            slicer_settings.print_speed = int.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-raft"))
                        {
                            i++;
                            slicer_settings.raft = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-shells"))
                        {
                            i++;
                            slicer_settings.shells = int.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-slicer"))
                        {
                            i++;
                            slicer_settings.slicer = Command[i];
                        }
                        else if (cmd.Equals("-support"))
                        {
                            i++;
                            slicer_settings.support = bool.Parse(Command[i]);
                        }
                        else if (cmd.Equals("-travel_speed"))
                        {
                            i++;
                            slicer_settings.travel_speed = int.Parse(Command[i]);
                        }
                    }
                    if (!System.IO.File.Exists(input_file))
                    {
                        return "The File you wanted printed does not appear to exist. File: \n" + input_file;
                    }
                    printer selectedPrinter = null;
                    bool existingPrinter = CurrentPrinters.TryGetValue(machine_name, out selectedPrinter);

                    if (!existingPrinter)
                    {
                        return "The Printer you wanted does not appear to exist. File: \n" + machine_name;
                    }
                    if (!selectedPrinter.state.Equals("IDLE"))
                    {
                        return "The Printer you wanted is currently unavailable. State: " + selectedPrinter.state;
                    }
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.Print(rpcID, gcode_processor_names, has_start_end, input_file, machine_name, material_name, slicer_name, slicer_settings);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("getjobs"))
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.GetJobs(rpcID);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("getports"))
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPorts(rpcID);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("getprinters"))
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPrinters(rpcID);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("connect"))
            {
                string port_name = null;
                string driver_name = null;
                string machine_name = null;
                bool persistent = false;
                string profile_name = null;

                if (Command.Length < 3 || Command.Length > 10)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";                    
                }
                else
                {
                    for(int i = 0; i < Command.Length; i++){
                        string cmd = Command[i];
                        if(cmd.Equals("-port_name")){
                            port_name = Command[i++];
                        }else if(cmd.Equals("-driver_name")){
                            driver_name = Command[i++];
                        }else if(cmd.Equals("-machine_name")){
                            machine_name = Command[i++];
                        }else if(cmd.Equals("-persistent")){
                            persistent = bool.Parse(Command[i++]);
                        }else if(cmd.Equals("-profile_name")){
                            profile_name = Command[i++];
                        }
                    }
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.Connect(rpcID, driver_name, machine_name, persistent, port_name, profile_name);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("hello"))//
            {
                if (Command.Length > 1)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    command = Conveyor_JSONRPC_API.ServerAPI.Hello(rpcID);
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("canceljob"))//
            {
                if (Command.Length != 3)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    //Valid Command
                    rpcID = rpcid.FetchRPCID();
                    try
                    {
                        command = Conveyor_JSONRPC_API.ServerAPI.CancelJob(rpcID, int.Parse(Command[2]));
                    }
                    catch
                    {
                        return "Invalid job id";
                    }
                    outPut = "" + rpcID;
                }
            }
            else if (Command[0].Equals("list"))
            {
                if (Command.Length != 2)
                {
                    //Command has invalid number of parameters. Return
                    return "Command has an invalid number of parameters";
                }
                else
                {
                    string output = "";
                    if (Command[1].Equals("jobs"))
                    {
                        foreach (int i in CurrentJobs.Keys)
                        {
                            output = string.Concat(output, "Name: ", CurrentJobs[i].name, "\n", "Job Id: ", CurrentJobs[i].id, "\n", "State: ", CurrentJobs[i].state, "\n", "Progress: ");
                            if (CurrentJobs[i].progress != null)
                            {
                                 output = string.Concat(output, CurrentJobs[i].state, "\n\n");
                            }
                            else
                            {
                                output = string.Concat(output, " null \n\n");
                            }
                        }
                    }
                    else if (Command[1].Equals("printers"))
                    {
                        foreach (string i in CurrentPrinters.Keys)
                        {
                            output = string.Concat(output, "Name: ", CurrentPrinters[i].name, "\n", "PrinterType: ", CurrentPrinters[i].printerType, "\n", "State: ", CurrentPrinters[i].state, "\n");
                            if (CurrentPrinters[i].temperature != null && CurrentPrinters[i].temperature.tools != null)
                            {
                                foreach (string Tool in CurrentPrinters[i].temperature.tools.Keys)
                                {
                                    output = string.Concat(output, "Toolhead ", Tool, " : ", CurrentPrinters[i].temperature.tools[Tool], "\n");
                                }
                            }
                            output = string.Concat(output, "Can Print : ", CurrentPrinters[i].canPrint.ToString(), "\n\n");
                        }
                    }
                    else if (Command[1].Equals("ports"))
                    {
                        foreach (string i in CurrentPorts.Keys)
                        {
                            output = string.Concat(output, "Name: ", CurrentPorts[i].name, "\n", "iserial: ", CurrentPorts[i].iserial, "\n", "Type: ", CurrentPorts[i].type, "\n\n");
                        }
                    }
                    else
                    {
                        output = "Invalid Parameter: " + Command[1];
                    }
                    return output;
                }
            }
            else
            {
                //if this is returned, no method is run due to found invalidity
                return "Invalid Command: " + Command[0] + "\n Type help for information on available commands";
            }

            //Should only get here if a valid command was issued, add command to history and queue it up.
            if (!methodHistory.TryAdd(rpcID, Command))
            {
                return "This Command has previously been issued!";
            }
            if (!methodReplyRecieved.TryAdd(rpcID, false))
            {
                return "Command reception preparation could not be made. Aborting command";
            }
            commandQueue.Enqueue(command);
            
            return outPut; //Command queued up and added to the issue history!
        }

        private void OnTimedEvent(object source, System.Timers.ElapsedEventArgs e)
        {
            errorLog.Flush();
        }
    }

    class ConcurrentRPCID{

        int RPCID;
        Mutex RPCLock;

        public ConcurrentRPCID() : this(9000){
        }

        public ConcurrentRPCID(int startingRpcID){
            RPCID = startingRpcID;
            RPCLock = new Mutex();
        }

        public int PeekRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCLock.ReleaseMutex();
            return ret;
        }

        public int FetchRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCID++;
            RPCLock.ReleaseMutex();
            return ret;
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
        ConcurrentDictionary<int, string[]> methodHistory;

        /*
         * This is an int used to track the replies from conveyor and pair them to methods that were called.
         */
        ConcurrentRPCID rpcid;

        /*
         * Mutex Protects the dispose variable
         */
        Mutex DisposeMutex;

        /*
         * Determines if the thread should end.
         */
        bool Dispose;

        public ConveyorCommandService(TcpClient TcpClient, Stream DataStream, ConcurrentQueue<string> Commands, ConcurrentDictionary<int, string[]> History, ConcurrentRPCID RpcId)
        {
            tcpClient = TcpClient;
            dataStream = DataStream;
            commandQueue = Commands;
            methodHistory = History;
            rpcid = RpcId;
            DisposeMutex = new Mutex();
            Dispose = false;
        }

        public void CommandThreadRun()
        {
            System.Console.WriteLine("Command thread starting");
            while (true)
            {
                DisposeMutex.WaitOne();
                if (Dispose)
                {
                    DisposeMutex.ReleaseMutex();
                    Console.WriteLine("Command thread returning.");
                    return;
                }
                DisposeMutex.ReleaseMutex();
                //check with makerfarm and see if there are any assigned jobs

                //process commands in the queue:
                string command;
                while (commandQueue.TryDequeue(out command))
                {
                    try
                    {
                        byte[] bytesToWrite = Encoding.ASCII.GetBytes(command);
                        dataStream.Write(bytesToWrite, 0, bytesToWrite.Length);
                        dataStream.Flush();
                    }
                    catch
                    {
                        Console.WriteLine("Command thread returning.");
                        return;
                    }
                }  
            }
        }

        public void TriggerDispose()
        {
            DisposeMutex.WaitOne();
            Dispose = true;
            DisposeMutex.ReleaseMutex();
        }

    }

    
}
