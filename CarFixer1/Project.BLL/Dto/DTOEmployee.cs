using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Dto
{
   public class DTOEmployee
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public string PhoneNumber { get; set; }

    }
}
