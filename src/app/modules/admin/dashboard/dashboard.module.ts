import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileBadgeComponent } from './sidebar/profile-badge/profile-badge.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: DashboardComponent },
];

@NgModule({
    declarations: [
        DashboardComponent,
        SidebarComponent,
        ProfileBadgeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class DashboardModule { }