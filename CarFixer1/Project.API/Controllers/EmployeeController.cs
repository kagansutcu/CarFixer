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
{[RoutePrefix("api/employees")]
    public class EmployeeController : ApiController
    {
        MapperEmployee mapperEmployee;
        EmployeeRep repEmployee;
        public EmployeeController()
        {
            mapperEmployee = new MapperEmployee();
            repEmployee = new EmployeeRep();
        }

        [HttpPost]
        [Route("")]

        public List<DTOEmployee> Add(Employee item)
        {

            return mapperEmployee.ToListDTO(repEmployee.Add(item));
        }
        [HttpDelete]
        [Route("{id}")]
        public List<DTOEmployee> Delete(int id)
        {
            return mapperEmployee.ToListDTO(repEmployee.Delete(id));
        }

        [HttpGet]
        [Route("")]
        public List<DTOEmployee> GetAll()
        {
            return mapperEmployee.ToListDTO(repEmployee.GetAll());
        }
        [HttpGet]
        [Route("{id}")]
        public DTOEmployee GetByID(int id)
        {
            return mapperEmployee.ToDTO(repEmployee.GetByID(id)); 
        }
        [HttpPut]
        [Route("")]
        public List<DTOEmployee> Update(Employee item)
        {
            return mapperEmployee.ToListDTO(repEmployee.UpDate(item));
        }

    }
}
