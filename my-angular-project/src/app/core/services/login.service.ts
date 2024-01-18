import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, ApiResponse } from '../models/user';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://localhost:4000/users';
  constructor(private http: HttpClient) {}

  // loginUser(email: string, password: string): Observable<ApiResponse<IUser>> {
  //   return this.http.get<ApiResponse<IUser>>(
  //     `${this.apiURL}/${email}/${password}`
  //   );
  // }
  // createUser(user: IUser): Observable<ApiResponse<IUser>> {
  //   return this.http.post<ApiResponse<IUser>>(`${this.apiURL}`, user);
  // }
}
