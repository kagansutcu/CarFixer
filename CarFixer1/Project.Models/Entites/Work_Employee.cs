using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Entites
{
  public  class Work_Employee:BaseEntity
    {
        public int EmployeeID { get; set; }
        public int WorkOrderID { get; set; }
        //Relationa properties is started
        public virtual Employee Employee { get; set; }
        public virtual WorkOrder WorkOrder { get; set; }
    }
}
