import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Model } from './Model';
import { ModelService } from '../Services/model.service';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
@Input() modelListInput:Model[];
@Input() BrandIDInput:Model[];
@Output() ModelIDOutPut= new EventEmitter<number>();
@Input() ModelIDInput:number;
showModel=true;
showAddModel=false;
@Input() model:Model = new Model();


  constructor(private modelservice:ModelService) { }
  

  ngOnInit(): void
  {

    if(this.ModelIDInput != undefined)
    {
      this.model.ID = this.ModelIDInput;
      this.catchModelID();
    }
  }
  catchModelID()
  {
    this.ModelIDOutPut.emit(this.model.ID)
  }

  UpdatebyButtonUpdate()
  {
    for(let model of this.modelListInput)
    {
        if(this.model.ID ==model.ID )
        {
            this.model.Name = model.Name;
            this.model.BrandID = model.BrandID;
            this.ModelIDOutPut.emit(this.model.ID);
        }
   
    }
    console.log("component:Model/Update Model=",this.model)
    this.showModel = false;
    this.showAddModel = true;
  }
  add()
  {
    this.model.ID = undefined;
    this.model.BrandID = undefined;
    this.model.Name = undefined;
    this.showModel = false;
    this.showAddModel = true;
    this.ModelIDOutPut.emit(undefined)
    console.log("Model  =",this.model);
  }
  delete()
  {
      this.modelservice.Delete(this.model.ID).subscribe(data => 
      {
        this.modelListInput = data;
        console.log("Component:Model/Method:Delete/modelLİst =",this.modelListInput)
        this.model.ID = undefined;
        this.model.BrandID = undefined;
        this.model.Name = undefined;
        this.ModelIDOutPut.emit(undefined)
        console.log("Model  =",this.model);
        
      })
  }
  modelListOutPut(ModelList:Model[])
  {  
    if(ModelList != undefined)
    {
      this.model.ID = undefined;
      this.model.BrandID = undefined;
      this.model.Name = undefined;
      this.modelListInput = ModelList;
      this.showModel = true;
      this.showAddModel = false;  
      console.log("Model =",this.model);
    }
    else
  {
    this.model.ID = undefined;
    this.model.BrandID = undefined;
    this.model.Name = undefined;
    this.showModel = true;
    this.showAddModel = false;
    console.log("Model =",this.model);
  }
 }
}
