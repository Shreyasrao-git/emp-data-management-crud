import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl = "http://springboot-service:8080/employee"
  constructor(private httpClient: HttpClient) {
    
  }

  getEmployeeDetails(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseurl}/getDetails`);
  }

  addEmployeeDetails(employee: Employee): Observable<any>{
    return this.httpClient.post(`${this.baseurl}/addDetails`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseurl}/getDetails/${id}`);
  }

  updateEmployeeById(id: number, employee: Employee): Observable<object>{
    return this.httpClient.put(`${this.baseurl}/updateDetails/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/deleteDetails/${id}`);
  }
}
