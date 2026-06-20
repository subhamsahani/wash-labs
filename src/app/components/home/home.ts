import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { ServicesComponent } from '../../components/services-component/services-component';
import { LocationComponent } from '../../components/location-component/location-component';
import { PremiumServicesComponent } from '../../components/premium-services-component/premium-services-component';
import { ContactComponent } from '../../components/contact-component/contact-component';
import { FooterComponent } from '../../components/footer-component/footer-component';
import { FaqComponent } from '../faq-component/faq-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    LocationComponent,
    PremiumServicesComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}