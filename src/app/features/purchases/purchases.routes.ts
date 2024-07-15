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
 

];