import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DiscenteModel } from '../../models/discente';
import { DiscentesController } from '../../controllers/discentes.controller';
import { MatPaginator } from '@angular/material/paginator';
import { DiscenteDialogComponent } from '../discente-dialog/discente-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-discentes-view',
  templateUrl: './discentes-view.component.html',
  styleUrls: ['./discentes-view.component.scss']
})
export class DiscentesViewComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;

  discentes: DiscenteModel[] = [];
  dataSource = new MatTableDataSource(this.discentes);

  constructor(public discentesController: DiscentesController, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDiscentes();
  }

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'curso', 'actions'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDiscentes(){
    this.discentesController.get().then( (data: DiscenteModel[]) => {
      this.discentes = data;
      this.dataSource = new MatTableDataSource(this.discentes);
      this.dataSource.paginator = this.paginator;
    });
  }

  excluirDiscente(id: number){
    this.discentesController.del(id).then(() => {
      this.getDiscentes();
    });
  }

  alterarDiscente(discente: DiscenteModel){
    const dialogRef = this.dialog.open(DiscenteDialogComponent, {
      data: discente
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDiscentes();
    });
  }


}
