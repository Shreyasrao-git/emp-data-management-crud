import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule} from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
