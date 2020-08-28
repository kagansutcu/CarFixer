import { Injectable } from '@angular/core';
import { Car } from '../car/Car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }
 
  GetAll():Observable<Car[]>
  {
      return this.http.get<Car[]>("https://localhost:44328/api/cars")
  }

  Add(car:Car):Observable<Car[]>
  {
    return this.http.post<Car[]>("https://localhost:44328/api/cars",car);
  }

  Update(car:Car):Observable<Car[]>
  {
    return this.http.put<Car[]>("https://localhost:44328/api/cars",car);
  }

  GetByID(carID:number):Observable<Car>
  {
    return this.http.get<Car>("https://localhost:44328/api/cars/id?id="+carID)
  }

  Delete(CarID:number):Observable<Car[]>
  {
  
    return this.http.delete<Car[]>("https://localhost:44328/api/cars/id?id="+CarID);
  }



}
