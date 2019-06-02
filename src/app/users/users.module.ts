import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users.component";
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    LoginComponent,
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    MatInputModule
  ]
})
export class UsersModule {
}
