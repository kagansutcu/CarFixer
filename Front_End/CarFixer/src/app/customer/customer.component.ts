import { Component, OnInit} from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import { CarService } from '../Services/car.service';
import { Customer } from './Customer';
import { Car } from '../car/Car';
import { escapeRegExp } from '@angular/compiler/src/util';
import { typeWithParameters } from '@angular/compiler/src/render3/util';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']  
})
export class CustomerComponent implements OnInit 
{

  //#region Variables 
  customerList:Customer[];
  carList:Car[];
  customerListLength:number;
  stop=true;
  //#endregion


  constructor(private CustomerService:CustomerService,private CarService:CarService) { }
  ngOnInit(): void{
    //#region Get Data from  service
    this.CustomerService.GetAll().subscribe(data =>
    { 
      this.customerList = data;
    this.customerListLength =  this.customerList.length
    console.log("customerlist length =",this.customerListLength)
     console.log(data)
      this.CarService.GetAll().subscribe(data =>
      {
        this.carList = data;
        console.log(this.carList);
       
      }); 
    });
    this.stop = false;   //#endregion 
  }
  delete(customerID:number)
  {
    for(let customer of this.customerList)
    { 
      if(customer.ID == customerID)
      { 
        if(confirm("'"+customer.Name +"'" +" Müşterisini Silmek İçin Emin Misiniz?"))
        {
          for(let car of this.carList)
          {
            if(customerID == car.CustomerID )
            {
              alert("'"+customer.Name +"'" +"Müşterinin Arabaları Mevcut")
              return;
            }
          }
            this.CustomerService.Delete(customerID).subscribe(data => {
              this.customerList = data;
            })
        }
      }
    }
  }
}
  

