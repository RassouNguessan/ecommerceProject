import { Component, Input } from '@angular/core';
// import { Individual, Enterprise } from '../../../types';
import { ChoiceComponent } from '../choice/choice.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  @Input() individual?: boolean;
  // Forms
  individualForm: FormGroup;
  companyForm: FormGroup;
  extraCompanyForm: FormGroup;
  optForm: FormGroup;
  passwordForm: FormGroup;

  //

  constructor(private fb: FormBuilder) {
    this.individualForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      denomination: ['', Validators.required],
      fixedNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required], 
      dob: ['', Validators.required],
      enterpriseEmail: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.optForm = this.fb.group({
      code: ['', Validators.required],
    });
    this.passwordForm = this.fb.group({
      password: ['', Validators.required],
      cfrmPassword: ['', Validators.required],
    });
    this.extraCompanyForm = this.fb.group({
      enterpriseType: ['', Validators.required],
      professionalCategory: ['', Validators.required],
      professionalSubCategory: ['', Validators.required],
      enterpriseUrl: [''],
    });
  }


  // constructor() {}

}
