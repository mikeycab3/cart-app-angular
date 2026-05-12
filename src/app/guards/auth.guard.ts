import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

   if(userService.isLoggedIn()){
     return true;
   }
  router.navigate(['/lading-page'])
  return true;
};
