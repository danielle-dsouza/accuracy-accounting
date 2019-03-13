import { Component, OnInit } from '@angular/core';
import { Service } from "./service.model";
import { ServicesService } from './services.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
  providers: [ServicesService],
})
export class ServicePageComponent implements OnInit {
  selectedService: Service;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.serviceSelected.subscribe(
      (service: Service) => {
        this.selectedService = service;
      }
    );
  }

}
