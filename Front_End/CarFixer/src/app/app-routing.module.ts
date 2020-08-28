import { NgModule, Component, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { BrandComponent } from './brand/brand.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { ModelComponent } from './model/model.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { CarComponent } from './car/car.component';
import { AddworkorderComponent } from './work-order/addworkorder/addworkorder.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
{path:'addcustomer', component:AddCustomerComponent},
{path:'customers',component:CustomerComponent},
{path:'addbrand',component:AddBrandComponent},
{path: 'brands', component:BrandComponent},
{path:'addcar/:id',component:AddCarComponent},
{path:'models',component:ModelComponent},
{path:'addmodel',component:AddModelComponent},
{path:'cars',component:CarComponent},
{path:'addworkorder',component:AddworkorderComponent},
{path:'employees', component:EmployeeComponent},
{path:'addemployee',component:AddemployeeComponent},
{path:'addproduct',component:AddproductComponent},
{path:'',component:WorkOrderComponent},
{path:'products',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
