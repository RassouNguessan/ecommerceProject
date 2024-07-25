import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { Banner1Component } from "../../widgets/banner-1/banner-1.component";
import { FormsComponent } from "../../widgets/forms/forms.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { BackgroundComponent } from "../../widgets/background/background.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login-page",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    Banner1Component,
    FormsComponent,
    ImgBlockComponent,
    BackgroundComponent
],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
})
export class LoginPageComponent {
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
