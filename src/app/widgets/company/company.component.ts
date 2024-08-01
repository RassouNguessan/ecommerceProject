import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { CommonModule, Location } from "@angular/common";
import { RouterLink, Router } from "@angular/router";
import { DropdownModule } from "primeng/dropdown";
import { SuccessComponent } from "../success/success.component";
import { ImgBlockComponent } from "../img-block/img-block.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { Registrationstate } from "../../utils/types";
import { HttpClient } from "@angular/common/http";
import { RegisterService } from "../../services/register.service";

interface Dropdown {
  name: string;
  code: string;
}

@Component({
  selector: "app-company",
  standalone: true,
  templateUrl: "./company.component.html",
  styleUrl: "./company.component.scss",
  imports: [
    SuccessComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ImgBlockComponent,
    SecMsgComponent,
    DropdownModule,
  ],
})
export class CompanyComponent implements OnInit {
  public StateEnum = Registrationstate;
  public nextStep = Registrationstate.One;
  countries: any[] = [];
  enterprises: Dropdown[] = [];
  categories: Dropdown[] = [];
  subCategories: Dropdown[] = [];

  registrationType?: string;

  consolidatedData: any = {};
  errorMessage: string | null = null;
  otpErrorMessage: string | null = null;
  emailAlreadyExists: boolean = false;

  isSuccess?: boolean;
  registrationFullInfos: Record<string, unknown>[] = [];

  stepOneForm = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    company: new FormControl("", Validators.required),
    number_fix: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/)]),
    phone: new FormControl("", [Validators.required, Validators.maxLength(14), Validators.minLength(10), Validators.pattern(/^\+\d{1,3}\d{8,14}$/),]),
    country: new FormControl("", Validators.required),
  });

  stepTwoForm = new FormGroup({
    otpCode: new FormControl("", Validators.required),
  });

  stepThreeForm = new FormGroup({
    company_type: new FormControl("", Validators.required),
    professional_category: new FormControl("", Validators.required),
    sub_category: new FormControl("", Validators.required),
    website: new FormControl("", Validators.required),
  });

  stepFourForm = new FormGroup({
    password: new FormControl("", Validators.required),
    cfrmPassword: new FormControl("", Validators.required),
  });
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.stepFourForm = this.fb.group({
      password: ['', [Validators.required]],
      cfrmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.isSuccess = false;

    this.getCountries()

    this.enterprises = [
      { name: "S.A.R.L", code: "SARL" },
      { name: "S.A", code: "SA" },
      { name: "S.A.S", code: "SAS" },
    ];

    this.categories = [
      { name: "Activités Associatives", code: "Activités Associatives" },
      {
        name: "Administration Publique",
        code: "Administration Publique",
      },
      { name: "Aéronautique", code: "Aéronautique" },
      { name: "Autres", code: "Autres" },
    ];

    this.subCategories = [
      { name: "Sub - Catgeories 1", code: "SC1" },
      { name: "Sub - Catgeories 2", code: "SC2" },
      { name: "Sub - Catgeories 3", code: "SC3" },
      { name: "Sub - Catgeories 4", code: "SC4" },
      { name: "Autres", code: "AU" },
    ];
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const cfrmPassword = form.get('cfrmPassword');
    return password && cfrmPassword && password.value === cfrmPassword.value ? null : { mismatch: true };
  }


  getCountries() {
    this.registerService.getCountrylist().subscribe({
      next: (res: any) => {
        this.countries = res;
        console.log(this.countries, "================listes des pays");
      },
      error: (err: any) => {
        console.error("Error fetching countries:", err);
      }
    });
  }
  
  stepOneFormSubmit(){
    if (this.stepOneForm.valid) {
      this.consolidatedData = { ...this.consolidatedData, ...this.stepOneForm.value };
      this.registerService.sendOTPRegister(this.consolidatedData.email).subscribe({
        next: () => {
          this.nextStep = Registrationstate.Two;
          this.emailAlreadyExists = false;
          this.errorMessage = null;
        },
        error: (error) => {
          if (error.status === 409) { // Email already exists
            this.emailAlreadyExists = true;
            this.errorMessage = 'Cet email est déjà enregistré.';
          } else {
            this.errorMessage = error.error?.detail || 'Une erreur est survenue.';
          }
        }
      });
    }
  }

  stepTwoFormSubmit(){
    const otpCode = this.stepTwoForm.value.otpCode;
    if (otpCode) {
      if (this.stepTwoForm.valid) {
        this.consolidatedData = { ...this.consolidatedData, ...this.stepOneForm.value, ...this.stepTwoForm.value };
        const otpData = { email: this.consolidatedData.email!, otp_code: otpCode };
        
        this.registerService.verifyOTP(otpData.email, otpData.otp_code).subscribe({
          next: () => {
            this.nextStep = Registrationstate.Three;
            this.otpErrorMessage = null;
          },
          error: (error) => {
            this.otpErrorMessage = 'Code OTP invalide. Veuillez vérifier le code et réessayer.';
            // Optionnel : vider le champ OTP en cas d'erreur
            this.stepTwoForm.controls['otpCode'].setValue('');
          }
        });
      }
    } else {
      // Si le champ OTP est vide, effacer le message d'erreur
      this.otpErrorMessage = null;
    }
  }
  stepThreeFormSubmit() {
    if (this.stepThreeForm.valid) {
      this.consolidatedData = {
        ...this.consolidatedData,
        ...this.stepOneForm.value,
        ...this.stepTwoForm.value,
        ...this.stepThreeForm.value,
      };
      console.log(this.consolidatedData, "===============données final consolidé");
      this.nextStep = Registrationstate.Last;
    }
  }

  stepFourFormSubmit(){
    if (this.stepThreeForm.valid) {
      this.consolidatedData = { ...this.consolidatedData, ...this.stepOneForm.value,...this.stepTwoForm.value, ...this.stepThreeForm.value, ...this.stepFourForm.value};
      console.log(this.consolidatedData,"=============consolidatedData");
      
      this.registerService.registerProfessionnal(this.consolidatedData).subscribe({
        next: () => {
          this.router.navigateByUrl("/success");
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
    }
  }

  back() {
    if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.One; //retour à la page précédente
    } else if (this.nextStep == Registrationstate.Three) {
      this.nextStep = Registrationstate.Two;
    } else if (this.nextStep == Registrationstate.Last) {
      this.nextStep = Registrationstate.Three;
    } else {
      return;
    }
  }

}
