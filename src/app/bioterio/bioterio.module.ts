import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BioterioRoutingModule } from './bioterio-routing.module';
import { ListBioterioComponent } from './components/list-bioterio/list-bioterio.component';


@NgModule({
  declarations: [
    ListBioterioComponent
  ],
  imports: [
    CommonModule,
    BioterioRoutingModule
  ]
})
export class BioterioModule { }
