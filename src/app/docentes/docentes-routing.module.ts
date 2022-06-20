import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddDocenteComponent } from './components/add-docente/add-docente.component';
import { DocenteDialogComponent } from './components/docente-dialog/docente-dialog.component';
import { DocentesViewComponent } from './components/docentes-view/docentes-view.component';

const routes: Routes = [
  {path: "", component: DocentesViewComponent}
];

const components:any = [
  DocentesViewComponent,
  AddDocenteComponent,
  DocenteDialogComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [...components],
  exports: [RouterModule]
})
export class DocentesRoutingModule { }
