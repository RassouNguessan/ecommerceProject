import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImgBlockComponent } from "../img-block/img-block.component";
import { FormsComponent } from "../forms/forms.component";
import { RegisterIndexComponent } from "../register/register.component";
import { IndividualComponent } from "../individual/individual.component";
import { CompanyComponent } from "../company/company.component";

@Component({
  selector: "app-body",
  standalone: true,
  templateUrl: "./body.component.html",
  styleUrl: "./body.component.scss",
  imports: [
    FormsComponent,
    CommonModule,
    ImgBlockComponent,
    RegisterIndexComponent,
    IndividualComponent,
    CompanyComponent,
  ],
})
export class BodyComponent {
  // @Input() step: string;
  // @Output() myEvent = new EventEmitter();
}
