import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackgroundComponent } from "../../widgets/background/background.component";
import { SecMsgComponent } from "../../widgets/sec-msg/sec-msg.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [ReactiveFormsModule, BackgroundComponent, SecMsgComponent, ImgBlockComponent],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.scss'
})
export class ForgotPasswordPageComponent {

  errorMessage: string | null = null;
  isLoading = false;

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
  });

  constructor(private authService: AuthService, private router: Router) { }

  sendOTP() {
    this.forgotPasswordForm.markAllAsTouched();
    if (this.forgotPasswordForm.valid) {
      this.isLoading = true;
      const email = this.forgotPasswordForm.getRawValue().email;
      this.authService.sendOTP(this.forgotPasswordForm.getRawValue()).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/verify-otp'], { state: { email } });
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.detail;
        }
      });
    }
  }

  back() {
    this.router.navigate(['/login']);
  }

}
