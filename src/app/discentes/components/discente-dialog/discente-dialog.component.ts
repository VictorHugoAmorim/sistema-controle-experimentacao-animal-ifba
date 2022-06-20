import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DiscenteModel } from '../../models/discente';
import { DiscentesController } from '../../controllers/discentes.controller';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-discente-dialog',
  templateUrl: './discente-dialog.component.html',
  styleUrls: ['./discente-dialog.component.scss']
})
export class DiscenteDialogComponent implements OnInit {


  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DiscenteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DiscenteModel,
    private controller: DiscentesController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      nome: new FormControl(this.data.nome, [Validators.required]),
      matricula: new FormControl(this.data.matricula, [Validators.required]),
      nascimento: new FormControl(new Date(this.data.nascimento), [Validators.required, this.dataMenorQueAtual]),
      curso: new FormControl(this.data.curso, [Validators.required])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cadastrar(){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      let docente = this.form.value;
      docente.nascimento = docente.nascimento.toString();
      docente.id = docente.matricula;
      this.controller.create(docente).then(() => {
        this.onNoClick()
      });
    }
  }

  atualizar(){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      let docente = this.form.value;
      docente.nascimento = docente.nascimento.toString();
      this.controller.update(docente).then(() => {
        this.onNoClick()
      });
    }
  }

  dataMenorQueAtual(control: FormControl){
    if(control.value < new Date()){
      return null
    }else{
      return {error:'data maior que atual'}
    }
  }

}
