import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscenteModel } from '../models/discente';
import { DiscentesService } from '../services/discentes.service';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResquestResponseService } from '../../shared/services/request/resquest-response.service';
import { ToastService } from '../../shared/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class DiscentesController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private discentesService: DiscentesService, private loadingService:LoadingService, private requestResponseService: ResquestResponseService, private toastService: ToastService) {}

  get(): Promise<DiscenteModel[]> {
    try {
      this.loadingService.showLoading();

      return this.discentesService.get()
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao buscar discentes', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar docente');
      return Promise.reject(error);
    }
  }

  del(id: number): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.discentesService.del(id).then((resp) => {
        this.toastService.openSnackBar('Docente eliminado correctamente');
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao eliminar docente', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar docente');
      return Promise.reject(error);
    }
  }

  create(docente: DiscenteModel): Promise<DiscenteModel> {
    try {
      this.loadingService.showLoading();

      return this.discentesService.create(docente).then((resp) => {
        this.toastService.openSnackBar('Docente salvo correctamente');
        return resp;
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao salvar docente', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar salvar docente');
      return Promise.reject(error);
    }
  }

  update(docente: DiscenteModel): Promise<DiscenteModel> {
    try {
      this.loadingService.showLoading();

      return this.discentesService.update(docente).then((resp) => {
        this.toastService.openSnackBar('Docente atualizado correctamente');
        return resp;
      }).catch((e) => this.requestResponseService.validateCatchError('Erro ao atualizar docente', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar atualizar docente');
      return Promise.reject(error);
    }
  }
}
