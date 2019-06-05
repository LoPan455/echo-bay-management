import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {IUser} from '../shared/model/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user = this.authService.currentUser;
  profileForm: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })

  }

}
