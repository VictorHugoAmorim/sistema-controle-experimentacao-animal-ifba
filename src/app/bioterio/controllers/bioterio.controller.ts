import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../shared/services/loading/loading.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ResquestResponseService } from '../../shared/services/request/resquest-response.service';
import { ToastService } from '../../shared/services/toast/toast.service';
import { BioterioService } from '../services/bioterio.service';
import { BioterioModel } from '../models/bioterio';

@Injectable({
  providedIn: 'root'
})
export class BioterioController {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private service: BioterioService, private loadingService:LoadingService, private requestResponseService: ResquestResponseService, private toastService: ToastService) {}

  get(): Promise<BioterioModel[]> {
    try {
      this.loadingService.showLoading();

      return this.service.get()
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao buscar biotérios', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar biotério');
      return Promise.reject(error);
    }
  }

  del(id: number): Promise<any> {
    try {
      this.loadingService.showLoading();

      return this.service.del(id).then((resp) => {
        this.toastService.openSnackBar('Biotério eliminado correctamente');
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao eliminar biotério', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar eliminar biotério');
      return Promise.reject(error);
    }
  }

  create(bioterio: BioterioModel): Promise<BioterioModel> {
    try {
      this.loadingService.showLoading();

      return this.service.create(bioterio).then((resp) => {
        this.toastService.openSnackBar('Biotério salvo correctamente');
        return resp;
      })
      .catch((e) => this.requestResponseService.validateCatchError('Erro ao salvar biotério', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar salvar biotério');
      return Promise.reject(error);
    }
  }

  update(bioterio: BioterioModel): Promise<BioterioModel> {
    try {
      this.loadingService.showLoading();

      return this.service.update(bioterio).then((resp) => {
        this.toastService.openSnackBar('Biotério atualizado correctamente');
        return resp;
      }).catch((e) => this.requestResponseService.validateCatchError('Erro ao atualizar biotério', e))
      .finally(() => {
        this.loadingService.hideLoading();
      });
    } catch (error) {
      this.toastService.openSnackBar('Erro ao tentar atualizar biotério');
      return Promise.reject(error);
    }
  }
}
