import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InputGroupModule } from "primeng/inputgroup";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { IndexComponent } from "../index/index.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputGroupModule,
    RouterLink,
    IndexComponent,
    SecMsgComponent,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm: FormGroup;
  fieldTextType?: boolean;
  registering = false;
  login = false;
  forgotPass = false;

  constructor() {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
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
