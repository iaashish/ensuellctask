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

  constructor(private rootService: RootService) { }

  ngOnInit() {
    this.rootService.getData();
    this.subscription = this.rootService.observableDepartment.subscribe(item=>{
      this.department=item;
      });
      // this.cstate = 'small';
      // this.studDisplay = true;
      // this.show = true; 
  }
  increasecomponent(){
   this.cstate = 'large';
   this.studDisplay = false;
  //  this.show = false; 
    this.displayxi = true;
  }
  switch(){
    this.studDisplay = true;
    this.displayxi = false;
    this.rootService.getData();
    this.displaynot = false;
    this.displaystuu = false;
    this.cstate = 'small';
    this.stuDisplay = [];
  }
}