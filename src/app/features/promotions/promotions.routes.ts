import { Routes } from "@angular/router";


export const promotionsRoutes: Routes = [
    {
        path: 'promotion',
        loadComponent: () => import("./components/promos/promos.component").then(m => m.PromosComponent)
    },

];