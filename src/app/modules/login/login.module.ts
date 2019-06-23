import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
const routes: Routes = [
    { path: '', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        SharedModule
        
    ],
    providers: [],
    bootstrap: []
})
export class LoginModule { }