import { Routes } from "@angular/router";

export const promotionsRoutes: Routes = [
  {
    path: "promotion",
    loadComponent: () =>
      import("../pages/promotions-page/promotions-page.component").then(
        (m) => m.PromotionsPageComponent
      ),
  },
];
