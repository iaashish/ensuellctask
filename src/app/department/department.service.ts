import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IDepartment } from '../../app/department/department';
import { Observable } from 'rxjs';



@Injectable()
export class DepartmentService {

  private _url: string = "assets/data/departments.json"

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<IDepartment>{
    return this.http.get<IDepartment>(this._url);
  }


}
