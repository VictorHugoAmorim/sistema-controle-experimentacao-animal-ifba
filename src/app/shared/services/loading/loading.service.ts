import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading = false;

  constructor() { }

  showLoading(){
    this.loading = true;
  }

  hideLoading(){
    this.loading = false;
  }
}
