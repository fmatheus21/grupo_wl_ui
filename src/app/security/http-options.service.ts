import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {

  constructor() { }

  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YW5ndWxhcjphbmd1bGFyMjEwNjgzQA=='
    }),
    withCredentials: true
  };

  httpOptionsRequest = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    })
  };

  protected getToken() {
    return localStorage.getItem('token');
  }

}
