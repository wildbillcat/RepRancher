using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace RepRancher
{

    public class RancherBrandCollection : List<RancherBrand>
    {
        public RancherBrandCollection() : base() { }
        public RancherBrandCollection(IEnumerable<RancherBrand> ListToCopy)
            : this()
        {
            this.AddRange(ListToCopy);
        }
    }

    [Serializable]
    public class RancherBrand
    {
        public bool Enabled { get; set; }
        public RancherType Type { get; set; }
        public string PrintTemporaryFileStoragePath { get; set; }
        public int PrinterReplyTimeout { get; set; }
        public string IPAddress { get; set; }
        public int PortNumber { get; set; }
        public string AdvancedConfigurationString { get; set; }
    }

 

}
