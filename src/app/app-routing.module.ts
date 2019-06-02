import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {UsersRoutingModule} from './users/users-routing.module';
import {ClientsModule} from './clients/clients.module';
import {PropertiesModule} from './properties/properties.module';

const routes: Routes = [
  {path: 'users', loadChildren: './users/users.module#UsersModule'},
  {path: 'deals', loadChildren: './deals/deals.module#DealsModule'},
  {path: 'overview', component: OverviewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ClientsModule,
    PropertiesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
