using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IJob
    {
        void GetAssignedPrinter();

        string GetStatus();

        double GetProgress();
    }
}
