import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { SuccessComponent } from "../success/success.component";
import { ImgBlockComponent } from "../img-block/img-block.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { Registrationstate } from "../../utils/types";

@Component({
  selector: "app-individual",
  standalone: true,
  templateUrl: "./individual.component.html",
  styleUrl: "./individual.component.scss",
  imports: [
    SuccessComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ImgBlockComponent,
    SecMsgComponent,
  ],
})
export class IndividualComponent implements OnInit {
  public StateEnum = Registrationstate;
  public nextStep = Registrationstate.One;

  registrationType: unknown;
  stepTwoForm = new FormGroup({
    otpCode: new FormControl("", Validators.required),
  });

  stepOneForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern(/^0\d{9}$/),
    ]),
  });

  stepThreeForm = new FormGroup({
    password: new FormControl("", Validators.required),
    cfrmPassword: new FormControl("", Validators.required),
  });

  isSuccess = true;
  registrationFullInfos: unknown[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.isSuccess = false;
    const data = this.location.getState() as Record<string, unknown>;
    this.registrationType = data?.["type"];
  }

  individualFormSubmit() {
    if (
      this.stepOneForm?.valid &&
      this.stepTwoForm?.valid &&
      this.stepThreeForm?.valid
    ) {
      this.registrationFullInfos.push(
        this.stepOneForm.value,
        this.stepTwoForm.value,
        this.stepThreeForm.value
      );

      this.router.navigateByUrl("/success", {
        state: { type: this.registrationType },
      });
    }
  }

  next() {
    if (this.nextStep == Registrationstate.One) {
      this.nextStep = Registrationstate.Two; //Passage à la page Suivante
    } else if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.Three; //Up
    } else if ((this.nextStep = Registrationstate.Three)) {
      return;
    } else {
      throw new Error("The number of items cannot be negative!");
    }
  }

  back() {
    if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.One;
    } else if (this.nextStep == Registrationstate.Three) {
      this.nextStep = Registrationstate.Two;
    } else {
      return;
    }
  }
}
