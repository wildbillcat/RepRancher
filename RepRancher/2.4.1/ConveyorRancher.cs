using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher._2._4._1
{
    public class ConveyorRancher : RepRancher.Rancher
    {
        private RepRancher.MakerFarmService.RancherCommandGlossary DefaultAvailableCommands { get; set; }

        /*
         * This is the TCP Client used to connect to the Conveyor Service
         */
        System.Net.Sockets.TcpClient tcpClient;

        /*
         * This is the Data Stream where data is written to and read from Conveyor
         */
        System.IO.Stream dataStream;

        /*
         * This is where the print files sent to the client are stored temporarily.
         */
        string PrintTemporaryFileStoragePath;

        /*
         * This is how many seconds we expect to .
         */
        int PrinterReplyTimeout;

        /*
         * This thread is assigned to listen to the incoming stream from conveyor and to jot down 
         * everything it recieves. 
         */
        System.Threading.Thread ConveyorListenerStreamThread;

        /*
         * This thread is assigned to parse and make sense of all the information recieved by the 
         * ConveyorListenerStreamThread from Conveyor.  
         */
        System.Threading.Thread ConveyorListenerParserThread;

        /*
         * This is the number of seconds RepRancher will wait before assuming a response isn't coming from conveyor for blocking commands.
         */
        int ConveyorReplyTimeout;

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
            tcpClient = new System.Net.Sockets.TcpClient();
            tcpClient.Connect(new System.Net.IPEndPoint(System.Net.IPAddress.Parse(Brand.IPAddress), Brand.PortNumber));

        }

        public RepRancher.MakerFarmService.RancherCommandGlossary[] GetRancherCommandGlossary(RepRancher.MakerFarmService.MachineInterest[] ReportOn)
        {
            throw new NotImplementedException();
        }

        public RepRancher.MakerFarmUpdate[] GetMakerFarmUpdates(RepRancher.MakerFarmService.MachineInterest[] ReportOn)
        {
            throw new NotImplementedException();
        }


    }
}
