import { Component, inject, OnInit } from "@angular/core";
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
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-individual",
  standalone: true,
  templateUrl: "./individual.component.html",
  styleUrls: ["./individual.component.scss"],
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

  createUsers: any[] = [];

  deptObjParticular: any = {
    "first_name": "",
    "last_name": "",
    "birth_day": "",
    "phone": "",
    "email": "",
    "password": ""
  }
  registrationType: unknown;

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
      Validators.maxLength(14), // La longueur maximale pourrait être ajustée en fonction des besoins
      Validators.minLength(10), // La longueur maximale pourrait être ajustée en fonction des besoins
      Validators.pattern(/^\+\d{1,3}\d{8,14}$/),
    ]),
    
    
  });

  stepTwoForm = new FormGroup({
    otpCode: new FormControl("", Validators.required),
  });

  stepThreeForm: FormGroup;

  isSuccess = true;
  registrationFullInfos: unknown[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.stepThreeForm = this.fb.group({
      password: ['', [Validators.required]],
      cfrmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.isSuccess = false;
    const data = this.location.getState() as Record<string, unknown>;
    this.registrationType = data?.["type"];
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const cfrmPassword = form.get('cfrmPassword');
    return password && cfrmPassword && password.value === cfrmPassword.value ? null : { mismatch: true };
  }

  individualFormSubmit() {
    if (
      this.stepOneForm.valid &&
      this.stepTwoForm.valid &&
      this.stepThreeForm.valid
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
    if (this.nextStep === Registrationstate.One) {
      this.nextStep = Registrationstate.Two;
    } else if (this.nextStep === Registrationstate.Two) {
      this.nextStep = Registrationstate.Three;
    } else if (this.nextStep === Registrationstate.Three) {
      return;
    } else {
      throw new Error("The number of items cannot be negative!");
    }
  }

  back() {
    if (this.nextStep === Registrationstate.Two) {
      this.nextStep = Registrationstate.One;
    } else if (this.nextStep === Registrationstate.Three) {
      this.nextStep = Registrationstate.Two;
    } else {
      return;
    }
  }

  http = inject(HttpClient);

  createParticular() {
    if (this.nextStep === Registrationstate.One) {
      if (this.stepOneForm.valid) {
        this.nextStep = Registrationstate.Two;
      }
    } else if (this.nextStep === Registrationstate.Two) {
      if (this.stepTwoForm.valid) {
        this.nextStep = Registrationstate.Three;
      }
    } else if (this.nextStep === Registrationstate.Three) {
      if (this.stepThreeForm.valid) {
        this.http.post('https://users-service-enu3.onrender.com/api/v1/register/particular', this.deptObjParticular)
          .subscribe({
            next: (res: any) => {
              console.log('User created successfully', res);
              // Handle success response
            },
            error: (err: any) => {
              console.error('Error creating user', err);
              // Handle error response
            }
          });
      }
    } else {
      throw new Error("Invalid registration step!");
    }
  }

}
