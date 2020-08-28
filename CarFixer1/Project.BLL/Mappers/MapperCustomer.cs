using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
    public class MapperCustomer
    {

        public DTOCustomer ToDTO(Customer customer)
        {
            DTOCustomer customerDTO = new DTOCustomer();
            customerDTO.Name = customer.Name;
             customerDTO.Authorized = customer.Authorized;
            customerDTO.CariHesapKodu = customer.CariHesapKodu;
            customerDTO.CariType = customer.CariType;
            customerDTO.Address = customer.Address;
            customerDTO.Comment = customer.Comment;
            customerDTO.Email = customer.Email;
            customerDTO.Fax = customer.Fax;
            customerDTO.Phone = customer.Phone;
            customerDTO.Phone2 = customer.Phone2;
            customerDTO.RiskStatus = customer.RiskStatus;
            customerDTO.TaxNumber = customer.TaxNumber;
            customerDTO.TaxRoom = customer.TaxRoom;
            customerDTO.WebSite = customer.WebSite;
            string Tarih = customer.KayıtTarihi.ToString();
            customerDTO.Date = Tarih.Substring(0, 10);
            customerDTO.TimeRegiser = customer.KayıtTarihi.ToString("HH:mm");

          
          



            customerDTO.ID = customer.ID;

            return customerDTO;     
        }
        public  List<DTOCustomer> ToDTOList(List<Customer> customerList)
        {
            List<DTOCustomer> customerDTOList = new List<DTOCustomer>();

            foreach (Customer item in customerList)
            {
                customerDTOList.Add(ToDTO(item));
            }
            
            return customerDTOList;
        }

    }
}
