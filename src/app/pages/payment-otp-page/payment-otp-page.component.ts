import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { PaymentComponent } from "../../widgets/payment/payment.component";
import { MeansPaymentComponent } from "../../widgets/means-payment/means-payment.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { SecuritizationpayComponent } from "../../widgets/securitizationpay/securitizationpay.component";
import { CardVisaMastercardPaymentComponent } from "../../widgets/card-visa-mastercard-payment/card-visa-mastercard-payment.component";
import { DetailpaymentComponent } from "../../widgets/detailpayment/detailpayment.component";
import { PaymentOtpComponent } from "../../widgets/payment-otp/payment-otp.component";

@Component({
  selector: 'app-payment-otp-page',
  standalone: true,
  imports: [NavbarComponent, PaymentComponent, MeansPaymentComponent, BackButtonComponent, SecuritizationpayComponent, CardVisaMastercardPaymentComponent, DetailpaymentComponent, PaymentOtpComponent],
  templateUrl: './payment-otp-page.component.html',
  styleUrl: './payment-otp-page.component.scss'
})
export class PaymentOtpPageComponent {

}
