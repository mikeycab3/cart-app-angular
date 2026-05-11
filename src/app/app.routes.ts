import { Routes } from '@angular/router';
import { CartAppComponent } from './components/cart-app/cart-app.component';
import { LandingPagesComponent } from './components/landing-pages/landing-pages.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { Component } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  {path:'cartApp', component:CartAppComponent},
  {path:'login', component:LoginComponent},
  {path: 'lading-page', component:LandingPagesComponent},
  {path:'', redirectTo:'lading-page', pathMatch:'full'}
];
