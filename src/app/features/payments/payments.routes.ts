import { Routes } from "@angular/router";


export const paymentsRoutes: Routes = [
    {
        path: 'payment',
        loadComponent: () => import("./components/payment/payment.component").then(m => m.PaymentComponent)

    },
];