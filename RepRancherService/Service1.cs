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
        System.Timers.Timer Health;
        public Service1()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            Conveyor = new ConveyorService("127.0.0.1", 9999);
            GC.KeepAlive(Conveyor);
            t = new System.Timers.Timer(5000);
            t.Elapsed += new System.Timers.ElapsedEventHandler(HealthCheck);
            Health = new System.Timers.Timer(10000);
            t.Start();
        }

        public void HealthCheck(object source, System.Timers.ElapsedEventArgs e)
        {
            Health.Stop();
            Health.Enabled = false;
            if (!Conveyor.Valid())
            {
                //Something has happened to the conveyor service!
                Conveyor.Dispose();
                Conveyor = new ConveyorService("127.0.0.1", 9999);
            }
            Conveyor.Startup();
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
