import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule, NgForm} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ModelComponent } from './model/model.component';
import { BrandComponent } from './brand/brand.component';
import { CarTypeComponent } from './car-type/car-type.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { CarComponent } from './car/car.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { AddcartypeComponent } from './car-type/addcartype/addcartype.component';
import { AddworkorderComponent } from './work-order/addworkorder/addworkorder.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ProductFilterPipe } from './product/productPipe/product-filter.pipe';
import { CustomerPipe } from './pipes/customer.pipe';
import { CarPipe } from './pipes/carpipe/car.pipe';









@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ModelComponent,
    BrandComponent,
    CarTypeComponent,
    WorkOrderComponent,
    CarComponent,
    AddCustomerComponent,
    AddBrandComponent,
    AddModelComponent,
    AddCarComponent,
    AddcartypeComponent,
    AddworkorderComponent,
    EmployeeComponent,
    ProductComponent,
    AddemployeeComponent,
    AddproductComponent,
    ProductFilterPipe,
    CustomerPipe,
    CarPipe,

   


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   

    
  
  ],
  providers: [FormsModule,ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
