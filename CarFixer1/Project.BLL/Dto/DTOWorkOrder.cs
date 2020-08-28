using Project.DAL.Entites.Project.Models;
using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Dto
{
    public  class DTOWorkOrder
    {
        public DTOWorkOrder()
        {
        
        }
        public string AraciBirakan { get; set; }
        public string Phone { get; set; }
        public int CarID { get; set; }
        public string AraciAlan { get; set; }
        public string BirakimTarihi { get; set; }
        public string AlmaTarihi { get; set; }
        public string Km { get; set; }
        public string BakimaGelecegiKM { get; set; }
        public string BakimaGelecegiTarih { get; set; }
        public int Price { get; set; }
        public string insuranceCompany { get; set; }
        public string CustomerWant { get; set; }
        public string EmployeeComment { get; set; }
        public string CustomerName { get; set; }    
        public string Plaque { get; set; }

        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public int Used { get; set; }


    }
}
