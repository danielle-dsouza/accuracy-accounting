import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
  service: Service;
  id: number;

  constructor(private serviceService: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.service = this.serviceService.getService(this.id);
      }
    );
  }

}
