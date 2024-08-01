import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-payment-otp",
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: "./payment-otp.component.html",
  styleUrl: "./payment-otp.component.scss",
})
export class PaymentOtpComponent {
  paymentOtpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.paymentOtpForm = this.fb.group({
      paymentOtpCode: [
        "",
        {
          validators: [Validators.required],
          nonNullable: true,
        },
      ],
    });
  }

  otpCodeSubmit() {
    if (this.paymentOtpForm.valid) {
      this.router.navigate(['/success/purchase']);
    }
  }
}
