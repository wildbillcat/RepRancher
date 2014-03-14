using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Threading;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace ConveyorCommandCracker
{
    class Program
    {
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

        static void Main(string[] args)
        {

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
                //This has the command thread sleep a bit once it is done issuing it's batch of commands to conveyor
                System.Threading.Thread.Sleep(int.Parse(ConfigurationManager.AppSettings["CommandIssuingSleepTime"]) * 1000);
            }
        }
    }
}
