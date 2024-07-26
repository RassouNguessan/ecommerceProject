import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { PaymentComponent } from "../../widgets/payment/payment.component";

@Component({
  selector: 'app-payment-otp-page',
  standalone: true,
  imports: [NavbarComponent, PaymentComponent],
  templateUrl: './payment-otp-page.component.html',
  styleUrl: './payment-otp-page.component.scss'
})
export class PaymentOtpPageComponent {

}
