import { Routes } from "@angular/router";

export const favoritesRoutes: Routes = [
    {
        path: 'greatedeal',
        loadComponent: () => import("../favorites/components/greatdeal/greatdeal.component").then(m => m.GreatdealComponent)
    },
    {
        path: 'favoris',
        loadComponent: () => import("../favorites/components/favoris/favoris.component").then(m => m.FavorisComponent)
    },
];