import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styles: [
  ]
})
export class EmployeedetailsComponent {
  employees: Employee[]=[];
  constructor(private employeeService: EmployeeService, private router: Router){

  }
  ngOnInit(): void{
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeDetails().subscribe(data => {
      this.employees = data;
    });
  }
  updateEmployee(id: number){
    this.router.navigate(['updateemployee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
    });
  }

  addEmployee(){
    this.router.navigate(['addemployee']);
  }
}
