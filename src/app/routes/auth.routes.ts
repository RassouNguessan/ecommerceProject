import { Routes } from "@angular/router";

export const authRoutes: Routes = [
  {
    path: "login",
    loadComponent: () =>
      import("../widgets/body/body.component").then((m) => m.BodyComponent),
  },
  {
    path: "register",
    title: "Registration",
    children: [
      {
        path: "",
        loadComponent: () =>
          import("../widgets/register/register.component").then(
            (m) => m.RegisterIndexComponent
          ),
      },
      {
        path: "individual",
        loadComponent: () =>
          import("../widgets/individual/individual.component").then(
            (m) => m.IndividualComponent
          ),
      },
      {
        path: "company",
        loadComponent: () =>
          import("../widgets/company/company.component").then(
            (m) => m.CompanyComponent
          ),
      },
    ],
  },
];
