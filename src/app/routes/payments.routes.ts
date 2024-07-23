import { Routes } from "@angular/router";

export const paymentsRoutes: Routes = [
  {
    path: "payment",
    loadComponent: () =>
      import("../widgets/payment/payment.component").then(
        (m) => m.PaymentComponent
      ),
  },
  {
    path: "moyen-payment",
    loadComponent: () =>
      import("../widgets/means-payment/means-payment.component").then(
        (m) => m.MeansPaymentComponent
      ),
  },
];
