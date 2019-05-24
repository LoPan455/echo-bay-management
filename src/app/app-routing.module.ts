import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {ClientsComponent} from "./clients/clients.component";
import {OverviewComponent} from "./overview/overview.component";
import {PropertiesListComponent} from "./properties/properties-list/properties-list.component";
import {PropertiesDetailComponent} from './properties/properties-detail/properties-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'properties', component: PropertiesListComponent},
  { path: 'properties/:id', component: PropertiesDetailComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
