import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  @Input() deptName: string;
  private topexp: any;
  private showtooltip:boolean = false;
  constructor(
    private element: ElementRef
  ) { }

  @HostListener('mouseover') onHover() {

    if(this.element.nativeElement.offsetWidth > this.element.nativeElement.parentElement.clientWidth){
      this.showtooltip = true;
      this.topexp = (this.element.nativeElement.offsetTop - 40) +'px';
    }
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target): void {
    this.showtooltip = false;
  }

  ngOnInit() {
  }

}
