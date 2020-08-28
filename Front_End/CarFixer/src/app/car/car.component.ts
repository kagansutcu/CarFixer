import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from './Car';
import { CarService } from '../Services/car.service';
import { AddCarComponent } from './add-car/add-car.component';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers:[AddCarComponent]
})
export class CarComponent implements OnInit {
carList:Car[];
showCarAddCar=false;
showCar=true;
car:Car = new Car();
stop = true;
carLenght:number;
  constructor(private CarService:CarService) { }

  ngOnInit(): void{
    this.CarService.GetAll().subscribe(data => {
      this.carList = data;
      console.log("component:Car/ListCar=",this.carList)
      this.carLenght = this.carList.length;
      this.stop = false;
    })
  }

  update(car:Car)
  {
    console.log("Component:Car/this.Car",car)
    this.car = car;
    this.showCar = false;
    this.showCarAddCar = true;
  }

  WorkOrder()
  {

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
}
