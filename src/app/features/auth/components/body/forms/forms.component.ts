import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { RegisterComponent } from './register/register.component';
import { SecMsgComponent } from '../../../../../shared/components/sec-msg/sec-msg.component';


@Component({
    selector: 'app-forms',
    standalone: true,
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss',
    imports: [
        ReactiveFormsModule,
        CommonModule,
        InputGroupModule,
        RouterLink,
        RegisterComponent,
        SecMsgComponent
    ]
})
export class FormsComponent implements OnInit{
  @Input() individual: string = 'particulier';
  @Input() company: string = 'entreprise';
  margin: boolean = true;

  loginForm: any;
  // fieldTextType?: boolean;
  registering: boolean = false;
  forgotPass: boolean = false;

  constructor() {}


  ngOnInit(){
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }
 
  registerButton() {
    this.registering = !this.registering;
  }

  loginSubmit() {
    alert(this.loginForm.value.login + ' ' + this.loginForm.value.password);
  }

  forgotPassword() {
    this.forgotPass = !this.forgotPass;
    alert('Mot de passe oublié');
  }
}
