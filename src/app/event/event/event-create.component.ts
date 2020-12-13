import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/employee/employee.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { RateService } from 'src/app/shared/service/rate.service';
import { Employee } from 'src/app/_model/employee';
import { Event } from 'src/app/_model/event';
import { Rate } from 'src/app/_model/rate';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  event: Event = new Event();
  employees: Employee[] = [];
  rateEmployee: Rate[] = [];
  rateGuest: Rate[] = [];

  constructor(
    private employeeService: EmployeeService,
    private rateService: RateService,
    private messageService: MessageService,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.listEmployees();
    this.listRatesEmployee();
    this.listRatesGuest();
  }

  listEmployees() {
    this.employeeService.getAll()
      .subscribe((data: Employee[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.employees = result.content;
      })
  }

  listRatesEmployee() {
    this.rateService.getAllEmployes()
      .subscribe((data: Rate[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.rateEmployee = result;
      })
  }

  listRatesGuest() {
    this.rateService.getAllGuest()
      .subscribe((data: Rate[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.rateGuest = result;
      })
  }

  public create(form: NgForm): void {
    this.event.id_event = 1;

    this.eventService.create(this.event)
      .subscribe(
        response => {
          console.log(response);
          this.messageService.sendMessageSuccess(response);
          form.reset();
        },
        error => {
          console.log(error);
          this.messageService.sendMessageError(error);
        });
  }




}
