import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private Http:HttpClient) { }

  GetAll():Observable<Brand[]>
  {
  return  this.Http.get<Brand[]>("https://localhost:44328/api/brands")
  }
  
  Add(brand:Brand):Observable<Brand[]>
  {
      return this.Http.post<Brand[]>("https://localhost:44328/api/brands",brand)
  }

  Update(brand:Brand):Observable<Brand[]>
  {
  return  this.Http.put<Brand[]>("https://localhost:44328/api/brands",brand)
  }

  GetByID(BrandID:number):Observable<Brand>
  {
    return this.Http.get<Brand>("https://localhost:44328/api/brands/id?id="+BrandID)
  }

  Delete(BrandID:number):Observable<Brand[]>
  {
    return this.Http.delete<Brand[]>("https://localhost:44328/api/brands/id?id="+BrandID)
  }
}
