import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../service.model';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service: Service;
  @Input() index: number;

  ngOnInit() {
  }
}
