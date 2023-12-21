import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const storageData = JSON.parse(localStorage.getItem('login') || '');
   
    if (!storageData || !storageData.login || storageData.role !== 'admin') {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true; 
  }

}