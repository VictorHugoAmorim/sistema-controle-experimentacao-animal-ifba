import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { AnimalModel } from '../../models/animal';
import { MatTableDataSource } from '@angular/material/table';
import { AnimalController } from '../../controllers/animais.controller';
import { MatDialog } from '@angular/material/dialog';
import { AnimalDialogComponent } from '../animal-dialog/animal-dialog.component';

@Component({
  selector: 'app-animal-view',
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.scss']
})
export class AnimalViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  animal: AnimalModel[] = [];
  dataSource = new MatTableDataSource(this.animal);

  constructor(public controller: AnimalController, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAnimais();
  }

  displayedColumns: string[] = ['especie', 'justificativa', 'quantidade', 'actions'];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAnimais(){
    this.controller.get().then( (data: AnimalModel[]) => {
      this.animal = data;
      this.dataSource = new MatTableDataSource(this.animal);
      this.dataSource.paginator = this.paginator;
    });
  }

  excluirBioterio(id: number){
    this.controller.del(id).then(() => {
      this.getAnimais();
    });
  }

  alterarBioterio(animal: AnimalModel){
    const dialogRef = this.dialog.open(AnimalDialogComponent, {
      data: animal
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAnimais();
    });
  }

}
