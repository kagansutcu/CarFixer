using Microsoft.AspNetCore.Builder;
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
    [RoutePrefix("api/models")]

    public class ModelController : ApiController
    {
        ModelRep repModel;
        MapperModel mapperModel;
        public ModelController()
        {
            mapperModel = new MapperModel();
            repModel = new ModelRep();
        }
        [HttpPost]
        [Route("")]

        public List<DTOModel> Add(Model_ item)
        {
            List<DTOModel> listDTOModel = new List<DTOModel>();
            List <DTOModel> listModel = mapperModel.ToDToList(repModel.Add(item));
            foreach (DTOModel model in listModel)
            {
                if(item.BrandID == model.BrandID)
                {
                    listDTOModel.Add(model);
                }
          
            }
            return listDTOModel;
        }
        [HttpDelete]
        [Route("{id}")]
        public List<DTOModel> Delete(int id)
        {
            List<DTOModel> listDTOModel = new List<DTOModel>();
            int brandID = repModel.GetByID(id).BrandID;   
           List<DTOModel>  listModel = mapperModel.ToDToList(repModel.Delete(id));
            foreach (DTOModel item in listModel)
            {

                if(item.BrandID == brandID)
                {
                    listDTOModel.Add(item);
                }
            }
            return listDTOModel;


        }

        [HttpGet]
        [Route("")]
        public IHttpActionResult GetAll()
        {
            return Ok( mapperModel.ToDToList(repModel.GetAll()));

        }
        [HttpGet]
        [Route("{id}")]
        public DTOModel GetByID(int id)
        {                                                        
            return mapperModel.ToDTO(repModel.GetByID(id));
        }
        [HttpPut]
        [Route("")]
        public List<DTOModel> Update(Model_ item)
        {
            List<DTOModel> listDTOModel = new List<DTOModel>();
            List<DTOModel> listModel = mapperModel.ToDToList(repModel.UpDate(item));
            foreach (DTOModel model in listModel)
            {
                if (item.BrandID == model.BrandID)
                {
                    listDTOModel.Add(model);
                }

            }
            return listDTOModel;
        }
        [HttpGet]
        [Route("brandid/{id}")]
        public List<DTOModel> ByBrandID(int id)
        {
          List<DTOModel> ss = mapperModel.ToDToList(repModel.GetByBrandID(id));
            return ss;
        }
    }
}
