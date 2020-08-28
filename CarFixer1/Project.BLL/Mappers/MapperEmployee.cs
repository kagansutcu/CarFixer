using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
    public   class MapperEmployee
    {
        public DTOEmployee ToDTO(Employee employee)
        {
            DTOEmployee dTOEmployee = new DTOEmployee();
            dTOEmployee.ID = employee.ID;
            dTOEmployee.Name = employee.Name;
            dTOEmployee.PhoneNumber = employee.PhoneNumber;
            return dTOEmployee;
        }

        public List<DTOEmployee> ToListDTO(List<Employee> listEmployee)
        {
            List<DTOEmployee> listDTOEmployee = new List<DTOEmployee>();
            foreach(Employee employee in listEmployee)
            {
                 listDTOEmployee.Add(ToDTO(employee));
            }
            return listDTOEmployee;
        }

    }
}
