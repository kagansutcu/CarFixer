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

namespace Project.API.Controllers
{
    [RoutePrefix("api/products")]
    public class ProductController : ApiController
    {
        MapperProduct mapperProduct;
        ProductRep repProduct;
        public ProductController()
        {
            mapperProduct = new MapperProduct();
            repProduct = new ProductRep();
        }
        [HttpPost]
        [Route("")]
        public List<DTOProduct> Add(Product item)
        {
            return mapperProduct.ListDTOProduct(repProduct.Add(item));
                
        }
        [HttpGet]
        [Route("")]
        public List<DTOProduct> GettAll()
        {
            return mapperProduct.ListDTOProduct(repProduct.GetAll());

        }

        [HttpPut]
        [Route("")]
        public List<DTOProduct> Update(Product item)
        {   
            return mapperProduct.ListDTOProduct(repProduct.UpDate(item));

        }
        [HttpGet]
        [Route("{id}")]
        public DTOProduct GetByID(int id)
        {
         
            return mapperProduct.ToDTO(repProduct.GetByID(id));
        }
    }
}
