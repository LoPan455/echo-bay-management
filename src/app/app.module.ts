import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from "./shared/in-memory-data.service";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {UsersComponent} from './users/users.component';
import {ClientsComponent} from './clients/clients.component';
import {OverviewComponent} from './overview/overview.component';
import {PropertiesThumbnailComponent} from './properties/properties-thumbnail/properties-thumbnail.component';
import {PropertiesListComponent} from './properties/properties-list/properties-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ClientsComponent,
    OverviewComponent,
    PropertiesThumbnailComponent,
    PropertiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
