import { Routes } from "@angular/router";

export const ordersRoutes: Routes = [
  {
    path: "order",
    loadComponent: () =>
      import("../pages/order-detail-page/order-detail-page.component").then((m) => m.OrderDetailPageComponent),
  },
  {
    path: "grouped-distribution",
    loadComponent: () =>
      import("../pages/grouped-distribution-page/grouped-distribution-page.component").then(
        (m) => m.GroupedDistributionPageComponent
      ),
  },
  {
    path: "distribution",
    loadComponent: () =>
      import(
        "../pages/distribution-page/distribution-page.component"
      ).then((m) => m.DistributionPageComponent),
  },
  {
    path: "buy",
    loadComponent: () =>
      import("../pages/add-to-cart-page/add-to-cart-page.component").then(
        (m) => m.AddToCartPageComponent
      ),
  },
  {
    path: "order-detail",
    loadComponent: () =>
      import("../pages/my-orders-details-page/my-orders-details-page.component").then(
        (m) => m.MyOrdersDetailsPageComponent
      ),
  },
  {
    path: "myorder",
    loadComponent: () =>
      import("../widgets/myorder/myorder.component").then(
        (m) => m.MyorderComponent
      ),
  },

  {
    path: "my-orders",
    title: "Mes commandes",
    children: [
      {
        path: "",
        loadComponent: () =>
          import("../pages/my-orders-page/my-orders-page.component").then(
            (m) => m.MyOrdersPageComponent
          ),
      },
      {
        path: "details",
        loadComponent: () =>
          import("../pages/my-orders-details-page/my-orders-details-page.component").then(
            (m) => m.MyOrdersDetailsPageComponent
          ),
      },
    ],
  },

  {
    path: "channeldistrubution",
    loadComponent: () =>
      import(
        "../widgets/channeldistribution/channeldistribution.component"
      ).then((m) => m.ChanneldistributionComponent),
  },
  {
    path: "success",
    title: "Success",
    loadComponent: () =>
      import("../widgets/success/success.component").then(
        (m) => m.SuccessComponent
      ),
  },
  {
    path: "ordersucess",
    loadComponent: () =>
      import("../widgets/order-success/order-success.component").then(
        (m) => m.OrderSuccessComponent
      ),
  },
  {
    path: "distribution-channel",
    loadComponent: () =>
      import(
        "../widgets/distribution-channel/distribution-channel.component"
      ).then((m) => m.DistributionChannelComponent),
  },
  {
    path: "beneficiary-list",
    title: "Liste des bénéficiaires",
    loadComponent: () =>
      import("../widgets/beneficiary-list/beneficiary-list.component").then(
        (m) => m.BeneficiaryListComponent
      ),
  },
];
