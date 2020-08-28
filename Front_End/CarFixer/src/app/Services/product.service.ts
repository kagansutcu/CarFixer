import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http:HttpClient) { }

  path = "https://localhost:44328/api/products"
  GetAll():Observable<Product[]>
  {
      return this.Http.get<Product[]>(this.path)
  }

  Add(product:Product):Observable<Product[]>
  {
    return this.Http.post<Product[]>(this.path,product);
  }

  Update(product:Product):Observable<Product[]>
  {
    return  this.Http.put<Product[]>(this.path,product)
  }
  GetByID(id:number):Observable<Product>
  {
    return  this.Http.get<Product>(this.path+"/id?id="+id)
  }
  
}
