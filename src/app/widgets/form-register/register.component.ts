import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { IndividualComponent } from "../individual/individual.component";
import { CompanyComponent } from "../company/company.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { ImgBlockComponent } from "../img-block/img-block.component";

@Component({
  selector: "app-register",
  standalone: true,
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
  imports: [
    CommonModule,
    RouterLink,
    SecMsgComponent,
    ImgBlockComponent,
    IndividualComponent,
    CompanyComponent,
  ],
})
export class RegisterComponent implements OnInit {
  @Input() type = "";
  @Input() nextStep = "";
  @Input() backStep = "";
  registrationType?: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.nextStep = "one";
  }

  isIndividual() {
    const getValue = document.getElementById("individual");
    if (getValue) {
      this.router.navigateByUrl("/register/individual", {
        state: { type: getValue.innerText },
      });
      console.log(getValue.innerText);
    }
  }

  isCompany() {
    const getValue = document.getElementById("company");
    if (getValue) {
      this.router.navigateByUrl("/register/company", {
        state: { type: getValue.innerText },
      });
      console.log(getValue.innerText);
    }
  }

  methodParent(value: boolean) {
    alert("This Boolean is " + value);
  }

  registrationSubmit() {
    console.log("Registration submitted");
  }
}
