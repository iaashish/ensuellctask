import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department/department.service';
import { IDepartment } from '../app/department/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ensue-Task';

   departments: IDepartment;
  constructor(private _departmentService: DepartmentService){}
    
  ngOnInit(){
    this._departmentService.getDepartments().subscribe(data => {
        this.departments = data;
    });
    console.log(this.departments);
  }
}
