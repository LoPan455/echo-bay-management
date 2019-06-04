import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ClientsModule} from './clients/clients.module';

const routes: Routes = [
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'deals', loadChildren: './deals/deals.module#DealsModule'},
  {path: 'properties', loadChildren: './properties/properties.module#PropertiesModule'},
  {path: 'overview', component: OverviewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ClientsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
