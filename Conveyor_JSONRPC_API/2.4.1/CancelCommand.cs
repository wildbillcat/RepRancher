using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    public class CancelCommand : Command
    {
        public int jobid;

        public CancelCommand(int RpcId, int JobId)
        {
            rpcid = RpcId;
            jobid = JobId;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.CancelJob(rpcid, jobid);
        }
    }
}
