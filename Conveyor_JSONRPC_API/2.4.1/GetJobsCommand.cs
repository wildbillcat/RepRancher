using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    class GetJobsCommand : Command
    {
        public GetJobsCommand(int RpcId)
        {
            rpcid = RpcId;
            Sent = false;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.GetJobs(rpcid);
        }
    }
}
