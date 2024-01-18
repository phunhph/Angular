import { Injectable } from '@angular/core';
import { constants } from '../constants/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isauthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}
  updateToken(status: boolean) {
    this.isauthentication.next(status);
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }
  getToken(): string | null {
    return localStorage.getItem(constants.CURRENT_TOKEN) || null;
  }
}
