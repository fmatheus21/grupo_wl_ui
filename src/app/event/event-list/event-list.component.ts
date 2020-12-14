import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
      })
  }

  find(id) {
    this.eventService.findById(id)
      .subscribe((data: Event) => {
        var result = JSON.parse(JSON.stringify(data));
        this.eventObject = result;
      })
  }

  deleteGuest(id): void {
    this.eventService.deleteGuest(id)
      .subscribe(
        response => {
          this.messageService.sendMessageSuccess(response);          
        },
        error => {
          console.log(error)
          this.messageService.sendMessageError(error);
        });
  }


}
