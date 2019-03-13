import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../service.model';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service: Service;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.servicesService.serviceSelected.emit(this.service);
  }

}
