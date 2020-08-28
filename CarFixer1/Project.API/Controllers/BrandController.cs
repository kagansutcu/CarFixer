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
using System.Web.UI.WebControls;

namespace Project.API.Controllers
{
    [RoutePrefix("api/brands")]
    public class BrandController : ApiController
    {
        BrandRep repBrand;
        MapperBrand mapperBrand;
        public BrandController()
        {
            mapperBrand = new MapperBrand();
            repBrand = new BrandRep();
        }

        [HttpPost]
        [Route("")]

        public List<DTOBrand> Add(Brand item)
        {

            return mapperBrand.ToDTOList(repBrand.Add(item));
        }
        [HttpDelete]
        [Route("{id}")]
        public IHttpActionResult Delete(int id)
        {
            return Ok(mapperBrand.ToDTOList(repBrand.Delete(id)));
        }

        [HttpGet]
        [Route("")]
        public List<DTOBrand> GetAll()
        {
            return mapperBrand.ToDTOList(repBrand.GetAll());
        }
        [HttpGet]
        [Route("{id}")]
        public DTOBrand GetByID(int id)
        {
            return mapperBrand.ToDTO(repBrand.GetByID(id));
        }
        [HttpPut]
        [Route("")]
        public List<DTOBrand> Update(Brand item)
        {
            return mapperBrand.ToDTOList(repBrand.UpDate(item));
        }


    }
}
