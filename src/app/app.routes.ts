import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/purchases/purchases.routes').then(m => m.purchasesRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/payments/payments.routes').then(m => m.paymentsRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/promotions/promotions.routes').then(m => m.promotionsRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/cart/cart.routes').then(m => m.cartRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/orders/orders.routes').then(m => m.ordersRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/favorites/favorites.routes').then(m => m.favoritesRoutes)
  },
  
  {
    path: 'loading',

    loadComponent: () => import('./shared/components/loading-charge/loading-charge.component').then(m => m.LoadingChargeComponent)
  },

  {
    path: 'loading-charge',
    loadComponent: () => import('./shared/components/loading-charge/loading-charge.component').then(m => m.LoadingChargeComponent)
  },
  {
    path: 'quantity',
    loadComponent: () => import('./shared/components/quantity-button/quantity-button.component').then(m => m.QuantityButtonComponent)
  },
  {
    path: '**',
    title: 'Page Not Found',
    loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  },
  


]