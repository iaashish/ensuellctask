import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';
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
  @Output() studentParent = new EventEmitter();
  private valueofparent = 0;
  private remained = 0;
  private moreFlag:boolean = false;
  private checkForRemained:boolean = false;
  constructor(
      private rootService: RootService,
      private route: ActivatedRoute,
      private router: Router,
      private element: ElementRef
            ) { }
    ngOnInit() {
      this.rootService.observableDepartment.subscribe(item=>{
        this.department=item;
      });
  }

  changeSubData(data, sub){
    this.checkForRemained = true;
    this.moreFlag = true;
    this.valueChange.emit(false);
    this.studentParent.emit(false);
    this.rootService.getFilterDepartment(data);
    this.rootService.getFilterStudentData(data, sub);
    this.studentDisplay = true;
  }

  showAdditional(data){
    this.moreFlag = false;
    this.checkForRemained = false;
    this.rootService.getFilterDepartment(data);
  }

  changeRoute(){
    this.router.navigate(['/departments']);
  }

  changeView(){
    this.state='small';
    this.rootService.getData();
    this.studentDisplay = false;
  }

  getnumber(subjects){
    if(this.checkForRemained){
      this.moreFlag = false;
      this.remained = 0;
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      context.font = '1vw  Arial';
      if(this.valueofparent == 0){
        this.valueofparent = this.element.nativeElement.querySelector('.subjects-wrapper').offsetWidth;
      }
      var parentElement = this.valueofparent - 100;
      var number = 0
      for(var i =0;i<subjects.length;i++){
        number += context.measureText(subjects[i]).width;
        if(number > parentElement){
          this.remained = subjects.length - i+1;
          this.moreFlag = true;
          return i-1;
        }

      }
      return subjects.length;
    }else{
      return subjects.length;
    }
  }
}