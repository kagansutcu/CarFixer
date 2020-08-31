import { Component, OnInit } from '@angular/core';
import { Car } from './Car';
import { CarService } from '../Services/car.service';
import { AddCarComponent } from './add-car/add-car.component';
import { WorkOrder } from '../work-order/workOrder';
import { WorkorderService } from '../Services/workorder.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers:[AddCarComponent]
})
export class CarComponent implements OnInit {
carList:Car[];
workOrderList:WorkOrder[];
showCarAddCar=false;
showCar=true;
car:Car = new Car();
stop = true;
carLenght:number;
plaque:string;
constructor(private CarService:CarService,private WorkOrderService:WorkorderService) { }

  ngOnInit(): void{
    this.CarService.GetAll().subscribe(data => {
      this.carList = data;
      console.log("component:Car/ListCar=",this.carList)
      this.stop = false;
      this.WorkOrderService.GetAll().subscribe(data => {
        this.workOrderList = data;
      })
      
    })
  }

  update(car:Car)
  {
    console.log("Component:Car/this.Car",car)
    this.car = car;
    this.showCar = false;
    this.showCarAddCar = true;
  }

  OutPutComeFromAddCar(carList:Car[])
  {
    this.showCar = true;
    this.showCarAddCar = false;
    if(carList != undefined)
    {
      this.carList =carList;
      console.log("component:Car /CarList=",this.carList)
    }
  }

  deleteCar(car:Car)
  {
    if(confirm("'"+car.Plaque +"'" +" Plakalı Aracı Silmek İçin Emin Misiniz?"))
    {
      for(let workOrder of this.workOrderList)
      {
        if(workOrder.CarID == car.ID)
        {
          alert("'"+car.Plaque +"'" +"Plakalı Aracın İş Akidleri  Mevcuttur.")
              return;
        } 
      }

      this.CarService.Delete(car.ID).subscribe(data => {
        this.carList = data;
      });
    }
  }
}
