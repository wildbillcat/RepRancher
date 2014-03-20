using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RepRancher.MakerFarmService;

namespace RepRancher
{
    //This is a Generic Encapsulation for various printer types and versions. The Foreman will oversee many different kind of ranchers.
    public interface Rancher
    {
        //This returns a Command Glossary that can be used to see what Commands the printer supports.
        RancherCommandGlossary[] GetRancherCommandGlossary(MachineInterest[] ReportOn);

        //This returns an array of Makerfarm Updates that can be sent to MakerFarm.
        MakerFarmUpdate[] GetMakerFarmUpdates(MachineInterest[] ReportOn);
    }
}
