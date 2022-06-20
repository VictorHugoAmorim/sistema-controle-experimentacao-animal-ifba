import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalController } from '../../controllers/animais.controller';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { AnimalModel } from '../../models/animal';

@Component({
  selector: 'app-animal-dialog',
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.scss']
})
export class AnimalDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AnimalModel,
    private controller: AnimalController,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.data.id),
      especie: new FormControl(this.data.especie, [Validators.required]),
      quantidade: new FormControl(this.data.quantidade, [Validators.required]),
      justificativa: new FormControl(this.data.justificativa, [Validators.required])
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
