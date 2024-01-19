import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IMessage } from '../models/messager';

@Injectable({
  providedIn: 'root',
})
export class MessagerService {
  apiURL = 'http://localhost:4000/Messager';
  constructor(private http: HttpClient) {}

  getChat(id_in: string, id_out: string): Observable<ApiResponse<IMessage>> {
    return this.http.get<ApiResponse<IMessage>>(
      `${this.apiURL}/${id_in}/${id_out}`
    );
  }
  createUser(mess: IMessage): Observable<ApiResponse<IMessage>> {
    return this.http.post<ApiResponse<IMessage>>(`${this.apiURL}`, mess);
  }
}
