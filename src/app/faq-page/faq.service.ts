import { Injectable } from "@angular/core";
import { Faq } from "./faq.model";

@Injectable()
export class FaqService {
  private faqs: Faq[] = [
    new Faq(
      "What is the difference between accounting and bookkeeping?",
      "Bookkeeping involves the recording of your business' financial transactions. Accounting involves the analyzing of financial data to create reports (eg. income statements, balance sheets) which can help you manage your assets in an optimized manner!"
    ),
    new Faq(
      "What kind of clients do you work with?",
      "We cater to small private and independent entrepreneurial businesses. Our dedicated advisors specialize in bookkeeping and accounting services. Feel free to schedule a free consultation to determine if Accuracy is the right firm for you!"
    ),
    new Faq(
      "What services do you provide?",
      "The better question is what services do we not provide! Accuracy strives to create a strong financial foundation for your business. Our advisors are skilled in bookeeping, tax management, audits, annual reports and much more."
    ),
    new Faq(
      "Do you provide services more/less frequently than every month?",
      "Need a custom plan? No problem! We also offer independent services at intervals that suit your timeline. Schedule an appointment with us to learn more about pricing and different plan options."
    )
  ];

  getFaqs() {
    return this.faqs.slice();
  }
}
