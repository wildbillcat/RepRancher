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
    //This is a temporary class where I toss all shared resources as I think about how to go about refactoring.
    //Though using this like a Struct isnt a half bad idea, so I may go that route in order to provide easy 
    //accesss to thread shared resources.
    public class SharedResources
    {
        /*
         * This is a list of the commands queued for printing.
         */
        ConcurrentQueue<string> commandQueue;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, string[]> methodHistory;

        /*
         * int rpcid, 
         * string methodName
         */
        ConcurrentDictionary<int, bool> methodReplyRecieved;

        /*
         * This is a list of the current ports known to be attached to the Conveyor Service
         */
        ConcurrentDictionary<string, ConveyorPort> CurrentPorts;

        /*
         * This is a list of the current printers known to the Conveyor Service
         */
        ConcurrentDictionary<string, ConveyorPrinter> CurrentPrinters;

        /*
         * This is a list of jobs known to the Conveyor Service
         */
        ConcurrentDictionary<int, ConveyorJob> CurrentJobs;

        /*
         * This is a list of Conveyor JobIDs indexed by MakerWare Jobs
         */
        ConcurrentDictionary<int, int> MakerWareToConveyorJobIds;

        /*
         * This is a list of MakerFarm JobIDs indexed by RPCIDs
         */
        ConcurrentDictionary<int, int> RPCIDtoMakerFarmJobIds;

    }
}
