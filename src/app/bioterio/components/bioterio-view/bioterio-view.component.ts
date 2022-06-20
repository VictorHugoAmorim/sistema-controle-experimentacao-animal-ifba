import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BioterioController } from '../../controllers/bioterio.controller';
import { BioterioModel } from '../../models/bioterio';
import { BioterioDialogComponent } from '../bioterio-dialog/bioterio-dialog.component';

@Component({
  selector: 'app-bioterio-view',
  templateUrl: './bioterio-view.component.html',
  styleUrls: ['./bioterio-view.component.scss']
})
export class BioterioViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  bioterio: BioterioModel[] = [];
  dataSource = new MatTableDataSource(this.bioterio);

  constructor(public controller: BioterioController, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBioterios();
  }

  displayedColumns: string[] = ['nome', 'departamento', 'especies', 'actions'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBioterios(){
    this.controller.get().then( (data: BioterioModel[]) => {
      this.bioterio = data;
      this.dataSource = new MatTableDataSource(this.bioterio);
      this.dataSource.paginator = this.paginator;
    });
  }

  excluirBioterio(id: number){
    this.controller.del(id).then(() => {
      this.getBioterios();
    });
  }

  alterarBioterio(bioterio: BioterioModel){
    const dialogRef = this.dialog.open(BioterioDialogComponent, {
      data: bioterio
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBioterios();
    });
  }

}
