import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from '../Customer';
import { Router, ActivatedRoute } from '@angular/router';
import { __assign } from 'tslib';



@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit
{


  constructor(private CustomerService:CustomerService,private ActivatedRoute:ActivatedRoute,private Router:Router) { }
  
  //#region  Form Variables
  customer:Customer = new Customer();
  //#endregion  
  
  ngOnInit(): void
  {
    //#region   get data from service
    this.customer.ID = this.ActivatedRoute.snapshot.params['ID'];
    if(this.customer.ID != undefined)
    {
      this.CustomerService.GetByID(this.customer.ID).subscribe(data => {
        this.customer = data;
      })
    }
    //#endregion
  }

  add()//and update
  { 

    if(this.customer.ID == undefined)
    {
      this.CustomerService.Add(this.customer).subscribe(data => {
      this.Router.navigate(["/customers"])
      }); 
    }
    else
    {
      this.CustomerService.Update(this.customer).subscribe(data => {
        this.Router.navigate(["/customers"])
      })
    }

  }

}
