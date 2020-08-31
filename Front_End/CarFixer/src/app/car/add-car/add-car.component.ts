import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../Car';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/model/Model';
import { ModelService } from 'src/app/Services/model.service';
import { CarService } from 'src/app/Services/car.service';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
brandID:number;
@Input()car:Car = new Car();
modelListInput:Model[];
ModelID:number;
years:Array<Number> = new Array<number>();
@Output() carListOutPut = new EventEmitter<Car[]>();
constructor(private ModelService:ModelService,private ActivatedRouter:ActivatedRoute,private CarService:CarService,private Router:Router) { }
  
ngOnInit(): void 
  {
    console.log(this.car)
    this.Count()
    if(this.car.ID == undefined)
    {
      this.car.CustomerID =  this.ActivatedRouter.snapshot.params.id;
      console.log("Component:Car/Method:ngOnInit/Data From Customer Component/This.car.CustomerID=",this.car.CustomerID)  
    }
    else
    {
      this.brandID = this.car.BrandID;
      this.ModelID = this.car.Model_ID;
      console.log("component:addcar/CanInput=",this.car)
    }
  }
    Count()
  {
    for(var i=new Date().getFullYear() ;i >=  1990; i-- )
    {
      this.years.push(i);
    }
    console.log(this.years)
  }
  brandIDFromBrandComponent(brandID:number)
  {
    if(brandID != undefined)
    { 
      this.car.Model_ID = undefined;  
      console.log("Model ID =",this.ModelID )
      this.brandID = brandID;
      console.log("Component:Car/Method:brandIDFromBrandComponent/Data From Brand Component/this.brandID=",this.brandID)
      this.ModelService.GetByIDBrand(this.brandID).subscribe(data => 
      {
        this.modelListInput = data;
        console.log("Component:Car/Method:brandIDFromBrandComponent/Input To Brand from this.modelservice.GetByIDModel/this.ModelListInpıt=",data)
      });
    }
    else{
      this.brandID = undefined;
      this.modelListInput = undefined;
      console.log("Component:Car/Method:brandIDFromBrandComponent/Data From Brand Component/this.brandID=",this.brandID)
      console.log("Component:Car/Method:brandIDFromBrandComponent/Input To Brand from this.modelservice.GetByIDModel/this.ModelListInpıt=",this.modelListInput)
    }
  }
  ModelIDOutPut(modelID:number)
  {
    this.car.Model_ID = modelID;
    console.log("ModelIDOutOutPut this.car.Model_ID",this.car.Model_ID)
    console.log("Component:Car/Method:ModelIDOutPut,this.car.ModelID =",this.car.Model_ID)
    console.log("Component:Car/Method:ModelIDOutPut,this.car.ModelID=",this.car)
  }
  CartypeIDOutPut(cartypeID:number)
  {
    this.car.CartypeID = cartypeID;
    console.log("Component:Car/Method:CartypeIDOutPut/this.car.CartypeID =",this.car.CartypeID,)
  }
  add()
  {
    console.log("araba",this.car)
    this.CarService.Add(this.car).subscribe(data => {
    this.Router.navigate(["cars"]);
    })
  }
  cancel()
  {
    console.log("cancel")
    this.carListOutPut.emit(undefined)
 }
  update()
  {
    this.CarService.Update(this.car).subscribe(data=> {
      this.carListOutPut.emit(data);
    })
  }
}
