import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SecMsgComponent } from '../../widgets/sec-msg/sec-msg.component';
import { ImgBlockComponent } from '../../widgets/img-block/img-block.component';
import { BackgroundComponent } from '../../widgets/background/background.component';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { Location } from '@angular/common';
import { VerifyOTPPayload } from '../../utils/types';

@Component({
  selector: 'app-verify-otp-page',
  standalone: true,
  imports: [ReactiveFormsModule, SecMsgComponent, ImgBlockComponent, NavbarComponent, BackgroundComponent,],
  templateUrl: './verify-otp-page.component.html',
  styleUrl: './verify-otp-page.component.scss'
})
export class VerifyOtpPageComponent implements OnInit {
  email: string | null = null;
  errorMessage: string | null = null;
  isLoading = false;


  verifyOtpForm = new FormGroup({
    otpCode: new FormControl("", { validators: [Validators.required, Validators.minLength(6)], nonNullable: true }),
  });

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const currentState = this.router.lastSuccessfulNavigation;
    if (currentState && currentState.extras.state) {
      this.email = currentState.extras.state['email'];
      console.log(this.email);
    }

  }

  verifyOTP() {
    this.verifyOtpForm.markAllAsTouched();
    if (this.verifyOtpForm.valid && this.email) {
      
      this.isLoading = true;

       const payload: VerifyOTPPayload = {
        email: this.email,
        otp_code: this.verifyOtpForm.getRawValue().otpCode
      };

      this.authService.verifyOTP(payload).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/reset-password'], { state: { email: this.email } });
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          this.isLoading = false;
        }
      }
      );
    }
  }

  

  back() {
    this.location.back();
  }
}
