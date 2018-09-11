import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RootService } from '../service/root.service';
import { IDepartment, Department } from './department';
import { Student } from '../student/student';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  private subscription: Subscription;
  cstate: string=  'small';
  private department: Department[];
  studDisplay: boolean = true;
  show: boolean = true;
  displayxi: boolean = false;
  displaynot:boolean = false;
  displaystuu:boolean = false;
  stuDisplay = [];
  displaychild:boolean = false;
  alldepartments:boolean = true;
  constructor(private rootService: RootService) { }

  ngOnInit() {
  }

  increasecomponent(){
   this.cstate = 'large';
   this.studDisplay = false;
  //  this.show = false; 
    this.displayxi = true;
    this.displaychild = true;
  }

  switch(){
    this.rootService.getStudentsData();
    this.displaychild = false;
    this.cstate = 'small';
    this.studDisplay = true;
    this.displayxi = false;
    this.displaystuu = false;
    this.rootService.getData();
  }
  
  displayStatus(status){
    this.studDisplay = false;
  }

  displayStudent(sta){
    this.alldepartments = false;
  }

}