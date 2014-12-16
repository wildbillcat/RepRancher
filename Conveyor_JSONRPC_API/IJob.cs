using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Conveyor_JSONRPC_API
{
    public interface IJob
    {
        int MakerFarmID
        {
            get;
            set;
        }

        int ConveyorID
        {
            get;
            set;
        }

        string FileName
        {
            get;
            set;
        }

        string State
        {
            get;
            set;
        }

        double TaskProgress
        {
            get;
            set;
        }

        string Task
        {
            get;
            set;
        }

        int PrinterName
        {
            get;
            set;
        }
    
        void GetAssignedPrinter();

        string GetStatus();

        double GetProgress();

        void CancelJob();

        void PauseJob();

        void CancelJobAsync();

        void PauseJobAsync();

        void ResumeJob();

        void ResumeJobAsync();

        string GetFileName();
    }
}
