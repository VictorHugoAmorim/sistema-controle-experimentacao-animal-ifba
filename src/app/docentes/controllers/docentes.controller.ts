import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteModel } from '../models/docente';
import { DocentesService } from '../services/docentes.service';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResquestResponseService } from '../../shared/services/request/resquest-response.service';
import { ToastService } from '../../shared/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class DocentesController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private docentesService: DocentesService, private loadingService:LoadingService, private requestResponseService: ResquestResponseService, private toastService: ToastService) {}

  get(): Promise<DocenteModel[]> {
    try {
      this.loadingService.showLoading();

      return this.docentesService.get()
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao buscar docentes', e))
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

      return this.docentesService.del(id).then((resp) => {
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

  create(docente: DocenteModel): Promise<DocenteModel> {
    try {
      this.loadingService.showLoading();

      return this.docentesService.create(docente).then((resp) => {
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

  update(docente: DocenteModel): Promise<DocenteModel> {
    try {
      this.loadingService.showLoading();

      return this.docentesService.update(docente).then((resp) => {
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
