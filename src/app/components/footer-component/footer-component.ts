import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-component',
  imports: [CommonModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
 currentYear = new Date().getFullYear();
 
  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
