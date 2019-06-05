import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../shared/angular-material/angular-material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users.component";
import {UsersRoutingModule} from './users-routing.module';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UsersRoutingModule,
    FlexModule
  ],
})
export class UsersModule {
}
