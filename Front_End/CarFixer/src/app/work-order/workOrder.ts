import { Car } from '../car/Car';
import { Customer } from '../customer/Customer';
import { VirtualAction } from 'rxjs';
import { Product } from '../product/product';
export class WorkOrder {

    AraciBirakan: string;
    Phone: string;
    CarID: number;
    AraciALan: string;
    BirakimTarihi: string;
    AlmaTarihi: string;
    Km: string;
    BakimaGelicegiKm: string;
    BakimaGelecegiTarih: string;
    Price: number;
    insuranceCompany: string;
    CustomerWant: string;
    EmployeeComment: string;
    Plaque:string;          
    CustomerName:string;
    Work_Employee:Array<Work_Employee> =  new  Array<Work_Employee>();
    Product_WorkOrder:Array<Product_WorkOrder>= new Array<Product_WorkOrder>();
    

}

export class  Work_Employee{
    EmployeeID:number;
    WorkOrderID:number;
}
export class Product_WorkOrder{
    ProductID:Number;
    WorkOrderID:Number;
    Used:Number;
}