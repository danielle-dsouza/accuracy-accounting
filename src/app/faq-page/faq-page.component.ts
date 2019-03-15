import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';
import { Faq } from './faq.model';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  providers: [FaqService],
})

export class FaqPageComponent implements OnInit {
  selectedFaq: Faq;

  constructor() { }

  ngOnInit() {}
}
