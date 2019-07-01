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
  displayYear: number;
  currentDay: number;
  highlightedDay: number = 35;
  eventStartDate: number;
  eventEndDate: number;
  eventDetails: CalendarEvent;
  selectDays = this.selectDaysByDrag.bind(this);
  calendarEvents: Array<CalendarEvent> = [
    {
      id: '_' + Math.random().toString(36).substr(2, 9),
      start: new Date(`2019/6/30 08:00:00 GMT-0500`),
      end: new Date(`2019/6/30 09:00:00 GMT-0500`),
      name: 'Test Event with really really long name',
      color: '#0395A5',
      description: '',
    }
  ];
  newDate(val: number) {
    this.eventStartDate = null
    this.displayMonth = this.displayMonth + val;
    this.date = new Date(this.displayYear, this.displayMonth, this.currentDay);
    this.firstDay = new Date(this.displayYear, this.displayMonth, 1).getDay();
    this.lastDay = new Date(this.displayYear, this.displayMonth + 1, 0).getDate();
    if (this.displayMonth > 11) {
      this.displayMonth = 0;
      this.displayYear = this.displayYear + 1;
    }
    if (this.displayMonth < 0) {
      this.displayMonth = 11;
      this.displayYear = this.displayYear - 1;
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
  selectDate(index: number, e: Event) {
    console.log(e.type);
    this.highlightedDay = index;
  }
  removeHighlightedDays() {
    const dateNumbers = document.querySelectorAll('.date') as any;
    dateNumbers.forEach((dateNumber: HTMLElement, index: number) => {
      // if (index !== this.highlightedDay) { 
        dateNumber.classList.remove('highlighted-date-range')
      // }
    });
  }
  calendarEventExists(calEvent: CalendarEvent) {
    return this.calendarEvents.map(cal => cal.id).includes(calEvent.id);
  }
  addEventToDate(calEvent: CalendarEvent) {
    this.calendarEvents.forEach(event => {
      if (calEvent.id === calEvent.id) {
        calEvent = event;
      }
    })
  }
  updateEventDetails(calEvent: CalendarEvent) {
    if (this.calendarEventExists(calEvent)) {
      this.addEventToDate(calEvent)
    } else {
      this.calendarEvents.push(calEvent);
    }
    this.removeHighlightedDays()
    this.eventDetails = null;
  }
  editEventDetails(calEvent: CalendarEvent, e: Event) {
    // e.stopPropagation()
    this.eventDetails = calEvent;
  }
  displayCalendarEvents(date: number) {
    return this.calendarEvents.filter(event =>
        new Date(`${this.displayYear}/${this.displayMonth + 1}/${date + 1}`) >= event.start &&
        new Date(`${this.displayYear}/${this.displayMonth + 1}/${date}`) <= event.end
      )
  }
  findUpClassName(el: any, className: string) {
    while (el.parentNode) {
      el = el.parentNode;
      if (el.classList && el.classList.contains(className)) return el;
    }
    return null;
  }
  createEvent(e: Event) {
    console.log(e.type)
    this.eventDetails = {
      id: '_' + Math.random().toString(36).substr(2, 9),
      start: new Date(`${this.displayYear}/${this.displayMonth + 1}/${this.eventStartDate} 08:00:00 GMT-0500`),
      end: new Date(`${this.displayYear}/${this.displayMonth + 1}/${this.eventEndDate} 09:00:00 GMT-0500`),
      name: '',
      color: '#0395A5',
      description: '',
    }
  }
  createEventByDrag(date: number, e: Event) {
    console.log(e.type)
    this.eventStartDate = date;
    this.eventEndDate = date;
    this.removeHighlightedDays()
    document.querySelector('.calendar').addEventListener('mousemove', this.selectDays)
  }
  selectDaysByDrag(event: any) {
    const dateNumbers = document.querySelectorAll('.date') as any;
    const element = this.findUpClassName(event.target, 'date');
      dateNumbers.forEach(dateNumber => {
        if (
          element &&
          Number(dateNumber.children[0].innerText) >= this.eventStartDate &&
          Number(dateNumber.children[0].innerText) <= Number(element.children[0].innerText)
        ) {
          dateNumber.classList.add('highlighted-date-range');
        } else
        if (element && Number(dateNumber.children[0].innerText) > Number(element.children[0].innerText)) {
          dateNumber.classList.remove('highlighted-date-range');
        }
      });
    if (element) {
      this.eventEndDate = Number(element.children[0].innerText);
    }
    // }
  }
  endDaysByDrag(date: any, event: CalendarEvent, e: Event) {
    console.log(e.type)
    document.querySelector('.calendar').removeEventListener('mousemove', this.selectDays)
    if (this.eventStartDate !== this.eventEndDate) {
      e.stopPropagation();
      // console.log(event)
      // this.eventEndDate = date;
      if (!event) {
      
        this.eventDetails = {
          id: '_' + Math.random().toString(36).substr(2, 9),
          start: new Date(`${this.displayYear}/${this.displayMonth + 1}/${this.eventStartDate} 08:00:00 GMT-0500`),
          end: new Date(`${this.displayYear}/${this.displayMonth+ 1}/${this.eventEndDate} 09:00:00 GMT-0500`),
          name: '',
          color: '#0395A5',
          description: '',
        }
      } else {
        this.eventDetails = event;
      }
      this.removeHighlightedDays()
    }
  }
  ngOnInit() {
    this.currentMonth = this.date.getMonth();
    this.displayMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.displayYear = this.date.getFullYear();
    this.currentDay = this.date.getDate();
  }

}
