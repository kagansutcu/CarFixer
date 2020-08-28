import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from '../model/Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private Http:HttpClient) { }
  GetAll():Observable<Model[]>
  {
      return this.Http.get<Model[]>("https://localhost:44328/api/Models")
  }

  Add(model:Model):Observable<Model[]>
  {
    return this.Http.post<Model[]>("https://localhost:44328/api/models",model);
  }

  Update(model:Model):Observable<Model[]>
  {
    return  this.Http.put<Model[]>("https://localhost:44328/api/models",model)
  }

  GetByID(modelID:number):Observable<Model>
  {
    return this.Http.get<Model>("https://localhost:44328/api/models/id?id="+modelID)

  }

 

  GetByIDBrand(brandID:number):Observable<Model[]>
  {
     return this.Http.get<Model[]>("https://localhost:44328/api/models/brandid/id?id="+brandID);
  }

  Delete(modelID:number):Observable<Model[]>
  {
  
  return  this.Http.delete<Model[]>("https://localhost:44328/api/models/id?id="+modelID);
 
  }

}
