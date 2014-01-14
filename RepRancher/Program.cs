using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;


namespace RepRancher
{
    class Program
    {

        static void Main(string[] args)
        {
            Console.WriteLine("RepRancher!");
            Console.WriteLine();
            ConveyorService Conveyor = new ConveyorService("127.0.0.1", 9999);
            while (true)
            {
                string command = Console.ReadLine();
                if (command.Equals("help"))
                {

                }
                else if (command.Equals("getprinters"))
                {
                    //user asked for a list of printers, so issue the command!
                    command = Conveyor_JSONRPC_API.ServerAPI.GetPrinters(Conveyor.FetchRPCID());
                }
                else
                {
                    command = null;
                    Console.WriteLine("Sorry I don't understand anything yet! But I am good at watching.");
                    Console.WriteLine("Do things with Makerware and I'll try and make sense of it all.");
                    Console.WriteLine("Anything I can't figure out I'll add to my error log, which can then be used by the developer to improve me!");
                    Console.WriteLine("Note: I overwrite my error log each time I am launched, so be sure to save it in the event I crash!");
                    Console.WriteLine("Type help for information on available commands");
                    Console.WriteLine();
                }

                if (command != null)
                {
                    
                }
                
            }
            
        }
    }
}
