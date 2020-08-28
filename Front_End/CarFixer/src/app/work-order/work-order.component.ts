import { Component, OnInit } from '@angular/core';
import { WorkorderService } from '../Services/workorder.service';
import { WorkOrder } from './workOrder';
import { Car } from '../car/Car';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {

  constructor(private WorkOrderServive:WorkorderService,private CarService:CarService) { }
arrayWorkOrder:Array<WorkOrder> = new Array<WorkOrder>(); 
arrayCar:Array<Car> = new Array<Car>();
  ngOnInit(  ): void {
    this.WorkOrderServive.GetAll().subscribe(data => {
    this.arrayWorkOrder = data;
      console.log(data);
    })
  }

}
