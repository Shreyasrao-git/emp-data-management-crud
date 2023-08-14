import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path: "employees", component: EmployeedetailsComponent, 
    children:[
      {path: "addemployee", component:AddemployeeComponent},
    ]  
  },
  {path: "", redirectTo: "employees", pathMatch: "full"},
  {path: "updateemployee/:id", component: UpdateemployeeComponent},
  {path: "addemployee", component:AddemployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
