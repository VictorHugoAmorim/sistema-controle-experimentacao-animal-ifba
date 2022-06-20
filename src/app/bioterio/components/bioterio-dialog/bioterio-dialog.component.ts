import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { BioterioController } from '../../controllers/bioterio.controller';
import { BioterioModel } from '../../models/bioterio';

@Component({
  selector: 'app-bioterio-dialog',
  templateUrl: './bioterio-dialog.component.html',
  styleUrls: ['./bioterio-dialog.component.scss']
})
export class BioterioDialogComponent implements OnInit {


  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BioterioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BioterioModel,
    private controller: BioterioController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      nome: new FormControl(this.data.nome, [Validators.required]),
      departamento: new FormControl(this.data.departamento, [Validators.required]),
      especies: new FormControl(this.data.especies, [Validators.required])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cadastrar(){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      this.controller.create(this.form.value).then(() => {
        this.onNoClick()
      });
    }
  }

  atualizar(){
    if(this.form.invalid){
      this.toastService.openSnackBar('Preencha todos os campos corretamente')
    }else{
      this.controller.update(this.form.value).then(() => {
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
