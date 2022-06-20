import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalModel } from '../../models/animal';
import { AnimalDialogComponent } from '../animal-dialog/animal-dialog.component';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {

  @Output() updateList = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AnimalDialogComponent, {
      data: new AnimalModel(0, '', 0, ""),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateList.emit();
    });
  }

  ngOnInit(): void {
  }

}
