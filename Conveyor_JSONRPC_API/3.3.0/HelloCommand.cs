using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._3._0
{
    public class HelloCommand : Conveyor_JSONRPC_API._3._0._0.Command
    {
        public HelloCommand(int RpcId)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Hello(rpcid);
        }
    }
}
