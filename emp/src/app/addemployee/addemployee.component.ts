import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styles: [
  ]
})
export class AddemployeeComponent {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router){

  }
  saveEmployee(){
    this.employeeService.addEmployeeDetails(this.employee).subscribe(data=>{
      console.log(data);
    },
    error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(): void{
    this.saveEmployee();
    this.goToEmployeeList();
  }

}
