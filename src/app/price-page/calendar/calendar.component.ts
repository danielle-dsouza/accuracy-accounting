import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private month:String = "April";
  private day:string = "1";
  private year:string = "2019";

  constructor() { }

  ngOnInit() {
  }

  selectedDay(event) {
    this.day = event.target.id;
  }

}
