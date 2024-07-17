import { Routes } from "@angular/router";
import { CompanyComponent } from "./components/body/forms/register/company/company.component";
import { IndividualComponent } from "./components/body/forms/register/individual/individual.component";
import { RegisterComponent } from "./components/body/forms/register/register.component";
import { BodyComponent } from "./components/body/body.component";

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/body/body.component').then(m => m.BodyComponent),
    },
    {

        path: 'register',
        title: 'Registration',
        children: [
            {
                path: '',
                loadComponent: () => import('./components/body/forms/register/register.component').then(m => m.RegisterComponent),
            },
            {
                path: 'individual',
                loadComponent: () => import('./components/body/forms/register/individual/individual.component').then(m => m.IndividualComponent),
            },
            {
                path: 'company',
                loadComponent: () => import('./components/body/forms/register/company/company.component').then(m => m.CompanyComponent),
            },
        ]
    },
];