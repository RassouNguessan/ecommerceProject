import { Routes } from "@angular/router";

export const cartRoutes: Routes = [
    {
        path: 'cartsuccess',
        loadComponent: () => import('./components/cartsuccess/cartsuccess.component').then(m => m.CartsuccessComponent),
    },
];