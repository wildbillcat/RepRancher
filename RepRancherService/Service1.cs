using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using RepRancher;

namespace RepRancherService
{
    public partial class Service1 : ServiceBase
    {
        ConveyorService Conveyor;
        System.Timers.Timer t;
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            Conveyor = new ConveyorService("127.0.0.1", 9999);
            GC.KeepAlive(Conveyor);
            t = new System.Timers.Timer(5000);
            t.Elapsed += new System.Timers.ElapsedEventHandler(startup);
            t.Start();
        }

        public void startup(object source, System.Timers.ElapsedEventArgs e)
        {
            t.Stop();
            t.Enabled = false;
            Conveyor.Startup();
        }

        protected override void OnStop()
        {
            Conveyor.Dispose();
        }
    }
}
