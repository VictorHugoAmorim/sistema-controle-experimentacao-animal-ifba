import { Component, OnInit, Input, SkipSelf } from '@angular/core';
import { FormControl, FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  viewProviders:[
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    }
  ]
})
export class PasswordInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
