import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService) { 
  }

  ngOnInit() {
    this.blogs = this.blogService.getAllBlogs();
  }
} 