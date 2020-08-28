using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
   public class CarType:BaseEntity
    {

        public string Name { get; set; }
        //Relational Properties are started
        public virtual List<Car> Cars { get; set; }
    }
}
