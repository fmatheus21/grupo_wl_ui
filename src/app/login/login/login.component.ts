import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { MessageService } from 'src/app/shared/service/message.service';
import { User } from 'src/app/_model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(
    private authSrvice: AuthService,
    private user: User,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  login(form: NgForm) {
    this.user.username = form.value.username;
    this.user.password = form.value.password;
    this.authSrvice.signIn(this.user)
      .then((response) => {
        this.router.navigate(['/dashboard']);
        this.messageService.sendMessageSuccess(response);
      })
      .catch(error => {
        this.messageService.sendMessageError(error);
      });
  }


}
