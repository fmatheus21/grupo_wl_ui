import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'create', component: EventCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
