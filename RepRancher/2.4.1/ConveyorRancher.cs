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

        public ConveyorRancher(RancherBrand Brand)
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
            SharedResources = new SharedResources(System.Net.IPAddress.Parse(Brand.IPAddress), Brand.PortNumber);

            //This is the Listener Stream used to listen in to conveyor
            ConveyorListenerStream = new ConveyorListenerStream(SharedResources);

            //This is the Parser for all the input taken from conveyor
            ConveyorListenerParser =  new ConveyorListenerParser(SharedResources);

            ConveyorListenerStreamThread = new System.Threading.Thread(new System.Threading.ThreadStart(ConveyorListenerStream.ListenerStreamThreadRun));
            ConveyorListenerStreamThread.Start();

            ConveyorListenerParserThread = new System.Threading.Thread(new System.Threading.ThreadStart(ConveyorListenerParser.ListenerParserThreadRun));
            ConveyorListenerParserThread.Start();
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
            throw new NotImplementedException();
        }


    }
}
