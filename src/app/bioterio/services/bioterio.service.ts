import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BioterioModel } from '../models/bioterio';

@Injectable({
  providedIn: 'root'
})
export class BioterioService {

  url:string = "http://localhost:3000/"
  authorization = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') || '').accessToken : null;
  headers = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')
  .append('authorization', `Bearer ${this.authorization} `)

  constructor(public http: HttpClient) { }

  get(): Promise<BioterioModel[]> {
    return this.http.get<BioterioModel[]>(`${this.url}bioterios`, {headers: this.headers}).toPromise() as Promise<BioterioModel[]>;
  }

  del(id: number): Promise<any> {
    return this.http.delete<BioterioModel>(`${this.url}bioterios/${id}`, {headers: this.headers}).toPromise();
  }

  create(bioterio: BioterioModel): Promise<BioterioModel> {
    return this.http.post<BioterioModel>(`${this.url}bioterios`, bioterio, {headers: this.headers}).toPromise() as Promise<BioterioModel>;
  }

  update(bioterio: BioterioModel): Promise<BioterioModel> {
    return this.http.put<BioterioModel>(`${this.url}bioterios/${bioterio.id}`, bioterio, {headers: this.headers}).toPromise() as Promise<BioterioModel>;
  }
}
