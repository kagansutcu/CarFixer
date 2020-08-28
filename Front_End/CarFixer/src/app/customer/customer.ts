import { Car } from '../car/Car';

export class Customer{
    ID:number;
    Name: string;
    CariType: string;
    CariHesapKodu: string;
    Authorized: string;
    TaxNumber: string;
    TaxRoom: string;
    Phone: string;
    Phone2: string;
    RiskStatus: string;
    Email: string;
    WebSite: string;
    Fax: string;
    Comment: string;
    Address:string;
    Date:string;
    TimeRegiser:string;
    car:Array<Car>= new Array<Car>();
}