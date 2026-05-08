import { Injectable } from '@angular/core';
import { userRegister } from '../models/userRegister';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public urlauth = 'https://api.freeprojectapi.com/UserApp/CreateNewUser';

  constructor( private http: HttpClient) { }

  registerUser(obj: userRegister): Observable<userRegister>{
    return this.http.post<userRegister>(this.urlauth, obj)
  }
}
