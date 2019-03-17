import { Component, OnInit, HostListener } from "@angular/core";
import { ConnectionService } from "./connection.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.scss"]
})
export class ContactPageComponent implements OnInit {
  public newLocation: string = "";
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  iftask:boolean = false;
  iftask2:boolean = false;
  iftask3:boolean = false;
  iftask4:boolean = false;
  iftask5:boolean = false;

  @HostListener("input") oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService,
  ) {
    this.contactForm = fb.group({
      contactFormFirst: ["", Validators.required],
      contactFormLast: ["", Validators.required],
      contactFormEmail: [
        "",
        Validators.compose([Validators.required, Validators.email])
      ],
      contactFormSubject: ["", Validators.required],
      contactFormMessage: ["", Validators.required]
    });
  }

  ngOnInit() {}

  locChange(location: string) {
    this.newLocation = location;
  }

  smallText(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask = true;
    } else {
      this.iftask = false;
    }
  }

  smallText2(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask2 = true;
    } else {
      this.iftask2 = false;
    }
  }

  smallText3(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask3 = true;
    } else {
      this.iftask3 = false;
    }
  }

  smallText4(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask4 = true;
    } else {
      this.iftask4 = false;
    }
  }

  smallText5(refVar: string) {
    let val = refVar;
    if (val.length > 0) {
      this.iftask5 = true;
    } else {
      this.iftask5 = false;
    }
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert("Your message has been sent.");
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      error => {
        console.log("Error", error);
      });
  }
}
