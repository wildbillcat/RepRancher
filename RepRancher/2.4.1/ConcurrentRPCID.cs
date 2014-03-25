using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher._2._4._1
{
    public class ConcurrentRPCID
    {
        int RPCID;
        System.Threading.Mutex RPCLock;

        public ConcurrentRPCID() : this(9000)
        {
        }

        public ConcurrentRPCID(int startingRpcID)
        {
            RPCID = startingRpcID;
            RPCLock = new System.Threading.Mutex();
        }

        public int PeekRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCLock.ReleaseMutex();
            return ret;
        }

        public int FetchRPCID()
        {
            RPCLock.WaitOne();
            int ret = RPCID;
            RPCID++;
            RPCLock.ReleaseMutex();
            return ret;
        }
    }
}
