import { Injectable } from '@angular/core';
import { UserLogin } from '../model/user.model';
import {Autorizacao} from '../helpers/autorizacao.helper';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_ROOT } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private autorizacao: Autorizacao) { }

  public login(userLogin: UserLogin): Promise<any> {
    this.autorizacao.set(userLogin.username, userLogin.password);
    return new Promise(  (resolve, reject) => {
      this.http.get(BASE_URL_ROOT, this.autorizacao.get())
      .subscribe( result => {
        resolve(result);
      }, err => {
        this.autorizacao.remove();
        reject(err);
      });
    });
  }

}
