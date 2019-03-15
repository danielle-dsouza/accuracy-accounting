import { Component, OnInit } from "@angular/core";
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
