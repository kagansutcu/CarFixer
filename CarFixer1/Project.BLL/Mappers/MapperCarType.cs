using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
  public  class MapperCarType
    {   
        public DTOCarType ToDTO (CarType carType)
        {
            DTOCarType dTOCarType = new DTOCarType();
            dTOCarType.Name = carType.Name;
            dTOCarType.ID = carType.ID;
            return dTOCarType;

        } 

        public List<DTOCarType> ToDTOList (List<CarType> listCartype)
        {
            List<DTOCarType> listDTOCarType = new List<DTOCarType>();
            foreach (CarType item in listCartype)
            {
                listDTOCarType.Add(ToDTO(item));
            }
            return listDTOCarType;
        }
         
    }
}
