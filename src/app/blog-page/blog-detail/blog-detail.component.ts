import { Component, OnInit } from "@angular/core";
import { Blog } from '../blog.model';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"]
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.blog = this.blogService.getBlog(this.id);
      }
    );
  }
}
