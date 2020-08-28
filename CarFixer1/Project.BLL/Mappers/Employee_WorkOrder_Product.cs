using Project.DAL.Entites.Project.Models;
using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
   public class Employee_WorkOrder_Product
    {
        public List<Work_Employee>  work_Employee { get; set; }
        public WorkOrder WorkOrder { get; set; }
    }
}
