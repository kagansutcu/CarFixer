using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
    public class Model_:BaseEntity
    {
        public string Name { get; set; }
        
        public int BrandID { get; set; }

        //Relational Properties are started
        public virtual Brand Brand { get; set; }
        public virtual List<Car> Cars { get; set; }
        public virtual List<Product> Products { get; set; }

    }
}
