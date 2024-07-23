import { Routes } from "@angular/router";

export const purchasesRoutes: Routes = [
  {
    path: "purchase",
    loadComponent: () =>
      import("../widgets/purchase/purchase.component").then(
        (m) => m.PurchaseComponent
      ),
  },
  {
    path: "purchaseavailable",
    loadComponent: () =>
      import("../widgets/purchase-available/purchase-available.component").then(
        (m) => m.PurchaseAvailableComponent
      ),
  },
  {
    path: "detail/:id",
    loadComponent: () =>
      import("../widgets/card-detail/card-detail.component").then(
        (m) => m.CardDetailComponent
      ),
  },
  {
    path: "bannier",
    loadComponent: () =>
      import("../widgets/bannier-1/bannier-1.component").then(
        (m) => m.Bannier1Component
      ),
  },
  {
    path: "purchasePromo",
    loadComponent: () =>
      import("../widgets/purchase-promo/purchase-promo.component").then(
        (m) => m.PurchasePromoComponent
      ),
  },
];
