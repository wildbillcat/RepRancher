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
            //Test if Parsing the Rancher Works
            RanchForeman Foreman = new RanchForeman();
            Console.WriteLine("Hired a Foreman!");
            Console.WriteLine();

            Console.ReadLine();
            
        }
    }
}
