import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertiesListComponent} from './properties-list/properties-list.component';
import {PropertiesListResolverService} from './properties-list-resolver.service';

const propertiesRoutes: Routes = [
  {path: '', component: PropertiesListComponent, resolve:{PropertiesListResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(propertiesRoutes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
