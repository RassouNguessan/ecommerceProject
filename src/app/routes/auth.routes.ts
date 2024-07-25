import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("../pages/login-page/login-page.component").then((m) => m.LoginPageComponent),
  },
  {
    path: "register",
    title: "Registration",
    children: [
      {
        path: "",
        loadComponent: () =>
          import("../pages/register-page/register-page.component").then(
            (m) => m.RegisterPageComponent
          ),
      },
      {
        path: "individual",
        loadComponent: () =>
          import("../pages/register-individual-page/register-individual-page.component").then(
            (m) => m.RegisterIndividualPageComponent
          ),
      },
      {
        path: "company",
        loadComponent: () =>
          import("../pages/register-enterprise-page/register-enterprise-page.component").then(
            (m) => m.RegisterEnterprisePageComponent
          ),
      },
    ],
  },
];
