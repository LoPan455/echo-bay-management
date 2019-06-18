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
import {AuthenticationService} from './users/shared/authentication.service';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemPropertiesService} from './properties/shared/in-mem-properties.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    OverviewComponent,
    HeaderComponent,
    SideNavComponent,
    NotFoundComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPropertiesService),
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
