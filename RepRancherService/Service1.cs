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
            t = new System.Timers.Timer(5000);
            t.Elapsed += new System.Timers.ElapsedEventHandler(startup);
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
                Conveyor.Startup();
            }
            Health.Enabled = true;
            Health.Start();
        }

        public void startup(object source, System.Timers.ElapsedEventArgs e)
        {
            t.Stop();
            t.Enabled = false;
            Conveyor = new ConveyorService("127.0.0.1", 9999); 
            GC.KeepAlive(Conveyor);
            Conveyor.Startup();
            Health = new System.Timers.Timer(10000);
            Health.Elapsed += new System.Timers.ElapsedEventHandler(HealthCheck);
        }

        protected override void OnStop()
        {
            //Conveyor.Dispose();
        }
    }
}
