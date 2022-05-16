import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscentesRoutingModule } from './discentes-routing.module';
import { AddDiscenteComponent } from './components/add-discente/add-discente.component';
import { DiscenteDialogComponent } from './components/discente-dialog/discente-dialog.component';
import { DiscentesViewComponent } from './components/discentes-view/discentes-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DiscentesRoutingModule,
    SharedModule
  ],
  declarations: [
    AddDiscenteComponent,
    DiscenteDialogComponent,
    DiscentesViewComponent
  ]
})
export class DiscentesModule { }
