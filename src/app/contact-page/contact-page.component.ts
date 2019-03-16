import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  public newLocation:string = "";

  constructor() { }

  ngOnInit() {
  }

  locChange(location:string) {
    this.newLocation = location;
  }
}
