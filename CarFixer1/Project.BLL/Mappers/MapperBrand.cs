using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
  public   class MapperBrand
    {
        public  DTOBrand ToDTO(Brand brand)
        {
            DTOBrand dTOBrand = new DTOBrand();
            dTOBrand.Name = brand.Name;
            dTOBrand.ID = brand.ID;
            return dTOBrand;
        }


        public List<DTOBrand> ToDTOList (List<Brand> listBrand)
        {
            List<DTOBrand> listDTOBrand = new List<DTOBrand>();
            foreach (Brand item in listBrand )
            {
                listDTOBrand.Add(ToDTO(item));    
            }
            return listDTOBrand;

        }
    }
}
