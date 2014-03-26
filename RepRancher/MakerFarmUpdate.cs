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
        public MachineStatusUpdate MachineUpdate { set; get; }
        public JobStatusUpdate JobUpdate { set; get; }

        public MakerFarmUpdate(MachineStatusUpdate MachineStatusUpdate, JobStatusUpdate JobStatusUpdate)
        {
            MachineUpdate = MachineStatusUpdate;
            JobUpdate = JobStatusUpdate;
        }
    }
}
