import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBioterioComponent } from './components/list-bioterio/list-bioterio.component';

const routes: Routes = [
  {path: "", component: ListBioterioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioterioRoutingModule { }
