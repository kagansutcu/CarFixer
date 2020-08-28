using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Security.Permissions;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
    public  class Employee:BaseEntity
    {

        public string Name { get; set; }

        public string PhoneNumber { get; set; }
      

        //relational Properties are begin
         public virtual List<Work_Employee> work_Employees { get; set; }
        
    }
}
