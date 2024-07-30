import { Routes } from "@angular/router";

export const ordersRoutes: Routes = [
  {
    path: "orders",
    title: "Mes commandes",
    children: [
      {
        path: "",
        title: "Mes Commandes",
        loadComponent: () =>
          import("../pages/my-orders-page/my-orders-page.component").then(
            (m) => m.MyOrdersPageComponent
          ),
      },
      {
        path: "details",
        title: "détail de ma commande",
        loadComponent: () =>
          import(
            "../pages/my-orders-details-page/my-orders-details-page.component"
          ).then((m) => m.MyOrdersDetailsPageComponent),
      },
    ],
  },
  {
    path: "grouped-distribution",
    title: "Distribution groupée de bons d'achats",
    loadComponent: () =>
      import(
        "../pages/grouped-distribution-page/grouped-distribution-page.component"
      ).then((m) => m.GroupedDistributionPageComponent),
  },
  {
    path: "distribution",
    title: "Distribution de bons d'achats",
    loadComponent: () =>
      import("../pages/distribution-page/distribution-page.component").then(
        (m) => m.DistributionPageComponent
      ),
  },
  {
    path: "buy",
    loadComponent: () =>
      import("../pages/add-to-cart-page/add-to-cart-page.component").then(
        (m) => m.AddToCartPageComponent
      ),
  },
  // {
  //   path: "order-detail",
  //   loadComponent: () =>
  //     import(
  //       "../pages/my-orders-details-page/my-orders-details-page.component"
  //     ).then((m) => m.MyOrdersDetailsPageComponent),
  // },
  // {
  //   path: "myorder",
  //   loadComponent: () =>
  //     import("../widgets/myorder/myorder.component").then(
  //       (m) => m.MyorderComponent
  //     ),
  // },

  

  {
    path: "channeldistrubution",
    title: "Mes Commandes",
    loadComponent: () =>
      import(
        "../widgets/channeldistribution/channeldistribution.component"
      ).then((m) => m.ChanneldistributionComponent),
  },
  // {
  //   path: "ordersucess",
  //   title: "Achats effectuées avec succès",
  //   loadComponent: () =>
  //     import("../widgets/order-success/order-success.component").then(
  //       (m) => m.OrderSuccessComponent
  //     ),
  // },
  {
    path: "distribution-channel",
    title: "Modal de choix du canal de distribution",
    loadComponent: () =>
      import(
        "../widgets/distribution-channel/distribution-channel.component"
      ).then((m) => m.DistributionChannelComponent),
  },
  {
    path: "beneficiary-list",
    title: "Résumé de la liste des bénéficiaires",
    loadComponent: () =>
      import("../pages/distribution-summary-page/distribution-summary-page.component").then(
        (m) => m.DistributionSummaryPageComponent
      ),
  },
];
