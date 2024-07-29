import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BackgroundComponent } from "../../widgets/background/background.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [NavbarComponent, BackgroundComponent, ImgBlockComponent, ReactiveFormsModule],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss'
})
export class ResetPasswordPageComponent implements OnInit {
  email: string | null = null;
  errorMessage: string | null = null;

  resetPasswordForm = new FormGroup({
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }),
    confirmPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }),
  });

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    const currentState = this.router.lastSuccessfulNavigation;
    if (currentState && currentState.extras.state) {
      this.email = currentState.extras.state['email'];
    }
  
  }

  resetPassword() {
    if (this.resetPasswordForm.valid && this.email) {
      const password = this.resetPasswordForm.getRawValue().password;   
        this.authService.resetPassword(this.email, password).subscribe(
          {
            next: () => {
              this.router.navigateByUrl('/login');
            },
            error: (error) => {
              this.errorMessage = error.error.message;
            }
          }
        );
    
    }
  }
}
