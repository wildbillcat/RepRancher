using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher
{
    public partial class RepRancherService : System.ServiceProcess.ServiceBase
    {
        RanchForeman Foreman;
        System.Timers.Timer t;
        public RepRancherService()
        {
            InitializeComponent();
        }

        protected override void OnStart(string[] args)
        {
            t = new System.Timers.Timer(5000);
            t.Elapsed += new System.Timers.ElapsedEventHandler(startup);
            t.Start();
        }

        public void Die(object source, System.Timers.ElapsedEventArgs e)
        {
            Environment.FailFast(null);
        }

        public void startup(object source, System.Timers.ElapsedEventArgs e)
        {
            t.Stop();
            t.Enabled = false;
            Foreman = new RanchForeman();
        }

        protected override void OnStop()
        {
            System.Timers.Timer d = new System.Timers.Timer(1000);
            d.Elapsed += new System.Timers.ElapsedEventHandler(Die);
            d.Enabled = true;
            d.Start();
        }

        private void InitializeComponent()
        {
            // 
            // RepRancherService
            // 
            this.ServiceName = "RepRancherService";

        }
    }
}
