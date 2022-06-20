import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalModel } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  url:string = "http://localhost:3000/"
  authorization = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user') || '').accessToken : null;
  headers = new HttpHeaders()
  .append('accept', 'application/json')
  .append('content-type', 'application/json')
  .append('authorization', `Bearer ${this.authorization} `)

  constructor(public http: HttpClient) { }

  get(): Promise<AnimalModel[]> {
    return this.http.get<AnimalModel[]>(`${this.url}animais`, {headers: this.headers}).toPromise() as Promise<AnimalModel[]>;
  }

  del(id: number): Promise<any> {
    return this.http.delete<AnimalModel>(`${this.url}animais/${id}`, {headers: this.headers}).toPromise();
  }

  create(animal: AnimalModel): Promise<AnimalModel> {
    return this.http.post<AnimalModel>(`${this.url}animais`, animal, {headers: this.headers}).toPromise() as Promise<AnimalModel>;
  }

  update(animal: AnimalModel): Promise<AnimalModel> {
    return this.http.put<AnimalModel>(`${this.url}animais/${animal.id}`, animal, {headers: this.headers}).toPromise() as Promise<AnimalModel>;
  }
}
