import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero-component/hero-component';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ServicesComponent } from './components/services-component/services-component';
import { LocationComponent } from './components/location-component/location-component';
import { PremiumServicesComponent } from './components/premium-services-component/premium-services-component';
import { ContactComponent } from './components/contact-component/contact-component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, 
    HeroComponent, 
    FooterComponent, 
    ServicesComponent, 
    LocationComponent,
    PremiumServicesComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client-project-one');
}
