import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
