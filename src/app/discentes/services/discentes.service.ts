import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscenteModel } from '../models/discente';

@Injectable({
  providedIn: 'root'
})
export class DiscentesService {

  url:string = "http://localhost:3000/"
  authorization = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') || '').accessToken : null;
  headers = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')
  .append('authorization', `Bearer ${this.authorization} `)

  constructor(public http: HttpClient) { }

  get(): Promise<DiscenteModel[]> {
    return this.http.get<DiscenteModel[]>(`${this.url}discentes`, {headers: this.headers}).toPromise() as Promise<DiscenteModel[]>;
  }

  del(id: number): Promise<any> {
    return this.http.delete<DiscenteModel>(`${this.url}discentes/${id}`, {headers: this.headers}).toPromise();
  }

  create(discente: DiscenteModel): Promise<DiscenteModel> {
    return this.http.post<DiscenteModel>(`${this.url}discentes`, discente, {headers: this.headers}).toPromise() as Promise<DiscenteModel>;
  }

  update(discente: DiscenteModel): Promise<DiscenteModel> {
    return this.http.put<DiscenteModel>(`${this.url}discentes/${discente.id}`, discente, {headers: this.headers}).toPromise() as Promise<DiscenteModel>;
  }
}
