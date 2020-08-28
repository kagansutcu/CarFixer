import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CarType } from '../carType';
import { CartypeService } from 'src/app/Services/cartype.service';

@Component({
  selector: 'app-addcartype',
  templateUrl: './addcartype.component.html',
  styleUrls: ['./addcartype.component.scss']
})
export class AddcartypeComponent implements OnInit {
@Output() carTypeListOutPut = new EventEmitter<CarType[]>()
@Input() carType:CarType = new CarType();
  constructor(private CarTypeService:CartypeService) { }

  ngOnInit(): void {
  }

  update()
  {
    this.CarTypeService.Update(this.carType).subscribe(data => {
      this.carTypeListOutPut.emit(data) 
  });
  }

  add()
  {
    this.CarTypeService.Add(this.carType).subscribe(data => {
      this.carTypeListOutPut.emit(data)
    })
  }
  cancel()
  {
    this.carTypeListOutPut.emit(undefined)
  }

}
