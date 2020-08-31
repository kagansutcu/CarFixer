import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../customer/Customer';

@Pipe({
  name: 'customerFilter'
})
export class CustomerPipe implements PipeTransform {

  transform(value: Customer[], filtertext:string):Customer[] {
    if(filtertext == undefined)
    {
      return value;
  
    }
    else
    {
      filtertext = filtertext.toLocaleLowerCase();
      console.log("Filter Text:" + filtertext)
      return value.filter((c: Customer) => c.Name.toLocaleLowerCase().indexOf(filtertext) !== -1); value;
    } 
  }

}
