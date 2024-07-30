import { Routes } from "@angular/router";
import { authGuard } from "../guars/auth.guard";

export const purchasesRoutes: Routes = [
  {
    path: "dashboard",
    title: "Acceuil",
    canActivate: [authGuard],
    loadComponent: () =>
      import("../pages/dashboard-page/dashboard-page.component").then(
        (m) => m.DashboardPageComponent
      ),
  },
  {
    path: "purchaseavailable",
    title: "Détail de l'achat",
    loadComponent: () =>
      import("../widgets/purchase-available/purchase-available.component").then(
        (m) => m.PurchaseAvailableComponent
      ),
  },
  {
    path: "voucher/:id",
    title: "Détail du voucher",
    loadComponent: () =>
      import("../pages/voucher-page/voucher-page.component").then(
        (m) => m.VoucherPageComponent
      ),
  },
];
