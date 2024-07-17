import { Routes } from "@angular/router";


export const purchasesRoutes: Routes = [
    {
        path: 'purchase',
        loadComponent: () => import("./components/purchase/purchase.component").then(m => m.PurchaseComponent)
    },
    {
        path: 'purchaseavailable',
        loadComponent: () => import("./components/purchase-available/purchase-available.component").then(m => m.PurchaseAvailableComponent)
    },
    {
        path: 'detail',
        loadComponent: () => import("./components/purchase/card-detail/card-detail.component").then(m => m.CardDetailComponent)
    },
    {
        path: 'bannier',
        loadComponent: () => import("./components/purchase/bannier-1/bannier-1.component").then(m => m.Bannier1Component)
    },

];