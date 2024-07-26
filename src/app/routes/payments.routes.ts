import { Routes } from "@angular/router";

export const paymentsRoutes: Routes = [
  {
    path: "payment-otp",
    loadComponent: () =>
      import("../pages/payment-otp-page/payment-otp-page.component").then(
        (m) => m.PaymentOtpPageComponent
      ),
    // loadComponent: () =>
    //   import("../widgets/payment/payment.component").then(
    //     (m) => m.PaymentComponent
    //   ),
  },
  {
    path: "payment",
    loadComponent: () =>
      import("../pages/payment-method-page/payment-method-page.component").then(
        (m) => m.PaymentMethodPageComponent
      ),
  },
];
