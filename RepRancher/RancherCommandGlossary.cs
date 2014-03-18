using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher
{
    class RancherCommandGlossary
    {
        //Print Related Commands
        bool Print_Send { get; set; } //This denotes MakerFarm Job Support
        bool Print_Cancel { get; set; }
        bool Print_Pause { get; set; }
        bool Print_Resume { get; set; }
    }
}
