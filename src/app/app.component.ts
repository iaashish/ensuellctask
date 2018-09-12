import { Component, OnInit } from '@angular/core';
import { IDepartment, Department } from '../app/department/department';
import { RootContext } from '@angular/core/src/render3/interfaces/view';
import { RootService } from './service/root.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable,} from 'rxjs';
import {switchMap, filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  departmentParams : Observable<Department>;
  subject: any;
  constructor(
    private rootService: RootService,
    private route: ActivatedRoute,
    private router: Router
    ){
      // console.log(this.route.snapshot.queryParamMap.get('filter'));
      // this.subject = this.route.queryParams["filter"];
      // this.route.queryParams.subscribe(params => console.log(params));
    }
    
  ngOnInit(){
    this.route.queryParams
    .subscribe(params => this.subject=params.subject);
    if(this.subject!=null){
      
    }
    // });
    // this.subject = this.route.snapshot.paramMap.get('sub');
    // this.departmentParams = this.route.paramMap.pipe(params=>{
    //   this.subject = params['sub']
    // }
    //   (params: ParamMap)=>{
    //     this.subject =  params.get('sub');
    //   })
    // );
    this.rootService.getData();
    this.rootService.getStudentsData();
    this.router.navigate(['/departments']);
  }
}
