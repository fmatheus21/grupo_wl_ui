import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';


@NgModule({
  declarations: [EventCreateComponent, EventListComponent],
  imports: [
    CommonModule,
    FormsModule,
    EventRoutingModule
  ]
})
export class EventModule { }
