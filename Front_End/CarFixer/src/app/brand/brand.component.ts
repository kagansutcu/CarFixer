import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { BrandService } from '../Services/brand.service';
import { Brand } from './brand';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit 
{
showBrand=true;
showAddBrand=false;
brand:Brand = new Brand();
brandList:Brand[];
@Output() BrandIDOutPut = new EventEmitter<number>();
@Input() brandIDInput:number;
  
  constructor(private BrandService:BrandService) { }
 
  ngOnInit(): void 
  {
    this.BrandService.GetAll().subscribe(data => {
      this.brandList = data;
      console.log("Component:Brand/Method:NgOnInit/Data is Coming From this.BrandService.GetAll/this.brandList =",data)
    })
    if(this.brandIDInput != undefined)
    {
      this.brand.ID = this.brandIDInput;
      this.BrandIDOutPut.emit(this.brandIDInput); 
    }
  }
  catchBrandID()
  {
    console.log("Component:Brand/Method:byChangeDropDownList/this.brand.ID And this.bradnIDOutPUt  =",this.brand.ID)  
    this.BrandIDOutPut.emit(this.brand.ID); 
  }
  UpdatebyButtonUpdate()
  {
    for(let brand of this.brandList )
    {
      if(this.brand.ID == brand.ID)
      {
        this.brand.Name = brand.Name;
        console.log("Component:Brand/method:Update/this.brand=",this.brand)
        this.showBrand=false;
        this.showAddBrand=true;
        this.BrandIDOutPut.emit(undefined);
      }
    }
  }
  add()
  {  
    this.brand.ID = 0;
    console.log("Component:Brand/method:Add/This.Brand.ID =",this.brand.ID )
    this.showBrand=false;
    this.showAddBrand=true;
    this.BrandIDOutPut.emit(undefined);
  }
  delete()
  {
    for(let brand of this.brandList )
    {
      if(this.brand.ID == brand.ID)
      {
        this.brand.Name = brand.Name;
        this.BrandIDOutPut.emit(undefined);
      }
    }
    if(confirm("'"+this.brand.Name+"'" +" Markasını Silmek İstiyor Musunuz?"))  
      this.BrandService.Delete(this.brand.ID).subscribe(data => 
      {
        this.brandList = data;
        this.brand.ID = undefined;
        this.brand.Name = undefined;
        console.log("Component:Brand/Method:Delete/this.brandlist=",this.brandList)   
        console.log("Component:Brand/Method:Delete/this.brand=",this.brand)   
      });
    else
    {
      this.brand.ID = undefined;
      this.brand.Name =undefined;
      console.log("Component:Brand/Method:Delete/this.brand=",this.brand) 
    }
  }
  brandListOutPutFromAddCar(brandList:Brand[])
  {
    if(brandList != undefined)
    {
      this.brandList = brandList;
      this.brand.ID = undefined;
      this.brand.Name = undefined;
      console.log("Component:Brand/Method:brandListOutPutFromAddCar/this.brandList=",this.brandList)
      console.log("Component:Brand/Method:brandListOutPutFromAddCar/this.brand=",this.brand)
      this.showBrand=true;
      this.showAddBrand=false;
    }
    else
    {
      this.brand.ID = undefined;
      this.brand.Name = undefined;
      console.log("Component:Brand/Method:brandListOutPutFromAddCar/this.brandList=",this.brandList)
      console.log("Component:Brand/Method:brandListOutPutFromAddCar/this.brand=",this.brand)
      this.showBrand=true;
      this.showAddBrand=false;
    }
  }
}
