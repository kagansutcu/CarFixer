using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Dto
{
   public class DTOCustomer:DTOBase
    {

        public string Name { get; set; }
        public string CariType { get; set; }
        public string CariHesapKodu { get; set; }

        public string Date { get; set; }
        public string TimeRegiser { get; set; }
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
    }
}
