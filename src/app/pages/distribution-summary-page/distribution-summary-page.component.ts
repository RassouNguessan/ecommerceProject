import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { FrameComponent } from "../../widgets/frame/frame.component";
import { CommonModule } from "@angular/common";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { BeneficiaryListComponent } from "../../widgets/beneficiary-list/beneficiary-list.component";

@Component({
  selector: "app-distribution-summary-page",
  standalone: true,
  imports: [
    NavbarComponent,
    FrameComponent,
    CommonModule,
    NumberWithSpacesPipe,
    BeneficiaryListComponent
],
  templateUrl: "./distribution-summary-page.component.html",
  styleUrl: "./distribution-summary-page.component.scss",
})
export class DistributionSummaryPageComponent {
  
}
