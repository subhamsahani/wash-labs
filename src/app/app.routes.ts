import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home';
import { PricesFullViewComponent } from './components/prices-full-view-component/prices-full-view-component';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pricing',
    component: PricesFullViewComponent
  }
];