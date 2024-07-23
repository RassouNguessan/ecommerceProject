import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { ImgBlockComponent } from "../img-block/img-block.component";

@Component({
  selector: "app-password-reset",
  standalone: true,
  templateUrl: "./password-reset.component.html",
  styleUrl: "./password-reset.component.scss",
  imports: [
    SecMsgComponent,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    ImgBlockComponent,
  ],
})
export class PasswordResetComponent {
  resetForm = new FormGroup({
    otpCode: new FormControl("", [Validators.required]),
  });

  next() {
    console.log("next");
  }

  back() {
    console.log("back");
  }

  resetSubmit() {
    console.log("resetSubmit");
  }
}
