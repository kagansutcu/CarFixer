import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/car/Car';

@Pipe({
  name: 'carpipe'
})
export class CarPipe implements PipeTransform {

  transform(value: Car[], plaque:string): Car[] {
    if(plaque == undefined){
      return value;
    }
    else{
      plaque = plaque.toLocaleLowerCase();
      return value.filter((c: Car) => c.Plaque.toLocaleLowerCase().indexOf(plaque) !== -1); value;
    }
  }

}
