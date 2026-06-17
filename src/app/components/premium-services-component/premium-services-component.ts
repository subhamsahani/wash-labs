import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PremiumService {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-premium-services-component',
  imports: [CommonModule],
  templateUrl: './premium-services-component.html',
  styleUrl: './premium-services-component.scss',
})
export class PremiumServicesComponent {
  services: PremiumService[] = [
    {
      icon: '🫧',
      title: 'Regular Washing',
      description:
        'Everyday clothes washing with gentle eco-friendly detergents. Perfect for cotton & synthetic wear. 48-hour turnaround.',
    },
    {
      icon: '✨',
      title: 'Dry Cleaning',
      description:
        'Professional dry-cleaning for delicate fabrics, formal wear & special garments. Expert stain removal with eco-safe solvents.',
    },
    {
      icon: '🚚',
      title: 'Free Pickup & Delivery',
      description:
        'Convenient doorstep service. Schedule pickup & delivery as per your convenience with real-time tracking.',
    },
    {
      icon: '👔',
      title: 'Professional Ironing',
      description:
        'Expert pressing for crisp, wrinkle-free finish. Steam ironing, light ironing, and heavy ironing options available.',
    },
    {
      icon: '👟',
      title: 'Shoe Cleaning & Care',
      description:
        'Deep cleaning, whitening, deodorizing, and leather care for all shoe types. Specialized treatment for different materials.',
    },
    {
      icon: '🛡️',
      title: '100% Quality Guarantee',
      description:
        '100% satisfaction guaranteed. Professional handling, careful inspection, and premium packaging for all garments.',
    },
  ];
}