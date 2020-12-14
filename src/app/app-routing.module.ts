import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] },
  { path: 'employees', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),canActivate: [AuthGuard]  } ,
  { path: 'events', loadChildren: () => import('./event/event.module').then(m => m.EventModule),canActivate: [AuthGuard]  } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
