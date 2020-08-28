using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Dto
{
   public class DTOCar:DTOBase
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
        public string PhoneNumber { get; set; }
        public string PhoneNumber2 { get; set; }
        public string CustomerName { get; set; }
        public int BrandID { get; set; }
        public string ModelName { get; set; }
        public string BrandName { get; set; }
        public string CarTypeName { get; set; }


    }
}
