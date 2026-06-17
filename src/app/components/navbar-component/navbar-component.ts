import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [
    CommonModule
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent  {
navItems = [
    'Home',
    'Pricing',
    'Locations',
    'Services',
    'FAQ'
  ];

  callNow() {
    window.location.href = 'tel:+919876543210';
  }

  openWhatsApp() {
    window.open(
      'https://wa.me/919876543210?text=Hello%20Prasad%20Laundry',
      '_blank'
    );
  }
}
