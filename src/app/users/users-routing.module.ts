import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users.component";

const usersRoutes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
