import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SecMsgComponent } from "../../../../../../shared/components/sec-msg/sec-msg.component";
import { ImgBlockComponent } from "../../../../../../shared/components/img-block/img-block.component";


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
    ]
})
export class PasswordResetComponent implements OnInit{
  resetForm: any;

  ngOnInit(){
    this.resetForm = new FormGroup({
      otpCode: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  next() {}

  back() {}

  resetSubmit() {}
}
