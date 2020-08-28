import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {

 if(filterText == undefined)  
  {
      return value;
  }
  if(filterText != undefined)
 filterText = filterText.toLocaleLowerCase();
    console.log("Filter Text:"+filterText)
    return value.filter((p:Product) => p.Name.toLocaleLowerCase().indexOf(filterText) !==-1 );value;
  }

}