using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IPrinter
    {
        /// <summary>
        /// Json: name-&gt;iserial
        /// </summary>
        string Name
        {
            get;
            set;
        }

        /// <summary>
        /// Json: display_name
        /// </summary>
        string DisplayName
        {
            get;
            set;
        }

        string State
        {
            get;
            set;
        }

        Object PrinterLock
        {
            get;
            set;
        }
    
        IJob GetCurrentJob();

        string GetPrinterModel();

        string GetStatus();

        string GetDisplayName();

        string GetName();

        IJob Print(string FilePath);

        IJob PrintAsync(string FilePath);
    }
}
