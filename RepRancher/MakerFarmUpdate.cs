using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RepRancher.MakerFarmService;

namespace RepRancher
{
    public class MakerFarmUpdate
    {
        MachineStatusUpdate MachineUpdate { set; get; }
        JobStatusUpdate JobUpdate { set; get; }

        public MakerFarmUpdate(MachineStatusUpdate MachineStatusUpdate, JobStatusUpdate JobStatusUpdate)
        {
            MachineUpdate = MachineStatusUpdate;
            JobUpdate = JobStatusUpdate;
        }
    }
}
