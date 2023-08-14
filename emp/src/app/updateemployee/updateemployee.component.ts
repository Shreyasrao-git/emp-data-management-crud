import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styles: [
  ]
})
export class UpdateemployeeComponent {
 employee: Employee = new Employee();
 id: number=0;
 constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}
 ngOnInit(): void{
  this.id = this.route.snapshot.params['id'];
  this.employeeService.getEmployeeById(this.id).subscribe(data=>{
    this.employee = data;
  }, error=>console.log(error));
 }
 
 onSubmit(){
  this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(data => {
    this.goToEmployeeList();
  }, error=>console.log(error));
 }
 goToEmployeeList(){
  this.router.navigate(['/employees']);
  }
}

