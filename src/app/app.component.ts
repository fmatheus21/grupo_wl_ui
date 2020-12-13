import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MessageService } from './shared/service/message.service';
import { ToastyConfig } from 'ng2-toasty';
import { ScriptService } from './shared/service/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(
    private toastyConfig: ToastyConfig,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    if (window.location.pathname === '/login') {

      const token = localStorage.getItem('token');
      if (token) {
        this.router.navigate(['/dashboard']);
        this.messageService.sendMessage('success', "Você já está logado");
        console.log(token);
      } else {
        this.router.navigate(['/login']);
        this.messageService.sendMessage('error', "Você precisa logar");
      }

    }

  }


  displayNavigation() {
    return this.router.url !== '/login';
  }



}
