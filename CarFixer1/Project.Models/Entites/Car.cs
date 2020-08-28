using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Entites.Project.Models
{
    public class Car : BaseEntity
    {

        public int Model_ID { get; set; }
        public int CustomerID { get; set; }
        public int CartypeID { get; set; }
        public string Plaque { get; set; } 
        public int? ModelYear { get; set; }
        public string EngineNumber { get; set; }
        public string SasiNo { get; set; }
        public string LicenseOwnder { get; set; }
        public string Color { get; set; }
        public string KeyCode { get; set; }

        public string EngineCapacity { get; set; }
        public string FuelType { get; set; }

        /*  
           public DateTime? RegisteredDate { get; set; }
           public DateTime? TrafficReleaeDate { get; set; } 
           public DateTime? LastRepairDate { get; set; } 
           public DateTime? NextRepairDate { get; set; }
           public DateTime? WarrantyExpirationdate { get; set; }

           public DateTime? SonFenniMuayneBaslangıc { get; set; }
           public DateTime? SonFenniMuayneBitis { get; set; }
           public DateTime? EgzosMuayneBaslangıc { get; set; }
           public DateTime? EgzosMuayneBitis { get; set; }
           public DateTime? TrafikSigortaBaslagıc { get; set; }
           public DateTime? TrafikSigortaBitis { get; set; }
           public DateTime? KaskoBaslangıc { get; set; }*/


        //Relational Properties are started
        public virtual List<WorkOrder> WorkOrders { get; set; }
        public virtual Model_ Model_ { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual CarType CarType { get; set; }
    }
}
