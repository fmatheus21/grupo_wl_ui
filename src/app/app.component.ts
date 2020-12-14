import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MessageService } from './shared/service/message.service';
import { ToastyConfig } from 'ng2-toasty';
import { ScriptService } from './shared/service/script.service';
import { AuthService } from './security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui';

  constructor(   
    private messageService: MessageService,
    private router: Router,      
    private authService: AuthService
  ) { }

  ngOnInit(): void {


    const currentUser = this.authService.getToken();
    if (!currentUser) {
      this.router.navigate(['/login']);
    } else {
      if (window.location.pathname === '/login') {
        this.router.navigate(['/dashboard']);
        this.messageService.sendMessage('success', "Você já está logado");
      }
    }

  }


  displayNavigation() {
    return this.router.url !== '/login';
  }



}
