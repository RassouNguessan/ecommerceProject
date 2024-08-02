import { Routes } from "@angular/router";

export const favoritesRoutes: Routes = [
  {
    path: "favorites",
    loadComponent: () =>
      import("../pages/my-favorite-page/my-favorite-page.component").then(
        (m) => m.MyFavoritePageComponent
      ),
  },
];
