import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/_model/employee';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpOptionsService } from 'src/app/security/http-options.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly apiUrl = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService) { }


  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }


}
