import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DealsListComponent} from './deals-list/deals-list.component';
import { DealsRoutingModule } from './deals-routing.module';

@NgModule({
  declarations: [DealsListComponent],
  imports: [
    CommonModule,
    DealsRoutingModule
  ]
})
export class DealsModule {
}
