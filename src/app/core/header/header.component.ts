import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    public authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    console.log(this.httpClient)
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => this.messageService.sendMessage('error', error));

  }

}
