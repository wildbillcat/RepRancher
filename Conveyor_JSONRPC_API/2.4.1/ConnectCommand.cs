using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Conveyor_JSONRPC_API._2._4._1
{
    class ConnectCommand : Command
    {
        string driver_name;
        string machine_name;
        bool persistent;
        string port_name;
        string profile_name;

        public ConnectCommand(int RpcId, string Driver_Name, string Machine_Name, bool Persistent, string Port_Name, string Profile_Name)
        {
            rpcid = RpcId;
            driver_name = Driver_Name;
            machine_name = Machine_Name;
            persistent = Persistent;
            port_name = Port_Name;
            profile_name = Profile_Name;
            Sent = false;
            Recieved = false;
            Reply = null;
        }

        public override string GetJSONString()
        {
            return ServerAPI.Connect(rpcid, driver_name, machine_name, persistent, port_name, profile_name);
        }
    }
}
