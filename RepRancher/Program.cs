﻿using System;
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
                Console.ReadLine();
                Console.WriteLine();
                Console.WriteLine("Sorry I don't understand anything yet, and am single threaded");
                Console.WriteLine();
            }
            
        }
    }
}