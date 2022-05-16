import { Component, Input, OnInit, ViewChild, SkipSelf } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
  viewProviders:[
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    }
  ]
})
export class UserInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
