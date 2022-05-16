import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProtocolosComponent } from './components/list-protocolos/list-protocolos.component';

const routes: Routes = [
  {path: "", component: ListProtocolosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtocolosRoutingModule { }
