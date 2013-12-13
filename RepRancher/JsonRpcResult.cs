using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepRancher
{
    class JsonRpcResult
    {
        //Example Reply	"{\"jsonrpc\": \"2.0\", \"result\": \"world\", \"id\": \"2\"}"	string
        public double jsonrpc { get; set; }
        public string result { get; set; }
        public int id { get; set; }
    }
}
