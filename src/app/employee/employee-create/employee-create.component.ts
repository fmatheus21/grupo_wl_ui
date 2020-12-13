import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/service/message.service';
import { Employee } from 'src/app/_model/employee';
import { User } from 'src/app/_model/user';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private router: Router
  ) { }

  employee: Employee = new Employee();

  ngOnInit(): void {
  }


  public create(form: NgForm): void {
    this.employeeService.create(this.employee)
      .subscribe(
        response => {
          this.messageService.sendMessageSuccess(response);
          form.reset();
        },
        error => {
          this.messageService.sendMessageError(error);
        });
  }


}
