import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthController } from '../../controllers/auth.controller';
import { AuthLoginModel } from '../../models/auth';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  @Input() auth: AuthLoginModel;

  pressEnterEvent = function(e: KeyboardEvent){
    if(e.key == "Enter"){
      document.getElementById("btnLogin")!.click();
    }
  }

  constructor(private authController: AuthController, private router:Router) { }

  ngOnInit(): void {
    document.addEventListener('keydown', this.pressEnterEvent);
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.pressEnterEvent);
  }

  login(){
    this.authController.login(this.auth).then(() => this.router.navigate(['/']));

  }

}
