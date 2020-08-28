import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Brand } from '../brand';
import { BrandService } from 'src/app/Services/brand.service';



@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit 
{
@Output() brandListOutPut= new EventEmitter<Brand[]>();
@Input() BrandInput:Brand = new Brand();


brand:Brand = new Brand();


  constructor(private BrandService:BrandService) { }


  ngOnInit(): void 
  {
    if(this.BrandInput.Name != undefined)
    {
      this.brand = this.BrandInput;
      console.log("component:add-Brand/Method:ngOnInit/Input/this.brand = ",this.brand)
    }
  }

  add()
  {
    
    this.BrandService.Add(this.brand).subscribe(data => 
    {
      console.log("component:Add-brand/Method:add/Gelen Veri:this.BrandService.add/this.brandListOutput =",data)
      this.brandListOutPut.emit(data)
    });
  }

  cancel()
  {
      this.brandListOutPut.emit(undefined)
      console.log("component:Add-brand/Method:cancel/this.brand=",this.brand)
  }
  update()
  {
    this.BrandService.Update(this.brand).subscribe(data => {
      console.log("component:Add-brand/Method:update/Gelen Veri:this.BrandService.Update/this.brandListOutput =",data)
      this.brand.Name = undefined;
      this.brand.ID = undefined;
      console.log("component:Add-brand/Method:update/this.brand=",this.brand)
      this.brandListOutPut.emit(data)
    })
  }
}
