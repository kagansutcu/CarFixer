using Project.DAL.Entites.Project.Models;
using Project.Models.Entites;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.DAL.Context
{
  public  class MyContext:DbContext
    {
        public MyContext() : base("MyConnection")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Work_Employee>().HasKey(x => new  { x.EmployeeID, x.WorkOrderID }).Ignore(x => x.ID );
           modelBuilder.Entity<Product_WorkOrder>().HasKey(x => new { x.ProductID, x.WorkOrderID }).Ignore(x =>  x.ID ); 
 
        }
        public DbSet<Brand> Brand { get; set; } 
        public DbSet<Car> Car { get; set; }
        public DbSet<CarType> CarType { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Model_> Model_ { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<WorkOrder> WorkOrder { get; set; }
        public DbSet<Work_Employee> Work_Employee { get; set; }
        public DbSet<Product_WorkOrder> Product_WorkOrder { get; set; }
    }
}
