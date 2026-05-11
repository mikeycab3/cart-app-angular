import { computed, Injectable, signal } from '@angular/core';
import { userRegister } from '../models/userRegister';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public urlauth = '/api/UserApp/CreateNewUser';
  private currentUserSignal = signal<userRegister | null>(
      this.loadUserFromStorage())

  constructor( private http: HttpClient) { }

  registerUser(obj: userRegister) {
    localStorage.setItem('user',JSON.stringify(obj));
    this.currentUserSignal.set(obj);
  }

  getCurrentUser(): userRegister | null {
    return this.currentUserSignal();
  }

  logout(): void{
     localStorage.removeItem('user');
    this.currentUserSignal.set(null);
  }

  private loadUserFromStorage(): userRegister | null {
    const user = localStorage.getItem('user');

    if (!user) {
      return null;
    }

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }
}
