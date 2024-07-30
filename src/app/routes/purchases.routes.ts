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
    path: "vouchers",
    title: "Mes bons d'achats",
    loadComponent: () =>
      import("../pages/my-vouchers-page/my-vouchers-page.component").then(
        (m) => m.MyVouchersPageComponent
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
  {
    path: "purchase/detail",
    loadComponent: () =>
      import("../pages/order-detail-page/order-detail-page.component").then(
        (m) => m.OrderDetailPageComponent
      ),
  },
];
