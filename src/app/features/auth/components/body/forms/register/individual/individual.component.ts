import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Registrationstate } from '../../../../../models/registrationstate';
import { SuccessComponent } from '../../../../../../../shared/components/success/success.component';
import { CommonModule, Location } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ImgBlockComponent } from '../../../../../../../shared/components/img-block/img-block.component';
import { SecMsgComponent } from '../../../../../../../shared/components/sec-msg/sec-msg.component';

@Component({
  selector: 'app-individual',
  standalone: true,
  templateUrl: './individual.component.html',
  styleUrl: './individual.component.scss',
  imports: [
    SuccessComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ImgBlockComponent,
    SecMsgComponent,
  ],
})
export class IndividualComponent implements OnInit {
  public StateEnum = Registrationstate;
  public nextStep = Registrationstate.One;

  registrationType: any;
  stepOneForm: FormGroup | any;
  stepTwoForm: FormGroup | any;
  stepThreeForm: FormGroup | any;
  isSuccess: boolean = true;
  registrationFullInfos: any[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initStepOneForm(); //initialisation des formulaires 1 & 2 & 3
    this.initStepTwoForm();
    this.initStepThreeForm();

    this.isSuccess = false;
    const data: any = this.location.getState();
    console.log(data['type']);
    this.registrationType = data['type'];
  }

  initStepOneForm() {
    this.stepOneForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^0\d{9}$/),
        ],
      ],
    });
  }

  initStepTwoForm() {
    this.stepTwoForm = this.fb.group({
      otpCode: ['', Validators.required],
    });
  }

  initStepThreeForm() {
    this.stepThreeForm = this.fb.group({
      password: ['', Validators.required],
      cfrmPassword: ['', Validators.required],
    });
  }

  individualFormSubmit() {
    if (
      this.stepOneForm.valid &&
      this.stepTwoForm.valid &&
      this.stepThreeForm.valid
    ) {
      this.registrationFullInfos.push(
        this.stepOneForm.value,
        this.stepTwoForm.value,
        this.stepThreeForm.value
      );

      this.router.navigateByUrl('/success', {
        state: { type: this.registrationType },
      });
    }
    console.log(this.registrationFullInfos);
  }

  next() {
    if (this.nextStep == Registrationstate.One) {
      this.nextStep = Registrationstate.Two; //Passage à la page Suivante
    } else if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.Three; //Up
    } else if ((this.nextStep = Registrationstate.Three)) {
      return;
    } else {
      throw new Error('The number of items cannot be negative!');
    }
  }

  back() {
    if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.One;
    } else if (this.nextStep == Registrationstate.Three) {
      this.nextStep = Registrationstate.Two;
    } else {
      return;
    }
  }
}
