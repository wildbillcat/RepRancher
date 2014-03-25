using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    public class GetPortsCommand : Command
    {
        public GetPortsCommand(int RpcId)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.GetPorts(rpcid);
        }
    }
}
