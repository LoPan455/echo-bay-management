import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularMaterialModule} from "./shared/angular-material/angular-material.module";
import {ClientsComponent} from './clients/clients.component';
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
import {PropertiesModule} from './properties/properties.module';
import {AuthenticationService} from './users/shared/authentication.service';
import {FormsModule} from '@angular/forms';

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
    NotFoundComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    PropertiesModule,
    AppRoutingModule,
  ],
  providers: [
    PropertiesListResolverService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
