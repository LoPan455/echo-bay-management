import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../users/shared/authentication.service';
import {LogoutService} from '../users/shared/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService, private logoutService: LogoutService) {
  }

  ngOnInit() {
  }

}
