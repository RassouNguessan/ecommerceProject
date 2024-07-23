import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InputGroupModule } from "primeng/inputgroup";
import { RegisterComponent } from "../form-register/register.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";

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
    RegisterComponent,
    SecMsgComponent,
  ],
})
export class FormsComponent {
  @Input() individual = "particulier";
  @Input() company = "entreprise";
  margin = true;
  loginForm = new FormGroup({
    login: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  registering = false;
  forgotPass = false;

  registerButton() {
    this.registering = !this.registering;
  }

  loginSubmit() {
    alert(this.loginForm?.value.login + " " + this.loginForm?.value.password);
  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass;
    alert("Mot de passe oublié");
  }
}
