import { Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ResquestResponseService {

  constructor(private toastService: ToastService) { }

  validateCatchError(message: string, e: any){
    if(e.status === 401) {
      window.localStorage.removeItem('user');
    }else if(e.status === 403) {
      this.toastService.openSnackBar('Usuário não autorizado');
    }else if (e.status === 500) {
      this.toastService.openSnackBar('Já existe um cadastro com esses dados!');
    }else{
      this.toastService.openSnackBar(message);
    }

    return Promise.reject(e);
  }
}
