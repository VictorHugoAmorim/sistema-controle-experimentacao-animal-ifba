import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiscenteDialogComponent } from '../discente-dialog/discente-dialog.component';
import { DiscenteModel } from '../../models/discente';

@Component({
  selector: 'app-add-discente',
  templateUrl: './add-discente.component.html',
  styleUrls: ['./add-discente.component.scss']
})
export class AddDiscenteComponent implements OnInit {

  @Output() updateList = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DiscenteDialogComponent, {
      data: new DiscenteModel(0, '', '', '', ''),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateList.emit();
    });
  }

  ngOnInit(): void {
  }

}
