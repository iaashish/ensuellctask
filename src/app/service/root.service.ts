import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IDepartment, Department } from '../department/department';
import { IStudent, Body, Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  private _deptUrl = "assets/data/departments.json";
  private _studentUrl = "assets/data/students.json";

  public departmentObserver: Department[];
  public studentObserver: Student[];
  public observableDepartment: any;
  public observableStudent: any;
  public departmentFilter: Department[];
  public studentFilter: Student[];
  constructor(private http: HttpClient) {
    this.observableDepartment = new BehaviorSubject<Department[]>(this.departmentObserver);
    this.observableStudent = new BehaviorSubject<Student[]>(this.studentObserver);
  }
  private departMentOB: Observable<IDepartment> = this.http.get<IDepartment>(this._deptUrl);

  getData(){
    this.departMentOB.subscribe(res =>{
      this.departmentObserver = res.departments;//.filter(items=>items.name=='Εlectrical & Electronics Engineering');
      this.getValue();
    });
  }

  //htp request to get students data
  getStudentsData(){
    this.http.get<IStudent>(this._studentUrl).subscribe(res =>{
      this.studentObserver = res.body.studentData
          .students;
          // .filter(items=>
          //    items.subject=='Circuit Theory & Networks'
          //     && items.department=='Εlectrical & Electronics Engineering'
          //     );
      this.emitStudents();
    })
  }

  getFilterDepartment(dept){
    this.http.get<IDepartment>(this._deptUrl).subscribe(res => {
      this.departmentObserver = res.departments.filter(items => items.name == dept);
      this.getValue();
    })
   
  }

  getFilterStudentData(dept, sub){
    this.studentObserver = [];
    this.emitStudents();
    return this.http.get<IStudent>(this._studentUrl).subscribe(res => {
      this.studentObserver = res.body.studentData.students.filter(
          items => items.subject == sub && items.department == dept);
          this.emitStudents();
    })
  }

  getValue(){
      this.observableDepartment.next(this.departmentObserver);
  }

  emitStudents(){
    this.observableStudent.next(this.studentObserver);
  }
}
