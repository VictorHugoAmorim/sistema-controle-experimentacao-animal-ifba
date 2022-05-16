import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './shared/components/dashboard-view/dashboard-view.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: DashboardViewComponent, children: [
    {path: "animais", data:{'routeName': 'Animais'}, loadChildren: () => import('./animais/animais.module').then(m => m.AnimaisModule)},
    {path: "discentes", data:{'routeName': 'Discentes'}, loadChildren: () => import('./discentes/discentes.module').then(m => m.DiscentesModule)},
    {path: "bioterio", data:{'routeName': 'Bioterio'}, loadChildren: () => import('./bioterio/bioterio.module').then(m => m.BioterioModule)},
    {path: "docentes", data:{'routeName': 'Docentes'}, loadChildren: () => import('./docentes/docentes.module').then(m => m.DocentesModule)},
    {path: "protocolos", data:{'routeName': 'Protocolos'}, loadChildren: () => import('./protocolos/protocolos.module').then(m => m.ProtocolosModule)},
    {path: "", redirectTo: "docentes", pathMatch: "full"}
  ],
  canActivate: [AuthGuard]
  },
  {path: "auth", data:{'routeName': 'Auth'}, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
