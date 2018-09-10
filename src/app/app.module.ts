import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentService } from './department/department.service';
import { DepartmentComponent } from './department/department.component';
import { StudentComponent } from './student/student.component';
import { RootService } from './service/root.service';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { Route } from '@angular/compiler/src/core';
import { TooltipComponent } from './tooltip/tooltip.component';

const approutes: Routes = [
  {path:'departments', component: DepartmentComponent},
  {path:'student', component: StudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    StudentComponent,
    DepartmentDetailComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      approutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [DepartmentService,RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
