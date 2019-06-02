import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DealsListComponent} from './deals-list/deals-list.component';

const dealsRoutes: Routes = [
  {path: '', component: DealsListComponent}
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(dealsRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DealsRoutingModule { }
