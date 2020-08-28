using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
  public  class Customer:BaseEntity
    {
        public Customer()
        {
            KayıtTarihi = DateTime.Now;
        }
        public string Name { get; set; }
        public string CariType { get; set; }
        public string  CariHesapKodu { get; set; }
        public DateTime KayıtTarihi { get; set; }
        public string Authorized { get; set; }
        public string TaxNumber { get; set; }
        public string TaxRoom { get; set; }
        public string Phone { get; set; }
        public string Phone2 { get; set; }
        public string RiskStatus { get; set; }
        public string Email { get; set; }
        public string WebSite { get; set; }
        public string Fax { get; set; }
        public string Address { get; set; }
        public string Comment { get; set; }

        //Relational Properties are begin
        public virtual List<Car> Cars  { get; set; }

        /*         public DateTime? VadeGunu { get; set; }
         */
    }
}
