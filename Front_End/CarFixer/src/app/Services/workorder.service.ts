import { Injectable } from '@angular/core';
import { WorkOrder, Work_Employee } from '../work-order/workOrder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkorderService {

  path = "https://localhost:44328/api/workorders"
  constructor(private Http:HttpClient) { }
  GetAll():Observable<WorkOrder[]>
  {
      return this.Http.get<WorkOrder[]>(this.path+"/active")
  }

  Add(workOrder:WorkOrder):Observable<WorkOrder[]>
  {
    return this.Http.post<WorkOrder[]>(this.path,workOrder);
  }

  Update(workOrdeR:WorkOrder):Observable<WorkOrder[]> 
  {
    return  this.Http.put<WorkOrder[]>(this.path,workOrdeR)
  }

  GetByID(workOrder:WorkOrder):Observable<WorkOrder>
  {
    return this.Http.get<WorkOrder>(this.path+"/id?id="+workOrder)

  }

}
