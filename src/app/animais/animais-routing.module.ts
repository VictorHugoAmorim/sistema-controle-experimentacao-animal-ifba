import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimaisComponent } from './components/list-animais/list-animais.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {path: "", component: ListAnimaisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [ListAnimaisComponent],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
