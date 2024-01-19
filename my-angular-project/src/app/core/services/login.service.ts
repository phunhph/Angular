import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUTL = 'http://localhost:4000/users';
  constructor(private http: HttpClient) {}
}
