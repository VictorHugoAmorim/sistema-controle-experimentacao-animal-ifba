import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscentesViewComponent } from './components/discentes-view/discentes-view.component';

const routes: Routes = [
  {path: "", component: DiscentesViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscentesRoutingModule { }
