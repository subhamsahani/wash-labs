import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServicePackage {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isPinkButton?: boolean;
  isCustomPrice?: boolean;
}

@Component({
  selector: 'app-services-component',
  imports: [CommonModule],
  templateUrl: './services-component.html',
  styleUrl: './services-component.scss',
})
export class ServicesComponent {
  packages: ServicePackage[] = [
    {
      title: 'Regular Wash',
      subtitle: 'Everyday Clothes',
      price: '₹50',
      unit: '/ kg',
      features: ['Gentle washing', 'Eco-friendly detergent', 'Folding & packaging', 'Free pickup', '48-hour delivery'],
      buttonText: 'Order Now',
    },
    {
      title: 'Premium Wash',
      subtitle: 'Delicate & Casual',
      price: '₹80',
      unit: '/ kg',
      features: ['Hand-wash option', 'Mild detergent', 'Premium packaging', 'Free pickup & delivery', '24-hour service'],
      buttonText: 'Order Now',
      isPopular: true,
      isPinkButton: true,
    },
    {
      title: 'Dry Cleaning',
      subtitle: 'Formal & Delicate',
      price: '₹120',
      unit: '/ piece',
      features: ['Professional dry-clean', 'Stain removal', 'Eco-safe solvents', 'Premium hanger', 'Pickup & delivery'],
      buttonText: 'Order Now',
    },
    {
      title: 'Ironing Service',
      subtitle: 'Press & Polish',
      price: '₹10',
      unit: '/ piece',
      features: ['Professional pressing', 'Wrinkle-free finish', 'Steam ironing', 'Careful handling', 'Quick delivery'],
      buttonText: 'Order Now',
    },
    {
      title: 'Shoe Cleaning',
      subtitle: 'Deep Clean Care',
      price: '₹150',
      unit: '/ pair',
      features: ['Deep cleaning', 'Odor removal', 'Whitening service', 'Eco-friendly process', '3-day service'],
      buttonText: 'Order Now',
    },
    {
      title: 'Bulk Orders',
      subtitle: 'Corporate & Hostel',
      price: 'Custom',
      unit: 'Pricing',
      features: ['Volume discounts', 'Flexible schedules', 'Dedicated pickup', 'Invoice billing', 'Account support'],
      buttonText: 'Get Quote',
      isCustomPrice: true,
    },
  ];
}