import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { OverviewComponent } from './overview/overview.component';
import { PropertiesThumbnailComponent } from './properties/properties-thumbnail/properties-thumbnail.component';
import {PropertiesListComponent} from "./properties/properties-list/properties-list.component";
import {MatCardModule} from "@angular/material";
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PropertiesDetailComponent } from './properties/properties-detail/properties-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ClientsComponent,
    OverviewComponent,
    PropertiesListComponent,
    PropertiesThumbnailComponent,
    HeaderComponent,
    SideNavComponent,
    PropertiesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularMaterialModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
