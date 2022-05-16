import { CommonModule, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import ptBr from '@angular/common/locales/pt';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';
registerLocaleData(ptBr)

const modules: any = [
  CommonModule,
  FormsModule,
  MatSidenavModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  RouterModule,
  MatIconModule,
  HttpClientModule,
  MatPaginatorModule,
  MatMenuModule,
  MatButtonModule,
  NgxLoadingModule.forRoot({}),
  MatSnackBarModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
]

const components: any = [
  HeaderComponent,
  SidenavComponent,
  DashboardViewComponent
]

@NgModule({
  imports: [...modules],
  declarations: [...components],
  exports: [...modules, ...components],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class SharedModule { }
