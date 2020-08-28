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
    [RoutePrefix("api/cartypes")]

    public class CarTypeController : ApiController
    {
        MapperCarType mapperCarType;
        CarTypeRep repCarType;
        public CarTypeController()
        {
            mapperCarType = new MapperCarType();
            repCarType = new CarTypeRep();
        }

        [HttpPost]
        [Route("")]

        public List<DTOCarType> Add(CarType item)
        {
            return mapperCarType.ToDTOList(repCarType.Add(item));
        }

        [HttpDelete]
        [Route("{id}")]
        public List<DTOCarType> Delete(int id)
        {
            return mapperCarType.ToDTOList(repCarType.Delete(id));
        }

        [HttpGet]
        [Route("")]
        public List<DTOCarType> GetAll()
        {
            return mapperCarType.ToDTOList(repCarType.GetAll());
        }
        [HttpGet]
        [Route("{id}")]
        public DTOCarType GetByID(int id)
        {
            return mapperCarType.ToDTO(repCarType.GetByID(id));
        }
        [HttpPut]
        [Route("")]
        public List<DTOCarType> Update(CarType item)
        {
            return mapperCarType.ToDTOList (repCarType.UpDate(item));

        }
    }
}
