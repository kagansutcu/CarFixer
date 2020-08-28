using Project.BLL.DesignPatterns.RepositoryPattern.Repositories;
using Project.BLL.Dto;
using Project.BLL.Mappers;
using Project.DAL.Entites.Project.Models;
using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project.API.Controllers
{
    [RoutePrefix("api/workorders")]
    public class WorkOrderController : ApiController
    {
        List<Product> listProduct;
        WorkOrderRep repWorkOrder;
        MapperWorkOrder MapperWorkOrder;

            public WorkOrderController()
        {
            ProductRep productRep = new ProductRep();
            listProduct = productRep.GetAll();
            MapperWorkOrder = new MapperWorkOrder();
            repWorkOrder = new WorkOrderRep();
        }
        [HttpPost]

        [Route("")]
        public List<DTOWorkOrder> Add(WorkOrder workOrder)
        {


            foreach (Product_WorkOrder item in workOrder.Product_WorkOrder)
            {
                foreach (Product product in listProduct)
                {
                    if(product.ID == item.ProductID)
                    {
                        product.Stock = product.Stock - item.Used;
                    }
                }
            }
            return MapperWorkOrder.ToDToList(repWorkOrder.Add(workOrder));
        }

        [HttpGet]
        [Route("active")]
        public List<DTOWorkOrder> ActiveGettAll()
        {
            List<DTOWorkOrder> activeWorkorder = new List<DTOWorkOrder>();
            foreach (DTOWorkOrder dtoWorkOrder  in MapperWorkOrder.ToDToList(repWorkOrder.GetAll()))
            {
               if(dtoWorkOrder.AlmaTarihi == null)
                {
                    activeWorkorder.Add(dtoWorkOrder);
                }
           
               
            }
          return activeWorkorder;
        }

        [HttpPut]
        [Route("")]
        public List<DTOWorkOrder> Update(WorkOrder workOrder)
        {
            return  MapperWorkOrder.ToDToList(repWorkOrder.UpDate(workOrder));
        }

        [HttpGet]
        [Route("id")]
        public DTOWorkOrder GetByID(int id)
        {
            return MapperWorkOrder.ToDTO( repWorkOrder.GetByID(id));
        }

        [HttpDelete]
        [Route("{id}")]
        public List<DTOWorkOrder> Delete(int id)
        {
            return MapperWorkOrder.ToDToList(repWorkOrder.Delete(id));
        }

    }
}
