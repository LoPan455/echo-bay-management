import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {OverviewComponent} from "./overview/overview.component";
import {PropertiesListComponent} from "./properties/properties-list/properties-list.component";
import {PropertiesDetailComponent} from './properties/properties-detail/properties-detail.component';
import {CreatePropertyComponent} from './properties/create-property/create-property.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PropertiesRouteActivatorService} from './properties/properties-route-activator.service';
import {PropertiesListResolverService} from './properties/properties-list-resolver.service';

const routes: Routes = [
  {path: 'users', loadChildren:'./users/users.module#UsersModule' },
  {path: 'clients', component: ClientsComponent},
  {path: 'properties', component: PropertiesListComponent, resolve: {propertyHoldings:PropertiesListResolverService}},
  {path: 'properties/new', component: CreatePropertyComponent},
  {
    path: 'properties/:id',
    component: PropertiesDetailComponent,
    canActivate: [PropertiesRouteActivatorService]
  },
  {path: 'overview', component: OverviewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
