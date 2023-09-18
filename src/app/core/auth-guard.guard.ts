import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
   const router=inject(Router)
   const token=localStorage.getItem('token')
   if(token){
    return true
   }
   else{
    alert("Please Login First")
    return false
   }
  
};
