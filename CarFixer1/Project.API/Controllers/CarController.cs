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
    [RoutePrefix("api/cars")]
    public class CarController : ApiController
    {
        MapperCar mapperCar;
        CarRep repCar;

        public CarController()
        {
            mapperCar = new MapperCar();
            repCar = new CarRep();
        }

        [HttpPost]
        [Route("")]
        public List<DTOCar> Add(Car car)
        {
            return mapperCar.ToDTOList(repCar.Add(car));
        }

        [HttpGet]
        [Route("")]
        public List<DTOCar> GettAll()
        {
            return mapperCar.ToDTOList(repCar.GetAll());
        }

        [HttpPut]
        [Route("")]
        public List<DTOCar> Update(Car car)
        {
            return mapperCar.ToDTOList(repCar.UpDate(car)) ;
        }

        [HttpGet]
        [Route("id")]
        public DTOCar GetByID(int id)
        {
            return mapperCar.ToDTO(repCar.GetByID(id));
        }

        [HttpDelete]
        [Route("{id}")]
        public List<DTOCar> Delete(int id)
        {
           return mapperCar.ToDTOList(repCar.Delete(id));
        }

    }
}
