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
  {
    path: 'forgot-password',
    loadComponent: () => import('../pages/forgot-password-page/forgot-password-page.component').then(m => m.ForgotPasswordPageComponent)
  },
  {
    path: 'verify-otp',
    loadComponent: () => import('../pages/verify-otp-page/verify-otp-page.component').then(m => m.VerifyOtpPageComponent)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('../pages/reset-password-page/reset-password-page.component').then(m => m.ResetPasswordPageComponent)
  },
];
