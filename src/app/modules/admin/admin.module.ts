import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: '@modules/admin/dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class AdminModule { }