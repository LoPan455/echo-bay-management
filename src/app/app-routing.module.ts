import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {ClientsComponent} from "./clients/clients.component";
import {PropertiesComponent} from "./properties/properties.component";
import {OverviewComponent} from "./overview/overview.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'properties', component: PropertiesComponent},
  { path: 'overview', component: OverviewComponent },

  { path: '', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
