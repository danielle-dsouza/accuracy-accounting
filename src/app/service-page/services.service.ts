import { Injectable, EventEmitter } from "@angular/core";
import { Service } from "./service.model";

@Injectable()
export class ServicesService {
    serviceSelected = new EventEmitter<Service>();

  private services: Service[] = [
    new Service("Bookkeeping", "Insert bookkeeping description."),
    new Service("Tax Managment", "Insert tax management description."),
    new Service("Test Service", "Insert test description."),
    new Service("Test Service", "Insert test description."),
  ];

  getServices() {
      return this.services.slice();
  }

  getService(index: number) {
    return this.services.slice()[index];
  }

}
