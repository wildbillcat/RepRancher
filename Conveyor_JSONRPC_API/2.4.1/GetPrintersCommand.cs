using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    class GetPrintersCommand : Command
    {
        public GetPrintersCommand(int RpcId)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.GetPrinters(rpcid);
        }
    }
}
