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
  @Output() cancelEventChanges = new EventEmitter();
  backupEventDetails: CalendarEvent;
  event: CalendarEvent;
  eventStart = {
    date: new Date(),
    hours: 16,
    minutes: 0,
    timeOfDay: 0
  };
  eventEnd = {
    date: new Date(),
    hours: 16,
    minutes: 0,
    timeOfDay: 0
  };
  colors: Array<string> = ['#0395A5', '#7d3c98', '#16a085', '#f1c40f', '#e67e22', '#e74c3c'];
  constructor () { }
  updatedEventDetails() {
    this.event.start = new Date(`${new Date(this.eventStart.date).getFullYear()}-${new Date(this.eventStart.date).getMonth() + 1}-${new Date(this.eventStart.date).getDate()} ${this.eventStart.hours + this.eventStart.timeOfDay}:${this.eventStart.minutes}`);
    this.event.end = new Date(`${new Date(this.eventEnd.date).getFullYear()}-${new Date(this.eventEnd.date).getMonth() + 1}-${new Date(this.eventEnd.date).getDate()} ${this.eventEnd.hours + this.eventEnd.timeOfDay}:${this.eventEnd.minutes}`);
    console.log(this.eventDetails)
    this.eventDetails = this.event;
    this.updateEventDetails.emit(this.event);
  }
  canceledEventChanges() {
    this.eventDetails = this.backupEventDetails;
    this.updateEventDetails.emit(this.eventDetails);
  }
  getEventDate(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }
  ngOnInit() {
    this.event = JSON.parse(JSON.stringify(this.eventDetails))
    this.backupEventDetails = JSON.parse(JSON.stringify(this.eventDetails))
    this.eventStart.date = this.eventDetails.start; 
    this.eventEnd.date = this.eventDetails.end;

    this.eventStart.minutes = this.eventDetails.start.getMinutes(); 
    this.eventEnd.minutes = this.eventDetails.end.getMinutes(); 

    this.eventStart.hours = this.eventDetails.start.getHours(); 
    this.eventEnd.hours = this.eventDetails.end.getHours();
    if (this.eventStart.hours > 12) {
      this.eventStart.timeOfDay = 12;
      this.eventStart.hours = this.eventStart.hours - 12;
    }
    if (this.eventEnd.hours > 12) {
      this.eventEnd.timeOfDay = 12;
      this.eventEnd.hours = this.eventEnd.hours - 12;
    }
  }

}
