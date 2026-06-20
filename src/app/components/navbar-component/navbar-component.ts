import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  isMenuOpen = false;

  navItems = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Location', route: 'location' },
    { label: 'Premium', route: 'premium' },
    { label: 'Contact', route: 'contact' },
    { label: 'FAQ', route: 'faq' },
  ];

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    this.closeMenu(); // optional for mobile menu
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  callNow() {
    window.location.href = 'tel:+91⁠⁠8147751900';
  }

  openWhatsApp() {
    window.open(
      'https://wa.me/91⁠8147751900?text=Hello%20WashLab%20Laundry',
      '_blank'
    );
  }
}

