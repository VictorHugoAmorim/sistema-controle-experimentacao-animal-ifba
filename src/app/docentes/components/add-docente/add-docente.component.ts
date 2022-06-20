import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocenteDialogComponent } from '../docente-dialog/docente-dialog.component';
import { DocenteModel } from '../../models/docente';

@Component({
  selector: 'app-add-docente',
  templateUrl: './add-docente.component.html',
  styleUrls: ['./add-docente.component.scss']
})
export class AddDocenteComponent implements OnInit {

  @Output() updateList = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DocenteDialogComponent, {
      data: new DocenteModel(0, '', '', '', ''),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateList.emit();
    });
  }

  ngOnInit(): void {
  }
}
