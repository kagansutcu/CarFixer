import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Model } from '../Model';
import { ModelService } from 'src/app/Services/model.service';



@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {
@Input() modelInput:Model;
@Input() BrandIDInput:number;
@Output() modelListOutPut =new  EventEmitter<Model[]>();

  constructor(private ModelService:ModelService) { }

    ngOnInit(): void
  {
    
  }
  add()
  {
    this.modelInput.BrandID = this.BrandIDInput;
    console.log("Component:AddModel/Method:Add/this.model =)",this.modelInput)
    this.ModelService.Add(this.modelInput).subscribe(data => {
    console.log("component:AddModel/Method:add/this.ModelListOutPut = ",data)
    this.modelListOutPut.emit(data);
    });
  }
  update()
  {
    console.log("Component:Add-Model/Methot Update/this.modelInput=",this.modelInput)
    this.ModelService.Update(this.modelInput).subscribe(data => {
      console.log("component:AddModel/Method:update/this.ModelListOutPut = ",data)
      this.modelListOutPut.emit(data);
    })
  }
 cancel()
 {
  this.modelListOutPut.emit(undefined);
  console.log("component:AddModel/Method:cancel/this.ModelListOutPut",undefined)
 }
}
