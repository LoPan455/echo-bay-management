import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../shared/angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users.component";
import {MatInputModule} from '@angular/material';
import {UsersRoutingModule} from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UsersRoutingModule
  ],
})
export class UsersModule {
}
