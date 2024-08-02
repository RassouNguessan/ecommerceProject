import { Routes } from "@angular/router";

export const paymentsRoutes: Routes = [
  {
    path: "payment",
    loadComponent: () =>
      import("../pages/payment-method-page/payment-method-page.component").then(
        (m) => m.PaymentMethodPageComponent
      ),
  },
  {
    path: "payment-otp",
    loadComponent: () =>
      import("../pages/payment-otp-page/payment-otp-page.component").then(
        (m) => m.PaymentOtpPageComponent
      ),
  },
];
