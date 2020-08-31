using Project.BLL.DesignPatterns.RepositoryPattern.Repositories;
using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
   
    public  class MapperWorkOrder
    {
        public MapperWorkOrder()
        {
            
        }

        public DTOWorkOrder ToDTO(WorkOrder workOrder)
        {
          
            DTOWorkOrder dTOWorkOrder = new DTOWorkOrder();
            dTOWorkOrder.AlmaTarihi = workOrder.AlmaTarih;  
            dTOWorkOrder.AraciAlan = workOrder.AraciAlana;
            dTOWorkOrder.AraciBirakan = workOrder.AraciBirakan;
            dTOWorkOrder.BakimaGelecegiTarih = workOrder.BakimaGelecegiTarih;
            dTOWorkOrder.BakimaGelecegiKM = workOrder.BakimeGelecigiKM;
            dTOWorkOrder.BirakimTarihi = workOrder.BirakimTarihi; ;
            dTOWorkOrder.CarID = workOrder.CarID;
            dTOWorkOrder.CustomerName = workOrder.Car.Customer.Name ;
            dTOWorkOrder.CustomerWant = workOrder.CustomerWant;
            dTOWorkOrder.EmployeeComment = workOrder.EmployeeComment;
            dTOWorkOrder.insuranceCompany = workOrder.insuranceCompany;
            dTOWorkOrder.Km = workOrder.Km;
            dTOWorkOrder.Phone = workOrder.Phone;
            dTOWorkOrder.Price = workOrder.Price;
            dTOWorkOrder.Plaque = workOrder.Car.Plaque;
            foreach  (Product_WorkOrder  product_WorkOrder in workOrder.Product_WorkOrder)
            {
                 dTOWorkOrder.ProductName = product_WorkOrder.Product.Name;
                dTOWorkOrder.Used = product_WorkOrder.Used;
                dTOWorkOrder.ProductCode = product_WorkOrder.Product.Code;

            }
            return dTOWorkOrder;
        }


        public List<DTOWorkOrder> ToDToList(List<WorkOrder> listWorkOrder)
        {
            List<DTOWorkOrder> listDToWorkOrder = new List<DTOWorkOrder>();
      

            foreach (WorkOrder item in listWorkOrder)
            {
                listDToWorkOrder.Add(ToDTO(item));
            }
            return listDToWorkOrder;
        }
    }
}
