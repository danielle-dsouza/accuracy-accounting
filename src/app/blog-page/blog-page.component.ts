import { Component, OnInit } from "@angular/core";
import { Blog } from "./blog.model";
import { BlogService } from "./blog.service";

@Component({
  selector: "app-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
  providers: [BlogService],
})
export class BlogPageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
