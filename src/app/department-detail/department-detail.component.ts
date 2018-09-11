import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  private department: Department[];
  @Input() state: string;
  @Input() displayx: boolean;
  private student: Subscription;
  @Input() notAvailabe:boolean;
  @Input() studentDisplay:boolean;
  @Output() valueChange = new EventEmitter();

  constructor(
      private rootService: RootService,
      private route: ActivatedRoute,
      private router: Router
            ) { }
    ngOnInit() {
      this.rootService.observableDepartment.subscribe(item=>{
        this.department=item;
      });
  }

  changeSubData(data, sub){
    this.valueChange.emit(false);
    this.rootService.getFilterDepartment(data);
    this.rootService.getFilterStudentData(data, sub);
    this.studentDisplay = true;
  }

  changeRoute(){
    this.router.navigate(['/departments']);
  }

  changeView(){
    this.state='small';
    this.rootService.getData();
    this.studentDisplay = false;
  }
}