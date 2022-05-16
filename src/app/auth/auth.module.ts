import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
