import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { EmailModel } from "../models/email.model";

const base_url = "http://localhost:3000/api/Users/"
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  tokeId: string = '';

  flag: boolean = true;

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}login?include=user`, {
      email: email,
      password: password
    }, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  logoutUser() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
  }

  saveToken(token) {
    localStorage.setItem("userToken", token);
  }

  getToken() {
    localStorage.getItem("userToken");
  }

  saveUserInformation(user: UserModel) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  getUserInformation() {
    let userInfo = localStorage.getItem('userInfo');
    if (isNullOrUndefined(userInfo)) {
      return null

    } else {
      return userInfo;
    }

  }

  resetPassword(email: string): Observable<UserModel> {
    return this.http.post<UserModel>(`${base_url}reset`, email, {
      headers: new HttpHeaders({
        "content-type": "application/json"
      })
    });
  }

  /*  resetPassword(email: EmailModel): Observable<EmailModel> {
     return this.http.post<EmailModel>(`${base_url}reset`, email, {
       headers: new HttpHeaders({
         "content-type": "application/json"
     })
   });
 } */
  /*   resetPassword(token: string, newPassword: string): Observable<UserModel> {
      return this.http.post<UserModel>(`${base_url}reset-password?access_token=${token}`, { "newPassword": newPassword },
        {
          headers: new HttpHeaders({
            "content-type": "application/json"
          })
        });
    } */

  findUserEmail(email: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${base_url}findOne?filter=`, {
      headers: new HttpHeaders({
        "filter": `{"where":{"email":${email}}}`
      })
    });
  }

}
