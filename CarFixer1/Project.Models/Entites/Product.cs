using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
   public class Product:BaseEntity
    {

        public string Name { get; set; }
        public string Barcode { get; set; } 
        public string Code { get; set; }
        public int Stock { get; set; } 
        public int SellingPrice { get; set; }
        public int BuyingPrice { get; set; }
        public int Tax { get; set; }
        public string Photo { get; set; }
        //Relational Properties are started
        public virtual List<Product_WorkOrder> Product_WorkOrder { get; set; }

    }
}






