import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: "", component: AuthPageComponent}
];

const components: any[] = [
  AuthPageComponent,
  UserInputComponent,
  PasswordInputComponent,
  LoginButtonComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [...components]
})
export class AuthRoutingModule { }
