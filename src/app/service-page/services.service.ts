import { Injectable, EventEmitter } from "@angular/core";
import { Service } from "./service.model";

@Injectable()
export class ServicesService {
    serviceSelected = new EventEmitter<Service>();

  private services: Service[] = [
    new Service("Bookkeeping"),
    new Service("Tax Managment"),
    new Service("Test Service"),
    new Service("Test Service"),
  ];

  getServices() {
      return this.services.slice();
  }
}
