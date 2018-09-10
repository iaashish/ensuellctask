import { Component, OnInit, Input } from '@angular/core';
import { RootService } from '../service/root.service';
import { Subscription } from 'rxjs';
import { IDepartment, Department } from '../department/department';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student/student';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  animations: [
    //write slide code
    trigger("hidewindow",[
        state('small', style({display: 'none'})),
        state('large', style({height: 'auto'})),

        transition('small <=> large', animate('400ms ease-in'))
    ])

  ]
})
export class DepartmentDetailComponent implements OnInit {

  private deptSubscription: Subscription;
  private department: Department[];
  private departmentdup: Department[];
  @Input() state: string;
  @Input() displayx: boolean;
  private dep: any;
  private sub: any;
  private studentSubscription: Subscription;
  private student: Student[];
  @Input() studentdup: Student[];
  // private route: Route;
  @Input() notAvailabe:boolean;
  @Input() studentDisplay:boolean;
  private display:boolean = false;
  constructor(
      private rootService: RootService,
      private route: ActivatedRoute,
      private router: Router
            ) { }
  
  
    ngOnInit() {
      this.rootService.observableDepartment.subscribe(item=>{
        this.department=item;
      });
      this.rootService.observableStudent.subscribe(item =>{
        this.student = item;
      });
      this.studentdup = [];
      this.displayx = false;
      this.departmentdup = this.department;
  }
  changeSubData(data, sub){
    this.studentDisplay = true;
    this.notAvailabe = false;
    this.display = true;
    this.route.queryParams
    .subscribe(params => this.dep = params.department);
    // this.rootService.getData();
    this.department = this.department.filter(items=> items.name == data);
    this.studentdup = this.student.filter(items=> items.department== data && items.subject==sub);
    if(this.studentdup.length == 0){
      this.notAvailabe = true;
    }
  }
  changeRoute(){
    this.router.navigate(['/departments']);
  }

  changeView(){
    this.state='small';
    this.studentdup = [];
    this.rootService.getData();
    this.notAvailabe = false;
  }
}