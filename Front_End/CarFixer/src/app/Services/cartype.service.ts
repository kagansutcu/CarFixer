import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarType } from '../car-type/carType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartypeService {

  constructor(private Http:HttpClient) { }
path = "https://localhost:44328/api/cartypes"
  GetAll():Observable<CarType[]>
  {
  return this.Http.get<CarType[]>(this.path);
  }
  
  Add(carType:CarType):Observable<CarType[]>
  {
   return this.Http.post<CarType[]>(this.path,carType)
  }
  Update(carType:CarType):Observable<CarType[]>
  {
  return this.Http.put<CarType[]>(this.path,carType)
  }

  GetByID(id:number):Observable<CarType[]>
  {
   return this.Http.get<CarType[]>(this.path+"/id?id="+id )
  }

  Delete(id:number):Observable<CarType[]>
  {
    return this.Http.delete<CarType[]>(this.path+"/id?id="+id )
  }
}
