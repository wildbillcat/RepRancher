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
            Conveyor.Startup();
            while (true)
            {
                try
                {
                    Console.WriteLine();
                    Console.WriteLine("RepRancher! Enter Command:");
                    string command = Console.ReadLine();
                    if (command.Equals("exit"))
                    {
                        Conveyor.Dispose();
                        return;
                    }
                    else if (command.Equals("restart"))
                    {
                        Conveyor.Dispose();
                        Conveyor = new ConveyorService("127.0.0.1", 9999);
                    }
                    else
                    {
                        if (Conveyor.Valid())
                        {
                            Console.WriteLine(Conveyor.InvokeCommand(command));
                        }
                        else
                        {
                            throw new Exception();
                        }
                    }
                }
                catch
                {
                    Conveyor.Dispose();
                    Console.WriteLine("Oh my! It seems that something might have happened to the Conveyor Service! Please restart it, make sure all is well, and then press enter to restart RepRancher.");
                    Console.ReadLine();
                    //This is presently wasteful, will have to look into disposing of the old Conveyor service.
                    Conveyor = new ConveyorService("127.0.0.1", 9999);
                }
            }
        }
    }
}
