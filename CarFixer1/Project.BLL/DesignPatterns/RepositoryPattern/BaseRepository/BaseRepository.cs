using Project.BLL.DesignPatterns.RepositoryPattern.IntRepository;
using Project.DAL.Context;
using Project.DAL.DesignPatterns.SingeltonPattern;
using Project.DAL.Entites.Project.Models;
using System.Collections.Generic;
using System.Linq;


namespace Project.BLL.DesignPatterns.RepositoryPattern.BaseRepository
{
    public class BaseRepository<T> : IntRepository<T> where T : BaseEntity
    {
        MyContext dataBase;
        public BaseRepository()
        {
            dataBase = Singelton.DBTool;
            
        }

        public List<T> Add(T item)
        {

            dataBase.Set<T>().Add(item);
            dataBase.SaveChanges();
            return dataBase.Set<T>().ToList();
        }

        public List<T> Delete(int id)
        {


            dataBase.Set<T>().Remove(dataBase.Set<T>().Find(id));
            dataBase.SaveChanges();
            return dataBase.Set<T>().ToList();

        }

        public List<T> GetAll()
        {
            return dataBase.Set<T>().ToList();
        }

        public T GetByID(int id)
        {
            return dataBase.Set<T>().Find(id);
        }

        public List<T> UpDate(T item)
        {       
            dataBase.Entry(dataBase.Set<T>().Find(item.ID)).CurrentValues.SetValues(item);
            dataBase.SaveChanges();
            return dataBase.Set<T>().ToList();
        }


    }
}
