import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalendarEvent } from '@app/shared/models/calendar.model';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: ['./calendar-details.component.sass']
})
export class CalendarDetailsComponent implements OnInit {
  @Input() eventDetails: CalendarEvent;
  @Output() updateEventDetails = new EventEmitter();
  constructor () { }
  updatedEventDetails() {
    this.updateEventDetails.emit(this.eventDetails);
  }

  ngOnInit() {
  }

}
