import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { ILogin, ILoginResponse } from '../models/auth.model';
import { apiEndpoint } from '../constants/constants';
import { map } from 'rxjs';
import { response } from 'express';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService, private http: HttpClient) {}
  onlogin(data: ILogin) {
    return this.http
      .post<ILoginResponse>(`${apiEndpoint.AuthEndopint.login}`, data)
      .pipe(
        map((response) => {
          if (response) {
            this.tokenService.setToken(response.token);
          }
          return response;
        })
      );
  }
}
