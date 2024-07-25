import { Component } from '@angular/core';
import { MeansPaymentComponent } from "../../widgets/means-payment/means-payment.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: 'app-payment-method-page',
  standalone: true,
  imports: [MeansPaymentComponent, NavbarComponent, FooterComponent],
  templateUrl: './payment-method-page.component.html',
  styleUrl: './payment-method-page.component.scss'
})
export class PaymentMethodPageComponent {

}
