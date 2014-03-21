using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    //This is a Generic Command Object
    public abstract class Command
    {
        //RPC ID of the Command
        public int rpcid { get; set; }
        //Denotes if the command reply has been recieved
        public bool Recieved { get; set; }
        //This is a string containing whatever reply conveyor recieved if Rancher deems it might be important in the future.
        public string Reply { get; set; }

        public abstract string GetJSONString();
   
    }
}
