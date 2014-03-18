using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RepRancher.MakerFarmService;

namespace RepRancher
{
    class MakerFarmUpdate
    {
        MachineStatusUpdate MachineUpdate { set; get; }
        JobStatusUpdate JobUpdate { set; get; }
    }
}
