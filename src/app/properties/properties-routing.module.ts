import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertiesListComponent} from './properties-list/properties-list.component';
import {PropertiesListResolverService} from './properties-list-resolver.service';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {PropertiesDetailComponent} from './properties-detail/properties-detail.component';
import {PropertiesRouteActivatorService} from './properties-route-activator.service';

const routes: Routes = [
  {path: 'properties', component: PropertiesListComponent, resolve: {propertyHoldings:PropertiesListResolverService}},
  {path: 'properties/new', component: CreatePropertyComponent},
  {
    path: 'properties/:id',
    component: PropertiesDetailComponent,
    canActivate: [PropertiesRouteActivatorService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
