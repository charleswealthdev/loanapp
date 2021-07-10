import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmintokenService } from './admintoken.service';

@Injectable({
  providedIn: 'root'
})
export class AdminafterlogService implements CanActivate{

  constructor(
    private token: AdmintokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 
    return this.token.loggedIn()
  }
}
