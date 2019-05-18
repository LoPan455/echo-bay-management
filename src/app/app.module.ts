import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { PropertiesComponent } from './properties/properties.component';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesThumbnailComponent } from './properties/properties-thumbnail/properties-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ClientsComponent,
    PropertiesComponent,
    OverviewComponent,
    PropertiesThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
