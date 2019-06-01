import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DealsListComponent} from './deals-list/deals-list.component';

const dealsRoutes: Routes = [
  {path: 'deals', component: DealsListComponent}
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dealsRoutes),
  ]
})
export class DealsRoutingModule { }
