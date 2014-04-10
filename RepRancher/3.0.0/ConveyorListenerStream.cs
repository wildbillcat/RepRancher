using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher._3._0._0
{
    public class ConveyorListenerStream
    {
        SharedResources SharedResources;

        public ConveyorListenerStream(SharedResources Shared_Resources)
        {
            SharedResources = Shared_Resources;
        }

        public void ListenerStreamThreadRun()
        {
            Console.Error.WriteLine(DateTime.Now.ToString() + ": Initializing Conveyor 3.0.0 ListenerStream");
            Console.Error.WriteLine();
            while (true)
            {
                try
                {

                    byte[] bytesToRead = new byte[SharedResources.tcpClient.ReceiveBufferSize];
                    int bytesRead = SharedResources.dataStream.Read(bytesToRead, 0, SharedResources.tcpClient.ReceiveBufferSize);
                    string Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);
                    SharedResources.RepliesFromConveyor.Enqueue(Reply);                                   
                }
                catch
                {
                    //Make a note in the error log that the conveyor connection failed.
                    Console.Error.WriteLine(DateTime.Now + " : Connection to Conveyor has failed. Attempting to create new connection...");
                    Console.Error.WriteLine();
                    //Reading from the Data Stream has Failed. Will have to reset the connection.
                    while (false == SharedResources.ResetConveyorConnection())
                    {
                        Console.Error.WriteLine(DateTime.Now + " : Reconnection to Conveyor has failed. Will wait 5 Seconds and then reattempt connection...");
                        Console.Error.WriteLine();
                    }
                    //Method returns if connection is successfull.
                    Console.Error.WriteLine(DateTime.Now + " : Reconnection to Conveyor has succeded! Resuming normal operation.");
                    Console.Error.WriteLine();
                }
            }
        }
    }
}
