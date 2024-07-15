import { Routes } from "@angular/router";

export const ordersRoutes: Routes = [
    {
        path: 'order',
        loadComponent: () => import("./components/order/order.component").then(m => m.OrderComponent)
    },
    {
        path: 'distributed',
        loadComponent: () => import("./components/distributed/distributed.component").then(m => m.DistributedComponent)
    },
    {
        path: 'distributedindividual',
        loadComponent: () => import("./components/distributeinduvidual/distributeinduvidual.component").then(m => m.DistributeinduvidualComponent)
    },
    {
        path: 'buy',
        loadComponent: () => import("./components/buyvouchers/buyvouchers.component").then(m => m.BuyvouchersComponent)
    },
    {
        path: 'detailorder',
        loadComponent: () => import("./components/detailorder/detailorder.component").then(m => m.DetailorderComponent)
    },
    {
        path: 'myorder',
        loadComponent: () => import("./components/myorder/myorder.component").then(m => m.MyorderComponent)
    },
 
    {
        path: 'channeldistrubution',
        loadComponent: () => import("../orders/components/channeldistribution/channeldistribution.component").then(m => m.ChanneldistributionComponent)
    },
    {
        path: 'success',
        loadComponent: () => import("../../shared/components/success/success.component").then(m => m.SuccessComponent)
    },
    {
        path: 'ordersucess',
        loadComponent: () => import("./components/order-success/order-success.component").then(m => m.OrderSuccessComponent)
    }
];
