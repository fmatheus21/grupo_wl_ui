import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/_model/employee';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpOptionsService } from 'src/app/security/http-options.service';
import { Rate } from 'src/app/_model/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private readonly apiUrl = `${environment.apiUrl}/rates`;

  constructor(private http: HttpClient) { }


  getAllEmployes(): Observable<Rate[]> {
    return this.http.get<Rate[]>(this.apiUrl + '/employee');
  }

  getAllGuest(): Observable<Rate[]> {
    return this.http.get<Rate[]>(this.apiUrl + '/guest');
  }


}
