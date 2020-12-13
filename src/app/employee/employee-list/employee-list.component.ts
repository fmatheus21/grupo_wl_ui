import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmployeeService } from 'src/app/employee/employee.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { Employee } from 'src/app/_model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  
  employees: Employee[] = [];

  @ViewChild('table') grid: any;
  totalRecords = 0;
  titleHeader: any;

  constructor(
    private title: Title,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Funcionários');
    this.titleHeader = this.title.getTitle();
    this.list();
    const refreshToken = localStorage.getItem('refresh_token');
    console.log('refreshToken: ' + refreshToken);
  }

  list() {
    this.employeeService.getAll()
      .subscribe((data: Employee[]) => {
        var result = JSON.parse(JSON.stringify(data));
        this.employees = result.content;
      })
  }


}


