import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/security/auth.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { Event } from 'src/app/_model/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  eventObject: Event = new Event();
  @ViewChild('table') grid: any;
  totalRecords = 0;
  titleHeader: any;  
  collection: Event = new Event();


  constructor(
    private title: Title,
    private eventService: EventService,
    private messageService: MessageService    
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Participantes do Evento');
    this.titleHeader = this.title.getTitle();
    this.list();
  }


  list() {
    this.eventService.getAll()
      .subscribe((data: Event[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.events = result.content;
        this.totalCollected();
      })
  }

  find(id) {
    this.eventService.findById(id)
      .subscribe((data: Event) => {
        var result = JSON.parse(JSON.stringify(data));
        this.eventObject = result;
      })
  }

  totalCollected() {
    this.eventService.totalCollected()
      .subscribe((data: Event[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.collection = result;        
      })
  }

  deleteGuest(id): void {
    this.eventService.deleteGuest(id)
      .subscribe(
        response => {
          this.messageService.sendMessageSuccess(response);
          this.find(id);
          this.totalCollected();
        },
        error => {          
          this.messageService.sendMessageError(error);
        });
  }

  deleteParticipation(id): void {
    this.eventService.deleteParticipation(id)
      .subscribe(
        response => {
          this.messageService.sendMessageSuccess(response);
          this.list();
        },
        error => {
          console.log(error)
          this.messageService.sendMessageError(error);
        });
  }


}
