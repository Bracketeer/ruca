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
  colors: Array<string> = ['#e67e22', '#f1c40f', '#16a085', '#0395A5', '#7d3c98', '#e74c3c'];
  constructor () { }
  updatedEventDetails() {
    this.eventDetails.start = new Date(`${new Date(this.eventStart.date).getFullYear()}-${new Date(this.eventStart.date).getMonth() + 1}-${new Date(this.eventStart.date).getDate()} ${this.eventStart.hours + this.eventStart.timeOfDay}:${this.eventStart.minutes}`);
    this.eventDetails.end = new Date(`${new Date(this.eventEnd.date).getFullYear()}-${new Date(this.eventEnd.date).getMonth() + 1}-${new Date(this.eventEnd.date).getDate()} ${this.eventEnd.hours + this.eventEnd.timeOfDay}:${this.eventEnd.minutes}`);
    console.log(this.eventDetails)
    this.updateEventDetails.emit(this.eventDetails);
  }
  canceledEventChanges() {
    this.eventDetails = this.backupEventDetails
    this.cancelEventChanges.emit(this.eventDetails);
  }
  getEventDate(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }
  ngOnInit() {
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
