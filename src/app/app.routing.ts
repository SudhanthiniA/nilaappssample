import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BlankComponent } from './layouts/blank/blank.component';

const routes: Routes = [
  {
    path: 'login',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
  {
    path: 'authentication', component: BlankComponent, children: [{
      path: '',
      // loadChildren: './authentication/authentication.module#AuthenticationModule'.
      loadChildren: () => import('app/authentication/authentication.module').then(m => m.AuthenticationModule)
    }]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
