import { Component, OnInit } from "@angular/core";
import { Person } from "../people.model";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  people: Person[] = [
    new Person("Name", "Job", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor ut.", "../../assets/images/woman-orange.jpg"),
    new Person("Name2", "Job2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor ut.", "../../assets/images/woman-orange.jpg"),
    new Person("Name3", "Job3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor ut.", "../../assets/images/woman-orange.jpg"),
    new Person("Name4", "Job4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor ut.", "../../assets/images/woman-orange.jpg")
  ];

  constructor() {}

  ngOnInit() {}
}
