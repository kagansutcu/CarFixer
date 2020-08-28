using Project.DAL.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.DesignPatterns.SingeltonPattern
{
    public class Singelton
    {
        public Singelton()
        {

        }

        static MyContext _DBtool { get; set; }
        static public MyContext DBTool
        {

            get
            {
                if (_DBtool == null)
                {
                    _DBtool = new MyContext();
                }
                return _DBtool;
            }


        }



    }
}
