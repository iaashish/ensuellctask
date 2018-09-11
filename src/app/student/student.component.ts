import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from './student';
import { RootService } from '../service/root.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private studentSubscription: Subscription;
  private student: Student[];
  @Input()studentdisp: boolean;
  constructor(private rootService: RootService) { }

  ngOnInit() {
    this.rootService.observableStudent.subscribe(item=>{
      this.student = item;
    })
  }

  isValid(data){
    return (data.length != 0);
  }
}