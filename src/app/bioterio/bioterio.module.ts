import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioterioRoutingModule } from './bioterio-routing.module';
import { BioterioViewComponent } from './components/bioterio-view/bioterio-view.component';
import { AddBioterioComponent } from './components/add-bioterio/add-bioterio.component';
import { BioterioDialogComponent } from './components/bioterio-dialog/bioterio-dialog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BioterioViewComponent,
    AddBioterioComponent,
    BioterioDialogComponent
  ],
  imports: [
    CommonModule,
    BioterioRoutingModule,
    SharedModule
  ]
})
export class BioterioModule { }
