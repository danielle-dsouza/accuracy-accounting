import { Injectable, EventEmitter } from "@angular/core";
import { Service } from "./service.model";

@Injectable()
export class ServicesService {
  serviceSelected = new EventEmitter<Service>();

  private services: Service[] = [
    new Service(
      "Bookkeeping",
      "We offer professional bookkeeping services for private and independent entrepreneurial businesses. Bookkeeping involves recording your business' financial transactions, including sales and expenses, in a general ledger.",
      "OUR METHOD",
      "Our process begins by importing your bank and credit transactions and organizing them with our software. We rely on new, updated softwares, such as Sage, Xero and QuickBooks, to provide the high quality ledgers in an efficient timeframe. Keeping up to date with technology ensures a quick experience for you and effectively eliminates human error.",
      "SAVE TIME",
      "We offer monthly services, but if you have very few expenses, feel free to speak with us to create an individualized plan for you. You can show your transactions at the end of the year and we will organize the 12-months of bookkeeping at once."
    ),
    new Service(
      "Corporate Taxes",
      "Taxes are a tedious part of the entrepreneurial world - but they do not have to be stressful! We offer full services at monthly rates or individualized plans on request. From filing tax returns to minimizing your taxes, we got you covered.",
      "E-FILES",
      "We rely on digital documents which allow for easy communication between advisors and clients, and ensures both parties have backups for when the CRA or the IRA come knocking. We maintain up to date on all tax legislations so that we can answer all their questions and prevent audits.",
      "PLANNING FOR THE FUTURE",
      "We help you prepare future tax plans so that you are not shocked by legal changes. We use advanced graphs and trends to forecast how future decisions may impact your business, and how you can use such changes in the most optimal manner."
    ),
    new Service(
      "Finance Statements",
      "Financial statements are vital in determining corporate tax owings, and should be prepared every year. We create statements and balance sheets that are personalized to your business and can help you plan for future expenses.",
      "STATEMENTS",
      "We pride ourselves in our income statements and balance sheets. Our reports show your business' tax owings, revenue and your total expenses.",
      "GET ADVICE",
      "Our advisors will schedule routine appointments with you to review your financial statements and determine how you wish to proceed. Any and all questions may be addressed. Our services ensure that you recieve detailed financial reports serveral times a year."
    )
  ];

  getServices() {
    return this.services.slice();
  }

  getService(index: number) {
    return this.services.slice()[index];
  }
}
