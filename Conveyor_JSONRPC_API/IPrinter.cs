using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IPrinter
    {
        IJob GetCurrentJob();

        string GetPrinterModel();

        string GetStatus();

        string GetDisplayName();

        string GetName();

        IJob Print(string FilePath);

        IJob PrintAsync(string FilePath);
    }
}
