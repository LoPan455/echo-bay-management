import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {UsersModule} from './users/index';
import {ClientsComponent} from './clients/index';
import {OverviewComponent} from './overview/index';
import {HeaderComponent} from './header/index';
import {SideNavComponent} from './side-nav/side-nav.component';
import {NotFoundComponent} from './errors/index';
import {
  PropertiesThumbnailComponent,
  PropertiesListComponent,
  PropertiesDetailComponent,
  PropertiesListResolverService,
  CreatePropertyComponent
} from './properties/index';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    OverviewComponent,
    PropertiesListComponent,
    PropertiesThumbnailComponent,
    HeaderComponent,
    SideNavComponent,
    PropertiesDetailComponent,
    CreatePropertyComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    UsersModule,
  ],
  providers: [
    PropertiesListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
