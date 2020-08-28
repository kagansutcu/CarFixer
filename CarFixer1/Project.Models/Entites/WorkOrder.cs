using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using Project.Models.Entites;

namespace Project.DAL.Entites.Project.Models
{
   public class WorkOrder:BaseEntity
    {
        public WorkOrder()
        {
            BirakimTarihi = DateTime.Now.ToString("HH:MM");
        }
    
        public string AraciBirakan { get; set; }
        public string Phone { get; set; }
        public int CarID  { get; set; }
        public string AraciAlana { get; set; }
        public string BirakimTarihi { get; set; }
        public string AlmaTarih { get; set; }
        public string Km { get; set; }
        public string BakimaGelecegiTarih { get; set; }
        public int Price { get; set; }
        public string insuranceCompany { get; set; }
        public string CustomerWant { get; set; }
        public string EmployeeComment { get; set; }
        public string BakimeGelecigiKM { get; set; }
        public List<string> Photo  { get; set; }


        //Relational Properties are started
        public virtual  Car Car { get; set; }
        public virtual List<Product_WorkOrder> Product_WorkOrder { get; set; }
        public virtual List<Work_Employee> Work_Employee { get; set; }



    }
}
