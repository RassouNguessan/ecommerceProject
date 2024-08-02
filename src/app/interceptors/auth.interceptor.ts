import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService)

  const authToken = authService.getToken();

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });

  return next(authReq);
};

// .pipe(
//   catchError(() => {
//     return authService.refreshToken().pipe(
//       switchMap((res: AuthResponse) => {
//         authService.setToken(res);

//         const newReq = req.clone({
//           setHeaders: {
//             Authorization: `Bearer ${res.access_token}`
//           }
//         });

//         return next(newReq);
//       }),
//       catchError((refreshErr) => {
//         const finalError = new Error(refreshErr);

//         authService.clearToken();

//         return throwError(() => finalError);
//       })
//     )
//   })
// )