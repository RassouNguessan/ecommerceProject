import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BeneficiaryListComponent } from "../../widgets/beneficiary-list/beneficiary-list.component";

@Component({
  selector: 'app-distribution-summary-page',
  standalone: true,
  imports: [NavbarComponent, BeneficiaryListComponent],
  templateUrl: './distribution-summary-page.component.html',
  styleUrl: './distribution-summary-page.component.scss'
})
export class DistributionSummaryPageComponent {

}
