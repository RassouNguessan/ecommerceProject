import { Routes } from "@angular/router";

export const cartRoutes: Routes = [
  {
    path: "cart-success",
    title: "Ajouter des bons à mon panier",
    loadComponent: () =>
      import("../widgets/cartsuccess/cartsuccess.component").then(
        (m) => m.CartsuccessComponent
      ),
  },
  {
    path: "cart",
    title: "Voir mon panier",
    loadComponent: () =>
      import("../pages/cart-page/cart-page.component").then(
        (m) => m.CartPageComponent
      ),
  },
];
