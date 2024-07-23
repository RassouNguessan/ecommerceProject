import { Routes } from "@angular/router";

export const promotionsRoutes: Routes = [
  {
    path: "promotion",
    loadComponent: () =>
      import("../widgets/promotions/promos.component").then(
        (m) => m.PromosComponent
      ),
  },
];
