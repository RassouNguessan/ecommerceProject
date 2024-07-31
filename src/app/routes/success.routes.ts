import { Routes } from "@angular/router";

export const successRoutes: Routes = [
  {
    path: "success",
    title: "Success",
    children: [
      {
        path: "",
        loadComponent: () =>
          import("../pages/success-page/success-page.component").then(
            (m) => m.SuccessPageComponent
          ),
      },
      {
        path: "cart",
        loadComponent: () =>
          import("../pages/success-cart/success-cart.component").then(
            (m) => m.SuccessCartComponent
          ),
      },
      {
        path: "purchase",
        loadComponent: () =>
          import("../pages/success-purchase/success-purchase.component").then(
            (m) => m.SuccessPurchaseComponent
          ),
      },
      {
        path: "distribution",
        loadComponent: () =>
          import("../pages/success-distribution/success-distribution.component").then(
            (m) => m.SuccessDistributionComponent
          ),
      },

    ],
  },
];
