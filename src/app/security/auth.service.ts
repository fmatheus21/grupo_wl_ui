import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_model/user';
import { HttpOptionsService } from './http-options.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = `${environment.apiUrl}`;
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    public router: Router,
    private jwtHelperService: JwtHelperService,
    private httpOptionsService: HttpOptionsService
  ) {
    this.loadToken();
  }


  signIn(user: User): Promise<void> {

    const body = `username=${user.username}&password=${user.password}&grant_type=password`;

    return this.http.post(this.apiUrl + '/oauth/token', body, this.httpOptionsService.httpOptionsAuth)
      .toPromise()
      .then(response => {
        var token = JSON.parse(JSON.stringify(response)).access_token;
        this.storeToken(token);
        console.log(response);
      })
      .catch(response => {

        if (response.status == 400) {
          var respJson = JSON.parse(JSON.stringify(response));
          if (respJson.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);

      });
  }


  logout() {
    return this.http.delete(this.apiUrl + '/tokens/revoke', { withCredentials: true })
      .toPromise()
      .then(() => {
        this.cleanAccessToken();
      });
  }


  cleanAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }


  private storeToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storeToken(token);
    }
  }

  public getToken() {
    var respJson = JSON.parse(JSON.stringify(localStorage.getItem('token')));
    return respJson;
  }



}
