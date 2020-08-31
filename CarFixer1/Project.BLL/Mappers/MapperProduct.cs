using Project.BLL.Dto;
using Project.DAL.Entites.Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Project.BLL.Mappers
{
   public class MapperProduct
   {
        public DTOProduct ToDTO(Product product)
        {
            DTOProduct dTOProduct = new DTOProduct();
            dTOProduct.ID = product.ID;
            dTOProduct.Name = product.Name;
            dTOProduct.SellingPrice = product.SellingPrice;
            dTOProduct.Stock = product.Stock;
            dTOProduct.Tax = product.Tax;
            dTOProduct.BuyingPrice = product.BuyingPrice;
            dTOProduct.Code = product.Code;
            dTOProduct.Barcode = product.Barcode;
            return dTOProduct;
        }

        public List<DTOProduct> ListDTOProduct(List<Product> listProduct)
        {
            List<DTOProduct> listDTOProduct = new List<DTOProduct>();
            foreach (Product product in listProduct)
            {
                listDTOProduct.Add(ToDTO(product));
            }
            return listDTOProduct;
        }

   }
}
