using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IPort
    {
        /// <summary>
        /// Json: name-&gt;iserial
        /// </summary>
        string Name
        {
            get;
            set;
        }
    
        string GetPrinterName();

        void Connect();
    }
}
