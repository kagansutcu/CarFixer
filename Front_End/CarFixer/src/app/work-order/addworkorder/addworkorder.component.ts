import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkOrder, Work_Employee, Product_WorkOrder } from '../workOrder';
import { Employee } from 'src/app/employee/employee';
import { WorkorderService } from 'src/app/Services/workorder.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/product/product';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-addworkorder',
  templateUrl: './addworkorder.component.html', 
  styleUrls: ['./addworkorder.component.scss']
})
export class AddworkorderComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute,private WorkOrderService:WorkorderService,private ProductService:ProductService) { }
  workOrder:WorkOrder = new WorkOrder();
  Work_Employee:Work_Employee = new Work_Employee();
  productList: Array<Product> = new Array<Product>();
  stopCode=false;
  table=false;
  filter:string;
  addWorkOrder:NgForm;
  product_WorkOrder:Product_WorkOrder = new  Product_WorkOrder();
 
  ngOnInit(): void 
  {
    
    this.workOrder.CarID = this.ActivatedRoute.snapshot.params["ID"];
    this.workOrder.Phone = this.ActivatedRoute.snapshot.params["PhoneNumber"]
    this.workOrder.AraciBirakan = this.ActivatedRoute.snapshot.params["CustomerName"]
    console.log("component:WorkOrder/CarID =",this.workOrder.CarID)
    this.ProductService.GetAll().subscribe(data => 
      {
        this.productList = data;
        this.stopCode = true;
      });     
  }
  dataFromEmployee(employee:Employee)
  {
   this.Work_Employee.EmployeeID = employee.ID;
   this.workOrder.Work_Employee.push(this.Work_Employee);
   console.log("Component:AddWorkOrder/Method:dataFromEmployee/this.workOrder.Work_Employee:",this.workOrder.Work_Employee)
  }
  add()
  {
    this.WorkOrderService.Add(this.workOrder).subscribe(data => {
    console.log(data);
  })
  }

  show()
  {
   if(this.table == false)
   {
      this.table = true;
   }
   else
   {
    this.table =false;
   } 
  }

  AddProduct(product:Product)
  {
    this.product_WorkOrder.ProductID  = product.ID; 
    this.product_WorkOrder.Used = product.number;
    product.number = undefined;
    this.workOrder.Product_WorkOrder.push(this.product_WorkOrder);
    console.log(this.product_WorkOrder);
  }
}
