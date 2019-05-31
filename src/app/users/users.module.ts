import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";

import {UsersRoutingModule} from './users-routing.module';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users.component";

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule
  ]
})
export class UsersModule {
}
