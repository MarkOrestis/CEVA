import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';

const key = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(): boolean {
    // TODO Implement CanActivate Service to use CAS Creditials
    if (localStorage.getItem(key) == null
      || localStorage.getItem(key) !== 'true') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
