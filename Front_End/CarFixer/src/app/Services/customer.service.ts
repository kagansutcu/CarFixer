import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private Http:HttpClient) { }
 
  GetAll():Observable<Customer[]>
  {
    return this.Http.get<Customer[]>("https://localhost:44328/api/customers");
  }
  Add(customer:Customer):Observable<Customer[]>
  {
      return this.Http.post<Customer[]>("https://localhost:44328/api/customers",customer)
  }
  
  Update(customer:Customer):Observable<Customer[]>
  {
    return this.Http.put<Customer[]>("https://localhost:44328/api/customers",customer);
  }

  GetByID(customerID:number):Observable<Customer>
  {
    return this.Http.get<Customer>("https://localhost:44328/api/customers/id?id="+customerID)
  }

  Delete(customerID:number):Observable<Customer[]>
  {
  
    return this.Http.delete<Customer[]>("https://localhost:44328/api/customers/id?id="+customerID);
  }
}
