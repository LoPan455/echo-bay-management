import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule, MatDividerModule, MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AngularMaterialModule {
}
