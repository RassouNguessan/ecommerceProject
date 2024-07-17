import { Routes } from "@angular/router";


export const paymentsRoutes: Routes = [
    {
        path: 'payment',
        loadComponent: () => import("./components/payment/payment.component").then(m => m.PaymentComponent)

    },
    {
        path: 'moyen-payment',
        loadComponent: () => import("./components/means-payment/means-payment.component").then(m => m.MeansPaymentComponent)

    },
];