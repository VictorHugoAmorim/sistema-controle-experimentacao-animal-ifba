import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteModel } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  url:string = "http://localhost:3000/660/"
  authorization = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') || '').accessToken : null;
  headers = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')
  .append('authorization', `Bearer ${this.authorization} `)

  constructor(public http: HttpClient) { }

  get(): Promise<DocenteModel[]> {
    return this.http.get<DocenteModel[]>(`${this.url}docentes`, {headers: this.headers}).toPromise() as Promise<DocenteModel[]>;
  }

  del(id: number): Promise<any> {
    return this.http.delete<DocenteModel>(`${this.url}docentes/${id}`, {headers: this.headers}).toPromise();
  }

  create(docente: DocenteModel): Promise<DocenteModel> {
    return this.http.post<DocenteModel>(`${this.url}docentes`, docente, {headers: this.headers}).toPromise() as Promise<DocenteModel>;
  }

  update(docente: DocenteModel): Promise<DocenteModel> {
    return this.http.put<DocenteModel>(`${this.url}docentes/${docente.id}`, docente, {headers: this.headers}).toPromise() as Promise<DocenteModel>;
  }
}
