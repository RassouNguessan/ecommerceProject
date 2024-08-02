import { Component } from "@angular/core";
import { MeansPaymentComponent } from "../../widgets/means-payment/means-payment.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { SecuritizationpayComponent } from "../../widgets/securitizationpay/securitizationpay.component";
import { DetailpaymentComponent } from "../../widgets/detailpayment/detailpayment.component";
import { CardVisaMastercardPaymentComponent } from "../../widgets/card-visa-mastercard-payment/card-visa-mastercard-payment.component";

@Component({
  selector: "app-payment-method-page",
  standalone: true,
  imports: [
    MeansPaymentComponent,
    NavbarComponent,
    BackButtonComponent,
    SecuritizationpayComponent,
    DetailpaymentComponent,
    CardVisaMastercardPaymentComponent,
  ],
  templateUrl: "./payment-method-page.component.html",
  styleUrl: "./payment-method-page.component.scss",
})
export class PaymentMethodPageComponent {}
