import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SecMsgComponent } from '../../widgets/sec-msg/sec-msg.component';
import { ImgBlockComponent } from '../../widgets/img-block/img-block.component';
import { BackgroundComponent } from '../../widgets/background/background.component';
import { NavbarComponent } from '../../widgets/navbar/navbar.component';
import { Location } from '@angular/common';

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
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }
  verifyOTP() {
    this.verifyOtpForm.markAllAsTouched();
    if (this.verifyOtpForm.valid && this.email) {
      this.isLoading = true;
      this.authService.verifyOTP(this.email, this.verifyOtpForm.getRawValue().otpCode).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/reset-password', this.email]);
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
