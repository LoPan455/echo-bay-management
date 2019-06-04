import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private authService: AuthenticationService, private router: Router) { }

  logout() {
    this.authService.currentUser = null;
    this.router.navigate(['/users/login'])
  }
}

