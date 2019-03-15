import { Injectable } from "@angular/core";
import { Faq } from "./faq.model";

@Injectable()
export class FaqService {
  private faqs: Faq[] = [
    new Faq("Test Question", "Test Answer"),
    new Faq("Test Question", "Test Answer"),
    new Faq("Test Question", "Test Answer"),
  ];

  getFaqs() {
    return this.faqs.slice();
  }
}
