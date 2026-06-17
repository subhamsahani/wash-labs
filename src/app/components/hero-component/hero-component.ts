import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-component',
  imports: [
    CommonModule
  ],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent  {
quickServices = [
    { name: 'Dry Cleaning',  icon: 'dry-clean.svg',  emoji: '👔' },
    { name: 'Wet Cleaning',  icon: 'wet-clean.svg',  emoji: '💧' },
    { name: 'Laundry',       icon: 'laundry.svg',    emoji: '🫧' },
    { name: 'Iron Clothes',  icon: 'iron.svg',       emoji: '👕' },
  ];
 
  ngOnInit(): void {
    this.initScrollAnimations();
  }
 
  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
 
  private initScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
 
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
      observer.observe(el);
    });
  }
}
