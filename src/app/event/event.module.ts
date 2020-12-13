import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventCreateComponent } from './event/event-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    EventRoutingModule
  ]
})
export class EventModule { }
