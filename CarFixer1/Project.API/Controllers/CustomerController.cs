
using Microsoft.AspNetCore.Mvc.Internal;
using Microsoft.Extensions.DependencyModel;
using Project.BLL.DesignPatterns.RepositoryPattern.Repositories;
using Project.BLL.Dto;
using Project.BLL.Mappers;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Project.API.Controllers
{
    [RoutePrefix("api/customers")]

    public class CustomerController : ApiController
    {
        MapperCustomer mapperCustomer;
        CustomerRep repCustomer;
        public CustomerController()
        {
            repCustomer = new CustomerRep();
            mapperCustomer = new MapperCustomer();
        }
        [HttpPost]
        [Route("")]
        public List<DTOCustomer> Add(Customer item)
        {

            return mapperCustomer.ToDTOList(repCustomer.Add(item));
        }
        [HttpDelete]
        [Route("{id}")]
        public List<DTOCustomer> Delete(int id)
        {
            return mapperCustomer.ToDTOList(repCustomer.Delete(id));
        }
        [HttpGet]
        [Route("")]
        public List<DTOCustomer> GetAll()
        {
            List<DTOCustomer> dTOCustomers = mapperCustomer.ToDTOList(repCustomer.GetAll());
            return dTOCustomers;
        }
        [HttpGet]
        [Route("{id}")]
        public DTOCustomer GetByID(int id)
        {
            return mapperCustomer.ToDTO(repCustomer.GetByID(id));
        }
        [HttpPut]
        [Route("")]
        public List<DTOCustomer> Update(Customer item)
        {
            return mapperCustomer.ToDTOList(repCustomer.UpDate(item));
        }

    }
}
