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
         * Determines how much output is sent to screen
         */
        public static bool NoisyClient;
        
        /*
         * This is the APIKey to MakerFarm
         */
        string ClientAPIKey;

        /*
         * This is the ClientID used to access MakerFarm
         */
        int MakerFarmClientID;

        /*
         * This is the number of seconds RepRancher will wait before assuming a response isn't coming from conveyor for blocking commands.
         */
        int ConveyorReplyTimeout;

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

        
    }
}
