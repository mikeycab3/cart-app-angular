import { Routes } from '@angular/router';
import { CartAppComponent } from './components/cart-app/cart-app.component';
import { LandingPagesComponent } from './components/landing-pages/landing-pages.component';

export const routes: Routes = [
  {path:'cartApp', component:CartAppComponent},
  {path: 'lading-page', component:LandingPagesComponent},
  {path:'', redirectTo:'lading-page', pathMatch:'full'}
];
