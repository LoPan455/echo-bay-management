import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import {PropertiesListComponent} from './properties-list/properties-list.component';
import {PropertiesThumbnailComponent} from './properties-thumbnail/properties-thumbnail.component';
import {PropertiesDetailComponent} from './properties-detail/properties-detail.component';
import {AngularMaterialModule} from '../shared/angular-material/angular-material.module';
import {PropertiesListResolverService} from './properties-list-resolver.service';

@NgModule({
  declarations: [
    PropertiesListComponent,
    PropertiesThumbnailComponent,
    PropertiesDetailComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PropertiesRoutingModule
  ],
  providers: [
    PropertiesListResolverService,
  ]
})
export class PropertiesModule { }
