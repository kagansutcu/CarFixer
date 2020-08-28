using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Dto
{
   public class DTOProduct
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string Code { get; set; }
        public int Stock { get; set; }
        public int SellingPrice { get; set; }
        public int BuyingPrice { get; set; }
        public int Tax { get; set; }
    }
}
