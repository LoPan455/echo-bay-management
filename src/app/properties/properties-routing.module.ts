import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PropertiesListComponent} from './properties-list/properties-list.component';
import {PropertiesListResolverService} from './properties-list-resolver.service';
import {PropertyTableComponent} from './property-table/property-table.component';

const propertiesRoutes: Routes = [
    {
      path: '',
      component: PropertiesListComponent,
      resolve: {
        propertyHoldings: PropertiesListResolverService
      }
    },
    {
      path: 'table', component: PropertyTableComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(propertiesRoutes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule {
}
