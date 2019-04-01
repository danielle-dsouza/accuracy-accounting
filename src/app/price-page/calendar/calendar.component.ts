import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public month:String = "April";
  public day:string = "1";
  public year:string = "2019";
  iftask:boolean = false;
  iftask2:boolean = false;
  iftask3:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectedDay(event) {
    this.day = event.target.id;
  }

  smallText(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask = true;
    } else {
      this.iftask = false;
    }
  }

  smallText2(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask2 = true;
    } else {
      this.iftask2 = false;
    }
  }

  smallText3(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask3 = true;
    } else {
      this.iftask3 = false;
    }
  }

}
