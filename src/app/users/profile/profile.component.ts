import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {IUser} from '../shared/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user = this.authService.currentUser;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

}
