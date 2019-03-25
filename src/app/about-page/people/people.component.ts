import { Component, OnInit } from "@angular/core";
import { Person } from "../people.model";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  people: Person[] = [
    new Person(
      "Emma Williams",
      "President",
      "Mrs. Williams has been with Accuracy from the very beginning! Her extensive experience in senior management has helped turn Accuracy into a competitive company on an international level.",
      "../../assets/images/woman-orange.jpg"
    ),
    new Person(
      "Mark Gauthier",
      "Chief Operating Officer",
      "Mr. Gauthier brings significant value to decisions regarding global operations and supply chain matters.",
      "../../assets/images/man-tattoo.jpg"
    ),
    new Person(
      "Lanxin Jackson",
      "Chief Financial Officer",
      "CFO since 2018, Mr. Jackson has served as a director for several Canadian companies and uses his many years of experience to lead Accuracy's financial department.",
      "../../assets/images/man-earphone.jpg"
    ),
    new Person(
      "Mia Avaco",
      "Head of Public Relations",
      "Ms. Avaco managed public and media relations. She provides strategic leadership regarding brand management, marketing and e-commerce.",
      "../../assets/images/woman-laugh.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
