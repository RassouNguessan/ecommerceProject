import { Component } from '@angular/core';
import { MeansPaymentComponent } from "../../widgets/means-payment/means-payment.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";

@Component({
  selector: 'app-payment-method-page',
  standalone: true,
  imports: [MeansPaymentComponent, NavbarComponent],
  templateUrl: './payment-method-page.component.html',
  styleUrl: './payment-method-page.component.scss'
})
export class PaymentMethodPageComponent {

}
