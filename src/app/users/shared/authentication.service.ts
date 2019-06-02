import { Injectable } from '@angular/core';
import {IUser} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: "thomas",
      firstName: "Thomas",
      lastName: "Johander"
    }
  }

  isLoggedIn() {
    return !!this.currentUser;
  }


  constructor() { }
}
