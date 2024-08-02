import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InputGroupModule } from "primeng/inputgroup";

@Component({
  selector: "app-index",
  standalone: true,
  templateUrl: "./index.component.html",
  styleUrl: "./index.component.scss",
  imports: [ReactiveFormsModule, CommonModule, InputGroupModule, RouterLink],
})
export class IndexComponent {
  loginForm: FormGroup;
  fieldTextType?: boolean;
  registering = false;
  login = false;
  forgotPass = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.fieldTextType = true;
    this.login = true;
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  registerButton() {
    this.registering = !this.registering;
    this.login = !this.login;
    // alert('Inscription');
  }

  loginButton() {
    alert(this.loginForm.value.login + " " + this.loginForm.value.password);
  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass;
    alert("Mot de passe oublié");
  }
}
