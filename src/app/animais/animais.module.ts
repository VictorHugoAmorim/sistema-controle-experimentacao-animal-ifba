import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalDialogComponent } from './components/animal-dialog/animal-dialog.component';
import { AnimalViewComponent } from './components/animal-view/animal-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    SharedModule
  ],
  declarations: [
    AddAnimalComponent,
    AnimalDialogComponent,
    AnimalViewComponent
  ]
})
export class AnimaisModule { }
