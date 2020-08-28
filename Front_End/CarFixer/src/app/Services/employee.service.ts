import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  path ="https://localhost:44328/api/employees";

  constructor(private Http:HttpClient) { }
  
  GetAll():Observable<Employee[]>
  {
    return this.Http.get<Employee[]>(this.path);
  }
  Add(employee:Employee):Observable<Employee[]>
  {
      return this.Http.post<Employee[]>(this.path,employee)
  }
  
  Update(employee:Employee):Observable<Employee[]>
  {
    return this.Http.put<Employee[]>(this.path,employee);
  }

  GetByID(EmployeeID:number):Observable<Employee>
  {
    return this.Http.get<Employee>(this.path+"/id?id="+EmployeeID)
  }

  Delete(employeeID:number):Observable<Employee[]>
  {
  
    return this.Http.delete<Employee[]>(this.path+employeeID);
  }
}
