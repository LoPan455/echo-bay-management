import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DealsListComponent} from './deals-list/deals-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [DealsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'deals', component: DealsListComponent}
    ])
  ]
})
export class DealsModule {
}
