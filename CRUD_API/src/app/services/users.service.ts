import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, ApiResponse } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiURL = 'http://localhost:4000/users';
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<ApiResponse<IUser[]>> {
    return this.http.get<ApiResponse<IUser[]>>(`${this.apiURL}`);
  }
  getUser(id: string): Observable<ApiResponse<IUser>> {
    return this.http.get<ApiResponse<IUser>>(`${this.apiURL}/${id}`);
  }
  createUser(user: IUser): Observable<ApiResponse<IUser>> {
    return this.http.post<ApiResponse<IUser>>(`${this.apiURL}`, user);
  }
  updateUser(id: string, user: IUser): Observable<ApiResponse<IUser>> {
    return this.http.put<ApiResponse<IUser>>(`${this.apiURL}/${id}`, user);
  }
  deleteUser(id: string): Observable<ApiResponse<IUser>> {
    return this.http.delete<ApiResponse<IUser>>(`${this.apiURL}/${id}`);
  }
}
