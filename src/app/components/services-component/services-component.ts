import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  imports: [
    CommonModule
  ],
  templateUrl: './services-component.html',
  styleUrl: './services-component.scss',
})
export class ServicesComponent {

  constructor(
    private router: Router
  ) {

  }

 packages = [
    {
      title: 'Wash & Fold',
      subtitle: 'WASH + DRY + FOLD',
      description: 'Suitable for shirts, pants, under-garments and only wearable clothes.',
      icon: 'fold-image.jpeg',
      deliveryDays: '2 Days',
      priceUnit: 'kg',
      price: 69,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Wash & Steam Iron',
      subtitle: 'WASH + DRY + STEAM IRONING',
      description: 'Suitable for t-shirt, trousers, shirts and only Wearbale clothes',
      icon: 'steam-iron.jpg',
      deliveryDays: '3 Days',
      priceUnit: 'kg',
      price: 99,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Iron',
      subtitle: 'IRONING',
      description: 'Suitable for t-shirt, trousers, shirts and only Wearbale clothes',
      icon: 'wash-iron.jpeg',
      deliveryDays: '3 Days',
      priceUnit: 'piece',
      price: 15,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Roll Polish',
      subtitle: 'ROLL POLISHING',
      description: 'Suitable for saree',
      icon: 'roll polish.webp',
      deliveryDays: '3 Days',
      priceUnit: 'saree',
      price: 99,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Premium Laundry',
      subtitle: 'WASH + DRY + IRONING + PACKING',
      description: 'For your luxury & premium clothes.',
      icon: 'premium-laundry.jpeg',
      deliveryDays: '2 Days',
      priceUnit: 'kg',
      price: 199,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Dry Cleaning',
      subtitle: 'DRY CLEANING + IRONING + INDIVIDUAL PACKING',
      description: 'Suitable for suits, shirts, dresses, coats and more.',
      icon: 'dry-clean.jpeg',
      deliveryDays: '4 Days',
      priceUnit: 'kg',
      price: 99,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    {
      title: 'Non-Wearable Laundry',
      subtitle: 'HOUSEHOLD LAUNDRY',
      description: 'Only for duvets, bedsheets, pillows, blankets and Non-Wearables.',
      icon: 'non-wearable.jpeg',
      deliveryDays: '3 Days',
      priceUnit: 'kg',
      price: 169,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing' 
    },
    {
      title: 'Express Service',
      subtitle: 'FAST SERVICE',
      description: 'Suitable for Super Fast Service.',
      icon: 'express-service.jpeg',
      deliveryDays: '1 Days',
      priceUnit: 'kg',
      price: 249,
      minBilling: 399,
      isPopular: false,
      isPinkButton: false,
      buttonText: 'View Pricing'
    },
    
  ];

  goToPricingPage(){
    this.router.navigate(['/pricing'])
  }
}