import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BeneficiaryListComponent } from "../../widgets/beneficiary-list/beneficiary-list.component";
import { OrderComponent } from "../../widgets/order/order.component";

@Component({
  selector: 'app-order-detail-page',
  standalone: true,
  imports: [NavbarComponent, BeneficiaryListComponent, OrderComponent],
  templateUrl: './order-detail-page.component.html',
  styleUrl: './order-detail-page.component.scss'
})
export class OrderDetailPageComponent {

}
