using Project.BLL.DesignPatterns.RepositoryPattern.BaseRepository;
using Project.DAL.Entites;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.DesignPatterns.RepositoryPattern.Repositories
{
   public class ModelRep:BaseRepository<Model_>
    {
        public List<Model_> GetByBrandID(int BrandID)
        {
            List<Model_> listModel = new List<Model_>();

            foreach (Model_ item in GetAll())
            {
                if(item.BrandID == BrandID)
                {
                    listModel.Add(item);
                }
               
            }
            return listModel;
        }

      
    }
}
