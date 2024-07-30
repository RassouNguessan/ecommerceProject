import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { Router } from "@angular/router";
import { RegisterParticular, RegisterParticularResponse, Registrationstate } from "../../utils/types";
import { HttpClient } from "@angular/common/http";
import { RegisterService } from "../../services/register.service";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";

@Component({
  selector: "app-individual",
  standalone: true,
  templateUrl: "./individual.component.html",
  styleUrls: ["./individual.component.scss"],
  imports: [CommonModule, ReactiveFormsModule, SecMsgComponent],
})
export class IndividualComponent implements OnInit {
  public StateEnum = Registrationstate;
  public nextStep = Registrationstate.One;
  errorMessage: string | null = null;
  otpErrorMessage: string | null = null;
  emailAlreadyExists: boolean = false;

  stepOneForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    birth_day: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [
      Validators.required,
      Validators.maxLength(14),
      Validators.minLength(10),
      Validators.pattern(/^\+\d{1,3}\d{8,14}$/),
    ]),
  });

  stepTwoForm = new FormGroup({
    otpCode: new FormControl("", Validators.required),
  });

  stepThreeForm: FormGroup;

  consolidatedData: any = {};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.stepThreeForm = this.fb.group({
      password: ['', [Validators.required]],
      cfrmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const cfrmPassword = form.get('cfrmPassword');
    return password && cfrmPassword && password.value === cfrmPassword.value ? null : { mismatch: true };
  }

  onStepOneSubmit() {
    if (this.stepOneForm.valid) {
      this.consolidatedData = { ...this.consolidatedData, ...this.stepOneForm.value };
      this.registerService.sendOTPRegister(this.consolidatedData.email).subscribe({
        next: () => {
          this.nextStep = Registrationstate.Two;
          this.emailAlreadyExists = false;
          this.errorMessage = null;
        },
        error: (error) => {
          if (error.status === 409) { // Email already exists
            this.emailAlreadyExists = true;
            this.errorMessage = 'Cet email est déjà enregistré.';
          } else {
            this.errorMessage = error.error?.detail || 'Une erreur est survenue.';
          }
        }
      });
    }
  }

  onStepTwoSubmit() {
    const otpCode = this.stepTwoForm.value.otpCode;
  
    if (otpCode) {
      if (this.stepTwoForm.valid) {
        const otpData = { email: this.consolidatedData.email!, otp_code: otpCode };
        
        this.registerService.verifyOTP(otpData.email, otpData.otp_code).subscribe({
          next: () => {
            this.nextStep = Registrationstate.Three;
            this.otpErrorMessage = null;
          },
          error: (error) => {
            this.otpErrorMessage = 'Code OTP invalide. Veuillez vérifier le code et réessayer.';
            // Optionnel : vider le champ OTP en cas d'erreur
            this.stepTwoForm.controls['otpCode'].setValue('');
          }
        });
      }
    } else {
      // Si le champ OTP est vide, effacer le message d'erreur
      this.otpErrorMessage = null;
    }
  }
  
  onStepThreeSubmit() {
    if (this.stepThreeForm.valid) {
      this.consolidatedData = { ...this.consolidatedData, ...this.stepThreeForm.value };
      this.registerService.registerParticulier(this.consolidatedData).subscribe({
        next: () => {
          this.router.navigateByUrl("/success");
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
    }
  }

  back() {
    if (this.nextStep === Registrationstate.Two) {
      this.nextStep = Registrationstate.One;
    } else if (this.nextStep === Registrationstate.Three) {
      this.nextStep = Registrationstate.Two;
    }
  }
}
