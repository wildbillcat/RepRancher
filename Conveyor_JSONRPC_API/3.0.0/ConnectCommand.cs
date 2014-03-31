using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._3._0._0
{
    public class ConnectCommand : Command
    {
        string machine_name;

        public ConnectCommand(int RpcId, string Machine_name)
        {
            rpcid = RpcId;
            Recieved = false;
            Reply = null;
            machine_name = Machine_name;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Connect(rpcid, machine_name);
        }
    }
}