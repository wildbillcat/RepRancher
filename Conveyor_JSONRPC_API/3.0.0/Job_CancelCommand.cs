using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class Job_CancelCommand : Command
    {
        int jobid;

        public Job_CancelCommand(int RpcId, int Jobid)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
            jobid = Jobid;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Job_Cancel(rpcid, jobid);
        }
    }
}