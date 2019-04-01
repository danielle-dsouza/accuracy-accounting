import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  public newLocation: string = "";
  public typeRegion: string;
  iftask:boolean = false;
  iftask2:boolean = false;
  iftask3:boolean = false;
  iftask4:boolean = false;
  iftask5:boolean = false;

  constructor() {}

  ngOnInit() {}

  locChange(location: string) {
    this.newLocation = location;
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

  smallText4(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask4 = true;
    } else {
      this.iftask4 = false;
    }
  }

  smallText5(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask5 = true;
    } else {
      this.iftask5 = false;
    }
  }
}
