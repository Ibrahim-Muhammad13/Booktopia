import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authuserGuard: CanActivateFn = (route, state) => {
  // return true;
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isAuth()) {
    console.log('authGuard: true');
    return true;
  }else{ 
    router.navigate(['/login']);
    return false;
  }
};
