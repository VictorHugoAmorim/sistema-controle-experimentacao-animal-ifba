import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioterioViewComponent } from './components/bioterio-view/bioterio-view.component';

const routes: Routes = [
  {path: "", component: BioterioViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioterioRoutingModule { }
