import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { InputGroupModule } from "primeng/inputgroup";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { AuthService } from "../../services/auth.service";
import { AuthCredentials, AuthResponse } from "../../utils/types";

@Component({
  selector: "app-forms",
  standalone: true,
  templateUrl: "./forms.component.html",
  styleUrl: "./forms.component.scss",
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputGroupModule,
    RouterLink,
    SecMsgComponent,
  ],
})
export class FormsComponent {
  @Input() individual = "particulier";
  @Input() company = "entreprise";

  errorMessage: string | null = null;
  isLoading: boolean = false;
  showPassword: boolean = false;


  margin = true;
  registering = false;
  forgotPass = false;

  loginForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required, Validators.email], nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }),
  });


  constructor(private authService: AuthService, private router: Router) { }

  registerButton() {
    this.registering = !this.registering;
  }

  loginSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.isLoading = true;
      const credentials: AuthCredentials = this.loginForm.getRawValue();
      this.authService.login(credentials).subscribe({
        next: (response: AuthResponse) => {
          this.authService.setToken(response);
          this.isLoading = false;
          this.router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.message
        }
      });

    }
  }

  hasError(controlName: string, errorName: string): boolean | null {
    const control = this.loginForm.get(controlName);
    return control && (control.dirty || control.touched) && control.hasError(errorName);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
