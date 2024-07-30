/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    router.navigateByUrl("login");
    return false
  }
  return true;
};
