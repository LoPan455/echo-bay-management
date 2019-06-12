import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import {PropertiesListComponent} from './properties-list/properties-list.component';
import {PropertiesThumbnailComponent} from './properties-thumbnail/properties-thumbnail.component';
import {PropertiesDetailComponent} from './properties-detail/properties-detail.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';
import {PropertiesListResolverService} from './properties-list-resolver.service';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemPropertiesService} from './shared/in-mem-properties.service';
import { PropertyTableComponent } from './property-table/property-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertiesThumbnailComponent,
    PropertiesDetailComponent,
    CreatePropertyComponent,
    PropertyTableComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPropertiesService),
    PropertiesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    PropertiesListResolverService,
  ]
})
export class PropertiesModule { }
