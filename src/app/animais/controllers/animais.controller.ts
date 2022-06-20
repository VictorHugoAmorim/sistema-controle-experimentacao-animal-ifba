import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResquestResponseService } from '../../shared/services/request/resquest-response.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { AnimaisService } from '../services/animais.service';
import { AnimalModel } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private service: AnimaisService, private loadingService:LoadingService, private requestResponseService: ResquestResponseService, private toastService: ToastService) {}

  get(): Promise<AnimalModel[]> {
    try {
      this.loadingService.showLoading();

      return this.service.get()
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao buscar animais', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar animal');
      return Promise.reject(error);
    }
  }

  del(id: number): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.service.del(id).then((resp) => {
        this.toastService.openSnackBar('Animal eliminado correctamente');
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao eliminar animal', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar animal');
      return Promise.reject(error);
    }
  }

  create(animal: AnimalModel): Promise<AnimalModel> {
    try {
      this.loadingService.showLoading();

      return this.service.create(animal).then((resp) => {
        this.toastService.openSnackBar('Animal salvo correctamente');
        return resp;
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao salvar animal', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar salvar animal');
      return Promise.reject(error);
    }
  }

  update(animal: AnimalModel): Promise<AnimalModel> {
    try {
      this.loadingService.showLoading();

      return this.service.update(animal).then((resp) => {
        this.toastService.openSnackBar('Animal atualizado correctamente');
        return resp;
      }).catch((e) => this.requestResponseService.validateCatchError('Erro ao atualizar animal', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar atualizar animal');
      return Promise.reject(error);
    }
  }
}
