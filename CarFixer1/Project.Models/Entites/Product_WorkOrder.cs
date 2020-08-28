using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.Models.Entites
{
    public class Product_WorkOrder:BaseEntity
    {

        public int ProductID { get; set; }
        public int WorkOrderID { get; set; }
        public int Used { get; set; }

        //Relational Properties
        public virtual Product Product { get; set; }
        public virtual WorkOrder WorkOrder { get; set; }
    }
}
