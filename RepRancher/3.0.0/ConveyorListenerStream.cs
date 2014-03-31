using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher._3._0._0
{
    class ConveyorListenerStream
    {
        SharedResources SharedResources;

        public ConveyorListenerStream(SharedResources Shared_Resources)
        {
            SharedResources = Shared_Resources;
        }

        public void ListenerStreamThreadRun()
        {
            Console.Error.WriteLine(DateTime.Now.ToString() + ": Initializing Conveyor 2.4.1 ListenerStream");
            Console.Error.WriteLine();
            while (true)
            {
                string Reply = "";
                try
                {

                    byte[] bytesToRead = new byte[SharedResources.tcpClient.ReceiveBufferSize];
                    int bytesRead = SharedResources.dataStream.Read(bytesToRead, 0, SharedResources.tcpClient.ReceiveBufferSize);
                    Reply = Encoding.ASCII.GetString(bytesToRead, 0, bytesRead);

                    //Lock the Replies to append
                    SharedResources.ConveyorReplyMutex.WaitOne();

                    //Attach new input to current string
                    SharedResources.repliesFromConveyor = string.Concat(SharedResources.repliesFromConveyor, Reply);

                    //Mark content as being available
                    SharedResources.contentAvailable = true;

                    //Release the Replies
                    SharedResources.ConveyorReplyMutex.ReleaseMutex();
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
