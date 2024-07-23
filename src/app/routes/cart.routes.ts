import { Routes } from "@angular/router";

export const cartRoutes: Routes = [
  {
    path: "cartsuccess",
    loadComponent: () =>
      import("../widgets/cartsuccess/cartsuccess.component").then(
        (m) => m.CartsuccessComponent
      ),
  },
  {
    path: "detailbasket",
    loadComponent: () =>
      import("../widgets/detailbasket/detailbasket.component").then(
        (m) => m.DetailbasketComponent
      ),
  },
];
