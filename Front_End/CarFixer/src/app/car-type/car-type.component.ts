import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { CarType } from './carType';
import { CartypeService } from '../Services/cartype.service';


@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.component.html',
  styleUrls: ['./car-type.component.scss']
})
export class CarTypeComponent implements OnInit {
@Output() CartypeIDOutPut = new EventEmitter<number>()
carType:CarType = new CarType();
carTypeList:CarType[];
carTypeInput:CarType = new CarType();
showCarType=true;
showAddCarType=false;
@Input() CarTypeIDInput:number;
  constructor(private CarTypeService:CartypeService) { }

  ngOnInit(): void 
  {
    this.CarTypeService.GetAll().subscribe( data => {
      this.carTypeList =data;
    })
    if(this.CarTypeIDInput != undefined)
    {
      this.carType.ID =  this.CarTypeIDInput;
      console.log("component:Cartype/Input From Car/this.CartypeIDInput=",this.CarTypeIDInput)
    }
  }

  catchID()
  {
    this.CartypeIDOutPut.emit(this.carType.ID)
  }
  add()
  {
    this.CartypeIDOutPut.emit(undefined)
    this.showCarType=false;
    this.showAddCarType=true;
  }

  delete()
  {
    for(let carType of this.carTypeList)
    {
      if(carType.ID == this.carType.ID)
      {
        this.carType.Name = carType.Name;

      }
    }
    console.log("component:CarType/Method:Delete/This.CarType.ID",this.carType.ID)
    if(confirm("'"+this.carType.Name+"'"+" Tipini Silmek İstiyor Musunuz?" ))
    {
        this.CarTypeService.Delete(this.carType.ID).subscribe(data => 
      {
        this.carType.ID = undefined
        this.carType.Name = undefined
        this.carTypeList = data;
        this.CartypeIDOutPut.emit(undefined)
      });
   }
   else 
   {
    this.carType.ID = undefined
    this.carType.Name = undefined
   }
  
  }
  update()
  {
    for(let carType of this.carTypeList)
    {
      if(carType.ID == this.carType.ID)
      {
        this.carType.Name = carType.Name;
        this.carTypeInput.Name = this.carType.Name;
        this.carTypeInput.ID = this.carType.ID;
        this.showCarType=false;
       this.showAddCarType=true;
       this.CartypeIDOutPut.emit(undefined)
      }
    }
  }
  outPutComeFromAddCarType(carTypeList:CarType[])
  {
    console.log("Component:Cartype/Out Put From AddCartpye=",carTypeList)
    if(carTypeList != undefined)
    {
      this.carType.ID = undefined;
      this.carType.Name = undefined;
      this.carTypeInput.ID = undefined;
      this.carTypeInput.Name = undefined;
      this.carTypeList = carTypeList;
      this.showCarType=true;
      this.showAddCarType=false;
    }
    else
    {
      this.carTypeInput.ID = undefined;
      this.carTypeInput.Name = undefined;
      this.carType.ID = undefined;
      this.carType.Name = undefined;
      this.showCarType=true;
      this.showAddCarType=false;
    }
  }
}
