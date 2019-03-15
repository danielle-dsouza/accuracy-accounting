import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq.model';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {
  faqs: Faq[];

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.faqs = this.faqService.getFaqs();
  }

}
