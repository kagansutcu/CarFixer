import { Component, OnInit, Input, Output  ,EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import {  RouterLink, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss'],
  providers:[RouterLink]
})
export class AddemployeeComponent implements OnInit {
@Input() employee: Employee = new Employee();
@Output() employeeList = new EventEmitter<Employee[]>();

  constructor(private EmployeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
      
  }

  add()
  {
    this.EmployeeService.Add(this.employee).subscribe(data => 
      {
        this.router.navigate(['employees', {}]);
      });
  }

  update()
  {
    this.EmployeeService.Update(this.employee).subscribe(data =>{
      this.employeeList.emit(data);
    })
  }
  
}
