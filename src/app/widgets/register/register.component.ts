import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, SecMsgComponent],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterIndexComponent {
  @ViewChild("individual") individual!: ElementRef;
  @ViewChild("company") company!: ElementRef;
  individualText: string | undefined;
  companyText: string | undefined;

  constructor(private route: Router) {}

  redirectIndividual() {
    this.route.navigateByUrl("register/individual", {
      state: { type: this.individual.nativeElement.textContent },
    });
  }

  redirectCompanyl() {
    this.route.navigateByUrl("/register/company", {
      state: { type: this.company.nativeElement.textContent },
    });
  }
}
