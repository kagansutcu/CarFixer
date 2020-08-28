import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employeeList:Array<Employee> = new Array<Employee>();
employeeList2:Array<Employee> = new Array<Employee>();
employee:Employee = new Employee();
showEmployeeList=false;
showEmployeeDrop=false;
showAddEmployee = false;
drop = true;
img=true;
@Output() employeeOutPut = new EventEmitter<Employee>();
  constructor(private EmployeeService:EmployeeService,private Route:Router) { }

  ngOnInit(): void {
    this.EmployeeService.GetAll().subscribe(data => {
    this.employeeList = data;
    if(this.Route.url == "/employees")
    {
      this.showEmployeeList=true;
    }
    else{ 
      this.showEmployeeDrop=true;
    }
    this.img =  false;
  });
   
  }

  select(employee:Employee)
  {
    console.log("Component:employee/Method: Select/this.employee =",this.employee.ID);
    for(let employee_ of this.employeeList)
    {
      if(employee.ID  == employee_.ID)
      {
        employee.Name = employee_.Name;
      }
    }
    this.employeeOutPut.emit(employee)
    for(var i=0; i< this.employeeList.length; i++)
    {
        if(this.employeeList[i].Name == employee.Name)
      {
       this.employeeList.splice(i,1);
      }
    }
    this.EmployeeService.GetByID(employee.ID).subscribe(data => {
      this.employeeList2.push(data);
    });
    console.log(this.employeeList2);
    this.drop = false;
  }
  dataFromAddEmployee(employeeList:Employee[])
  {
    this.employeeList = employeeList;
    this.showAddEmployee = false;
    this.showEmployeeList = true;
  }
  update(EmployeeID:number)
  {
      this.employee.ID =   EmployeeID ;
    for(let employee of this.employeeList)
    {
        if(this.employee.ID == employee.ID)
        {
          this.employee.Name = employee.Name;
          this.employee.PhoneNumber = employee.PhoneNumber;
        }
    }
    console.log("Component:employee/Method:update/This.employee =",this.employee)
    this.showEmployeeList = false;
    this.showAddEmployee = true;

  }

 

}
