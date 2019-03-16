import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Region } from "../region.model";

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {
  @Input() region:string;
  @Output() locationChange: EventEmitter<string> = new EventEmitter();
  public list:boolean;
  public location:string = "Test";
  public num:string;

  public places: Region[] = [
    new Region("275 28th Ave E"),
    new Region("10077 Bayview Ave"),
    new Region("1875 rue Levy"),
    new Region("28 Armstrong Road"),
    new Region("737 Homewood Street")
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.region === "State") {
      this.list = false;
    } else {
      this.list = true;
    }
  }

  changeAddress(event:any) {
    this.num = event.target.value;
    this.location = this.places[this.num].addr;
    this.locationChange.emit(this.location);
  }
}
