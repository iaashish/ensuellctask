import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentService } from './department/department.service';
import { DepartmentComponent } from './department/department/department.component';
import { StudentComponent } from './student/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
