import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtocolosRoutingModule } from './protocolos-routing.module';
import { ListProtocolosComponent } from './components/list-protocolos/list-protocolos.component';


@NgModule({
  declarations: [
    ListProtocolosComponent
  ],
  imports: [
    CommonModule,
    ProtocolosRoutingModule
  ]
})
export class ProtocolosModule { }
