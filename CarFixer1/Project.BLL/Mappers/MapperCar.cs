using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using Project.DAL.DesignPatterns.SingeltonPattern;
using Project.DAL.Context;

namespace Project.BLL.Mappers
{
  public  class MapperCar
    {


        public DTOCar ToDTO(Car car)
        {
            
           
            DTOCar CarDTO = new DTOCar();
            CarDTO.Plaque = car.Plaque;
            CarDTO.CartypeID = car.CartypeID;
            CarDTO.CustomerID = car.CustomerID;
            CarDTO.ID = car.ID;
            CarDTO.Model_ID = car.Model_ID;
            CarDTO.CustomerName = car.Customer.Name;
            CarDTO.PhoneNumber = car.Customer.Phone;
            CarDTO.PhoneNumber2 = car.Customer.Phone2;
            CarDTO.ModelYear = car.ModelYear;
            CarDTO.Color = car.Color;
            CarDTO.EngineCapacity = car.EngineCapacity;
            CarDTO.EngineNumber = car.EngineNumber;
            CarDTO.FuelType = car.FuelType;
            CarDTO.KeyCode = car.KeyCode;
            CarDTO.LicenseOwnder = car.LicenseOwnder;
            CarDTO.SasiNo = car.SasiNo;
            CarDTO.BrandID = car.Model_.BrandID;
            CarDTO.ModelName = car.Model_.Name;
            CarDTO.BrandName = car.Model_.Brand.Name;
            CarDTO.CarTypeName = car.CarType.Name;
            return CarDTO;
        }


        public List<DTOCar> ToDTOList(List<Car> listCar)
        {
            List<DTOCar> ListDTOCar = new List<DTOCar>();
            foreach (Car item in listCar)
            {
                ListDTOCar.Add(ToDTO(item));
            }
            return ListDTOCar;
        }

    }
}
