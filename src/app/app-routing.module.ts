import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: '@modules/landing/landing.module#LandingModule' },
  { path: 'admin', loadChildren: '@modules/admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: '@modules/login/login.module#LoginModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
