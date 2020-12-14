import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EmployeeModule } from './employee/employee.module';
import { User } from './_model/user';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { ToastyModule } from 'ng2-toasty';
import { EventModule } from './event/event.module';
import { AuthGuard } from './security/auth.guard';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    EmployeeModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    EventModule,
    ToastyModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:8083'],
        disallowedRoutes: []
      }
    })
  ],
  providers: [
    User,
    JwtHelperService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
