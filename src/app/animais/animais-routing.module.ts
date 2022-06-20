import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AnimalViewComponent } from './components/animal-view/animal-view.component';
const routes: Routes = [
  {path: "", component: AnimalViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
