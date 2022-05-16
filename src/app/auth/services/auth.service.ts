import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthModel, AuthLoginModel } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  login(auth: AuthLoginModel): Promise<AuthModel> {
    return this.http.post<AuthModel>('http://localhost:3000/login', auth).toPromise() as Promise<AuthModel>;
  }

}
