import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
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
  countries: Dropdown[] = [];
  enterprises: Dropdown[] = [];
  categories: Dropdown[] = [];
  subCategories: Dropdown[] = [];

  registrationType?: string;
  stepOneForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    sociale: new FormControl("", Validators.required),
    fixedNumber: new FormControl("", Validators.required),
    enterpriseEmail: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phoneNumber: new FormControl("", [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern(/^0\d{9}$/),
    ]),
    country: new FormControl<Dropdown | null>(null, Validators.required),
  });
  stepTwoForm = new FormGroup({
    otpCode: new FormControl("", Validators.required),
  });
  stepThreeForm = new FormGroup(
    {
      enterpriseType: new FormControl<Dropdown | null>(
        null,
        Validators.required
      ),
      cfrmPassword: new FormControl<Dropdown | null>(null, Validators.required),
      categPro: new FormControl<Dropdown | null>(null, Validators.required),
      subCategory: new FormControl<Dropdown | null>(null, Validators.required),
      websiteUrl: new FormControl("", Validators.required),
    },
    { validators: this.customPasswordMatching.bind(this) }
  );
  stepFourForm = new FormGroup({
    password: new FormControl("", Validators.required),
    cfrmPassword: new FormControl("", Validators.required),
  });
  isSuccess?: boolean;
  showPassword = false;
  registrationFullInfos: Record<string, unknown>[] = [];

  constructor(
    private router: Router,
    private location: Location
  ) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    this.isSuccess = false;
    const data = this.location.getState() as Record<string, string>;
    this.registrationType = data?.["type"];

    this.countries = [
      { name: "Côte d'Ivoire", code: "CI" },
      { name: "Bénin", code: "BN" },
      { name: "Mali", code: "ML" },
      { name: "Burkina Faso", code: "BF" },
    ];

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

  public customPasswordMatching(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.get("password")?.value;
    const cfrmPassword = control.get("cfrmPassword")?.value;

    return password === cfrmPassword ? null : { passwordMismatchError: true };
  }

  companyFormSubmit() {
    if (
      this.stepOneForm?.valid &&
      this.stepTwoForm?.valid &&
      this.stepThreeForm?.valid &&
      this.stepFourForm?.valid
    ) {
      this.registrationFullInfos.push(
        this.stepOneForm.value,
        this.stepTwoForm.value,
        this.stepThreeForm.value,
        this.stepFourForm.value
      );

      this.router.navigateByUrl("/success", {
        state: {
          type: this.registrationType,
          suscriberEmail: this.stepOneForm?.value.enterpriseEmail,
        },
      });
    }
    console.log(this.registrationFullInfos);
  }

  next() {
    if (this.nextStep == Registrationstate.One) {
      this.nextStep = Registrationstate.Two; //Passage à la page Suivante
    } else if (this.nextStep == Registrationstate.Two) {
      this.nextStep = Registrationstate.Three;
    } else if ((this.nextStep = Registrationstate.Three)) {
      this.nextStep = Registrationstate.Last;
    } else if ((this.nextStep = Registrationstate.Last)) {
      return;
    } else {
      throw new Error("The number of items cannot be negative!");
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

  // new FormGroup({
  //       otpCode: new FormControl("", Validators.required),
  //     });
}
