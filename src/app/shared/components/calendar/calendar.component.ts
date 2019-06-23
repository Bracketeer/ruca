import { Component, OnInit, HostBinding } from '@angular/core';
import { CalendarEvent } from '@app/shared/models/calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
})
export class CalendarComponent implements OnInit {
  @HostBinding('class') widgetSize: string = 'grid-row-2';
  constructor () { }
  months: Array<string> = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  menu: boolean = false;
  date = new Date();
  firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
  gridsize: number;
  monthgrid = new Array(42).map((day, index) => index);
  currentMonth: number;
  displayMonth: number;
  currentYear: number;
  currentDay: number;
  highlightedDay: number;
  eventStartDate: number;
  eventEndDate: number;
  eventDetails: CalendarEvent;
  selectDays = this.selectDaysByDrag.bind(this);
  calendarEvents: Array<CalendarEvent> = [];
  newDate(val: number) {
    this.displayMonth = this.displayMonth + val;
    this.date = new Date(this.currentYear, this.displayMonth, this.currentDay);
    this.firstDay = new Date(this.currentYear, this.displayMonth, 1).getDay();
    this.lastDay = new Date(this.currentYear, this.displayMonth + 1, 0).getDate();
    if (this.displayMonth > 11) {
      this.displayMonth = 0;
      this.currentYear = this.currentYear + 1;
    }
    if (this.displayMonth < 0) {
      this.displayMonth = 11;
      this.currentYear = this.currentYear - 1;
    }
  }
  setCalendarGridHeight() {
    if(this.widgetSize === 'grid-row-1') return '40px'
    if(this.widgetSize === 'grid-row-2') return '60px'
    if(this.widgetSize === 'grid-row-3') return '90px'
  }
  getDayOfWeek(day: string) {
    return this.widgetSize === 'grid-row-1' ? day.charAt(0) : day
  }
  updateEventDetails(event: CalendarEvent) {
    this.calendarEvents.forEach(calEvent => {
      if (calEvent.id === event.id) {
        calEvent = event;
      }
    })
    this.eventDetails = null;
  }
  createEventByDrag(date: number) {
    this.eventStartDate = date;
    const dateNumbers = document.querySelectorAll('.date') as any;
    dateNumbers.forEach(dateNumber => dateNumber.classList.remove('highlighted-date-range'));
    document.querySelector('.calendar').addEventListener('mousemove', this.selectDays)
  }
  selectDaysByDrag(event: any) {
    if (event.target.classList.contains('date')) {
      const dateNumbers = document.querySelectorAll('.date') as any;
      dateNumbers.forEach(dateNumber => {
        if (
          Number(dateNumber.innerText) >= this.eventStartDate &&
          Number(dateNumber.innerText) <= Number(event.target.innerText)
        ) {
          dateNumber.classList.add('highlighted-date-range');
        } else {
          dateNumber.classList.remove('highlighted-date-range');
        }
      });
    }
  }
  displayCalendarEvents(date) {
    return this.calendarEvents.filter(event => {
      if (
        new Date(`${this.currentYear}/${this.currentMonth + 1}/${date + 1}`) >= event.start &&
        new Date(`${this.currentYear}/${this.currentMonth + 1}/${date}`) <= event.end
      ) {
        return event;
      }
    })
  }
  endDaysByDrag(date: any) {
    this.eventEndDate = date;
    this.calendarEvents.push({
      id: '_' + Math.random().toString(36).substr(2, 9),
      start: new Date(`${this.currentYear}/${this.currentMonth + 1}/${this.eventStartDate} 08:00:00 GMT-0500`),
      end: new Date(`${this.currentYear}/${this.currentMonth + 1}/${this.eventEndDate} 09:00:00 GMT-0500`),
      name: 'calendar event',
      color: 'red',
      description: 'description',
    })
    console.log(this.calendarEvents)
    document.querySelector('.calendar').removeEventListener('mousemove', this.selectDays)
  }
  ngOnInit() {
    console.log(new Date())
    this.currentMonth = this.date.getMonth();
    this.displayMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.currentDay = this.date.getDate();
  }

}
