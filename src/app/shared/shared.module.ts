import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WidgetMenuComponent } from './components/widget-menu/widget-menu.component';
import { CalendarDetailsComponent } from './components/calendar/calendar-details/calendar-details.component';
import { FormsModule } from '@angular/forms';
import { CalendarDateOverviewComponent } from './components/calendar/calendar-date-overview/calendar-date-overview.component';
@NgModule({
    declarations: [
        NavigationComponent,
        ButtonComponent,
        CalendarComponent,
        WidgetMenuComponent,
        CalendarDetailsComponent,
        CalendarDateOverviewComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavigationComponent,
        ButtonComponent,
        CalendarComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }