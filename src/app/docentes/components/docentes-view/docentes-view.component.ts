import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DocenteModel } from '../../models/docente';
import { DocentesController } from '../../controllers/docentes.controller';
import { MatPaginator } from '@angular/material/paginator';
import { DocenteDialogComponent } from '../docente-dialog/docente-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-docentes-view',
  templateUrl: './docentes-view.component.html',
  styleUrls: ['./docentes-view.component.scss']
})
export class DocentesViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  docentes: DocenteModel[] = [];
  dataSource = new MatTableDataSource(this.docentes);

  constructor(public docentesController: DocentesController, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDocentes();
  }

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'departamento', 'actions'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDocentes(){
    this.docentesController.get().then( (data: DocenteModel[]) => {
      this.docentes = data;
      this.dataSource = new MatTableDataSource(this.docentes);
      this.dataSource.paginator = this.paginator;
    });
  }

  excluirDocente(id: number){
    this.docentesController.del(id).then(() => {
      this.getDocentes();
    });
  }

  alterarDocente(docente: DocenteModel){
    const dialogRef = this.dialog.open(DocenteDialogComponent, {
      data: docente
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDocentes();
    });
  }

}
