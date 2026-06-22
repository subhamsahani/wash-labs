import { Component } from '@angular/core';

interface DiscountPlan {
  tier: string;
  tagline: string;
  buyAmount: number;
  getAmount: number;
  bonusAmount: number;
  bonusPercent: number;
  icon: string;
  isFeatured: boolean;
}

@Component({
  selector: 'app-discounts-components',
  imports: [],
  templateUrl: './discounts-components.html',
  styleUrl: './discounts-components.scss',
})
export class DiscountsComponents {
  plans: DiscountPlan[] = [
    {
      tier: 'Classic',
      tagline: 'Great for everyday laundry needs',
      buyAmount: 1000,
      getAmount: 1100,
      bonusAmount: 100,
      bonusPercent: 10,
      icon: 'bi-award',
      isFeatured: false,
    },
    {
      tier: 'Silver',
      tagline: 'Best for regular customers',
      buyAmount: 2000,
      getAmount: 2250,
      bonusAmount: 250,
      bonusPercent: 12.5,
      icon: 'bi-shield-check',
      isFeatured: false,
    },
    {
      tier: 'Gold',
      tagline: 'Maximum savings, maximum value',
      buyAmount: 3000,
      getAmount: 3400,
      bonusAmount: 400,
      bonusPercent: 13.3,
      icon: 'bi-trophy-fill',
      isFeatured: true,
    },
  ];
}