import { Component, OnInit, Input } from "@angular/core";
import { Faq } from "../../faq.model";

@Component({
  selector: "app-faq-item",
  templateUrl: "./faq-item.component.html",
  styleUrls: ["./faq-item.component.scss"]
})
export class FaqItemComponent implements OnInit {
  isHidden: boolean = true;
  @Input() faq: Faq;

  ngOnInit() {}

  faqToggle() {
    this.isHidden = !this.isHidden;
  }
}
