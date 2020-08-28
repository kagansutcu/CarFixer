using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
   public class MapperModel
    {
        public DTOModel ToDTO  (Model_ model)
        {
            DTOModel dTOModel = new DTOModel();
            dTOModel.Name = model.Name;
            dTOModel.BrandID = model.BrandID;
            dTOModel.ID = model.ID;
            return dTOModel;
        }

        public List<DTOModel> ToDToList(List<Model_> listModel)
        {
            List<DTOModel> listDTOModel = new List<DTOModel>();

            foreach (Model_ item in listModel)
            {
                listDTOModel.Add(ToDTO(item));
            }
            return listDTOModel;
        }


    }
}
