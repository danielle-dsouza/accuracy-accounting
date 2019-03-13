import { Component, OnInit } from '@angular/core';
import { Service } from "../service.model";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  services: Service[] = [
    new Service("Bookkeeping"),
    new Service("Tax Managment"),
    new Service("Test Service"),
    new Service("Test Service")
  ];

  constructor() { }

  ngOnInit() {
  }

}
