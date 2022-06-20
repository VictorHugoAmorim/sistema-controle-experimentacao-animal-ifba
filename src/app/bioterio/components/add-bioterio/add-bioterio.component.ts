import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BioterioDialogComponent } from '../bioterio-dialog/bioterio-dialog.component';
import { BioterioModel } from '../../models/bioterio';

@Component({
  selector: 'app-add-bioterio',
  templateUrl: './add-bioterio.component.html',
  styleUrls: ['./add-bioterio.component.scss']
})
export class AddBioterioComponent implements OnInit {


  @Output() updateList = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BioterioDialogComponent, {
      data: new BioterioModel(0, '', '', []),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateList.emit();
    });
  }

  ngOnInit(): void {
  }

}
