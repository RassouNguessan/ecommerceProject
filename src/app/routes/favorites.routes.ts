import { Routes } from "@angular/router";

export const favoritesRoutes: Routes = [
  {
    path: "greatedeal",
    loadComponent: () =>
      import("../widgets/greatdeal/greatdeal.component").then(
        (m) => m.GreatdealComponent
      ),
  },
];
