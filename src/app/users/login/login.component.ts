import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  userName: any;
  password: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('started....');
  }

  login(formValues) {
    console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password);
  }

}
