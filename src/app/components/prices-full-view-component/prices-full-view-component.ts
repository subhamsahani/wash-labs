import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingCard {
  title: string;
  description: string;
  deliveryTime: string;
  tags: string[];
  pricePerKg?: number;
  minimumBilling?: number;
  itemPrices?: { item: string; price: number }[];
  image: string;
}

@Component({
  selector: 'app-prices-full-view-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices-full-view-component.html',
  styleUrl: './prices-full-view-component.scss'
})
export class PricesFullViewComponent {

  pricingCards: PricingCard[] = [
    {
      title: 'Wash & Fold',
      description: 'For everyday laundry, wearable clothes only.',
      deliveryTime: '2 Days (Excluding Pickup Day)',
      tags: ['WASH', 'FOLD'],
      pricePerKg: 69,
      minimumBilling: 399,
      image: 'pricing/clean.png'
    },
    {
      title: 'Wash & Steam Iron',
      description: 'For wearable laundry that requires ironing.',
      deliveryTime: '3 Days (Excluding Pickup Day)',
      tags: ['WASH', 'DRY', 'STEAM IRONING'],
      pricePerKg: 99,
      minimumBilling: 399,
      image: 'pricing/ironing.png'
    },
    {
      title: 'Premium Laundry',
      description: 'For your special wearable clothes.',
      deliveryTime: '2 Days (Excluding Pickup Day)',
      tags: ['WASH', 'DRY', 'IRON', 'PACKING'],
      pricePerKg: 199,
      minimumBilling: 399,
      image: 'pricing/washable.png'
    },
    {
      title: 'Non Wearable Items',
      description: 'For larger items that require extra care.',
      deliveryTime: '3 Days (Excluding Pickup Day)',
      tags: ['HOUSEHOLD CLEANING'],
      pricePerKg: 199,
      minimumBilling: 399,
      image: 'pricing/bedding.png'
    },
    {
      title: 'Express Service',
      description: 'Superfast delivery service.',
      deliveryTime: '1 Day',
      tags: ['SUPERFAST SERVICE'],
      pricePerKg: 199,
      minimumBilling: 399,
      image: 'pricing/express-delivery.png'
    },
    {
      title: 'Bedsheets',
      description: 'Professional washing and sanitization for bedsheets',
      deliveryTime: '2 Day',
      tags: ['DEEP CLEAN', 'HYGIENE CARE'],
      pricePerKg: 129,
      minimumBilling: 399,
      image: 'pricing/make-the-bed.png'
    },
    {
      title: 'Blankets',
      description: 'Expert cleaning and sanitization for blankets',
      deliveryTime: '2 Day',
      tags: ['DEEP CLEAN', 'SANITIZED CARE'],
      image: 'pricing/bed.png',
      itemPrices: [
        { item: 'Blanket (Single)', price: 356 },
        { item: 'Blankets (Double)', price: 448 },
        { item: 'Quilt (Single)', price: 268 },
        { item: 'Quilt (Double)', price: 356 },
      ]
    },
    {
      title: "Dry Cleaning - Men's",
      description: 'Waterless solvent cleaning.',
      deliveryTime: '4 Days (Excluding Pickup Day)',
      tags: ['WATERLESS SOLVENT'],
      image: 'pricing/man.png',
      itemPrices: [
        { item: 'Shirt / T-shirt', price: 119 },
        { item: 'Trouser / Jeans', price: 119 },
        { item: 'Suit (2 pcs Blazer & Trouser)', price: 349 },
        { item: 'Suit (3 Pcs - Blazer, Trouser & Shirt)', price: 399 },
        { item: 'Kurta', price: 149 },
        { item: 'Kurta (Fancy)', price: 199 },
        { item: 'Sherwani', price: 600 },
        { item: 'Payjama', price: 119 },
        { item: 'Coat', price: 300 },
        { item: 'Jacket/Blazer', price: 299 },
        { item: 'Waist Coat/Half Coat', price: 199 },
        { item: 'Overcoat', price: 350 },
        { item: 'Leather Jacket', price: 500 },
        { item: 'Sweater/Pullover', price: 199 },
        { item: 'Dhoti', price: 250 },
      ]
    },
    {
      title: "Dry Cleaning - Women's",
      description: 'Waterless solvent cleaning.',
      deliveryTime: '4 Days (Excluding Pickup Day)',
      tags: ['WATERLESS SOLVENT'],
      image: 'pricing/profile.png',
      itemPrices: [
        { item: 'Top/Bottom (Light)', price: 149 },
        { item: 'Lehenga (Plain)', price: 350 },
        { item: 'Lehenga (Heavy)', price: 750 },
        { item: 'Saree (Cotton)', price: 249 },
        { item: 'Saree (Silk)', price: 299 },
        { item: 'Saree (Fancy)', price: 350 },
        { item: 'Skirt', price: 130 },
        { item: 'Blouse', price: 149 },
        { item: 'Blouse (Fancy)', price: 200 },
        { item: 'Long Dress /Jump Suit', price: 300 },
        { item: 'Waist Coat/Half Coat', price: 150 },
        { item: 'Shawl', price: 150 },
        { item: 'Gown', price: 500 },
        { item: 'Jacket/Blazer', price: 299 },
        { item: 'Waist Coat/Half Coat', price: 199 },
        { item: 'Overcoat', price: 350 },
        { item: 'Leather Jacket', price: 500 },
        { item: 'Sweater/Pullover', price: 199 },
        { item: 'Kurta', price: 149 },
        { item: 'Kurta (Fancy)', price: 199 },
        { item: 'Dupatta', price: 149 },
        { item: 'Dupatta (Fancy)', price: 200 },
      ]
    },
    {
      title: "Dry Cleaning - Others",
      description: 'Waterless solvent cleaning.',
      deliveryTime: '4 Days (Excluding Pickup Day)',
      tags: ['WATERLESS SOLVENT'],
      image: 'pricing/suits.png',
      itemPrices: [
        // { item: 'Blanket/Quilt/Comforter (Single)', price: 119 },
        // { item: 'Blanket/Quilt/Comforter (Double)', price: 119 },
        // { item: 'Bed Sheet (Single)', price: 119 },
        // { item: 'Bed Sheet (Double)', price: 119 },
        { item: 'Door Mat', price: 119 },
        { item: 'Sofa cover', price: 119 },
        { item: 'Shoes', price: 119 },
        { item: 'Crocks', price: 119 },
        { item: 'Pillow', price: 119 },
        { item: 'Pillow Cover', price: 119 },
        { item: 'Cap', price: 119 },
        { item: 'Curtains (Single Layer)', price: 119 },
        { item: 'Curtains (Double Layer)', price: 119 },
        { item: 'Carpet', price: 119 },
        { item: 'Teddy', price: 119 },
        { item: 'Shoulder Bag/ Ladies Purse', price: 119 },
        { item: 'Trolly Bag/Bags', price: 119 },
        
      ]
    },
    
  ];
}