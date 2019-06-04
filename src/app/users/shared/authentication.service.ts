import { Injectable } from '@angular/core';
import {IUser} from './model/user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: IUser;

  constructor(private router: Router, private route: ActivatedRoute) { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: "thomas",
      firstName: "Thomas",
      lastName: "Johander"
    };
    this.router.navigate(['/properties'])

  }

  isLoggedIn() {
    return !!this.currentUser;
  }



}
