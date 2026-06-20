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
      icon: 'pricing/wash-and-dry.png',
      title: 'Regular Washing',
      description:
        'Everyday clothes washing with gentle eco-friendly detergents. Perfect for cotton & synthetic wear. 48-hour turnaround.',
    },
    {
      icon: 'pricing/suits.png',
      title: 'Dry Cleaning',
      description:
        'Professional dry-cleaning for delicate fabrics, formal wear & special garments. Expert stain removal with eco-safe solvents.',
    },
    {
      icon: 'pricing/delivery-bike.png',
      title: 'Free Pickup & Delivery',
      description:
        'Convenient doorstep service. Schedule pickup & delivery as per your convenience with real-time tracking.',
    }
  ];
}