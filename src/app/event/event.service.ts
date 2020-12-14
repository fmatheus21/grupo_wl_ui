import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpOptionsService } from 'src/app/security/http-options.service';
import { Event } from '../_model/event';
import { MessageService } from '../shared/service/message.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  private readonly apiUrl = `${environment.apiUrl}/event`;

  constructor(
    private http: HttpClient,
    private httpOptionsService: HttpOptionsService,
    private messageService: MessageService
  ) { }


  create(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/participation`, event);
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/participation`);
  }

  findById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/participation/${id}`);
  }

  deleteGuest(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.apiUrl}/guest/${id}`);
  }



}