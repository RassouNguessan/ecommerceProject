import { Routes } from "@angular/router";

export const routes: Routes = [
  // { path: "", redirectTo: "/widgets", pathMatch: "full" },
  {
    path: "",
    loadComponent: () =>
      import("../pages/login-page/login-page.component").then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: "widgets",
    loadComponent: () =>
      import("../pages/widgets-page/widgets-page.component").then(
        (m) => m.WidgetsPageComponent
      ),
  },
  {
    path: "",
    loadChildren: () => import("./auth.routes").then((m) => m.authRoutes),
  },
  {
    path: "",
    loadChildren: () =>
      import("./purchases.routes").then((m) => m.purchasesRoutes),
  },
  {
    path: "",
    loadChildren: () =>
      import("./payments.routes").then((m) => m.paymentsRoutes),
  },
  {
    path: "",
    loadChildren: () =>
      import("./promotions.routes").then((m) => m.promotionsRoutes),
  },
  {
    path: "",
    loadChildren: () => import("./cart.routes").then((m) => m.cartRoutes),
  },
  {
    path: "",
    loadChildren: () => import("./orders.routes").then((m) => m.ordersRoutes),
  },
  {
    path: "",
    loadChildren: () =>
      import("./favorites.routes").then((m) => m.favoritesRoutes),
  },

  {
    path: "loading",

    loadComponent: () =>
      import("../widgets/loading-charge/loading-charge.component").then(
        (m) => m.LoadingChargeComponent
      ),
  },

  {
    path: "loading-charge",
    loadComponent: () =>
      import("../widgets/loading-charge/loading-charge.component").then(
        (m) => m.LoadingChargeComponent
      ),
  },
  {
    path: "quantity",
    loadComponent: () =>
      import("../widgets/quantity-button/quantity-button.component").then(
        (m) => m.QuantityButtonComponent
      ),
  },
  {
    path: "**",
    title: "Page Not Found",
    loadComponent: () =>
      import("../widgets/page-not-found/page-not-found.component").then(
        (m) => m.PageNotFoundComponent
      ),
  },
  // { path: "", redirectTo: "/login", pathMatch: "full" }, // redirect to `first-component`
];
