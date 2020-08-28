using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.DesignPatterns.RepositoryPattern.IntRepository
{
    public interface IntRepository<T> where T : BaseEntity
    {
        T GetByID(int id);
        List<T> GetAll();

        List<T> Add(T item);
        List<T> Delete(int item);
        List<T> UpDate(T item);









    }
}
