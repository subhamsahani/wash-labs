import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactCard {
  label: string;
  value: string;
  actionText: string;
  icon: string;
  action: () => void;
}

@Component({
  selector: 'app-contact-component',
  imports: [CommonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {
  cards: ContactCard[] = [
    {
      label: 'CALL US',
      value: '+91 81477 51900',
      actionText: 'Call Now',
      icon: 'pricing/phone.png',
      action: () => window.open('tel:+918147751900'),
    },
    {
      label: 'WHATSAPP',
      value: '+91 81477 51900',
      actionText: 'Chat Now',
      icon: 'pricing/whatsapp.png',
      action: () => window.open('https://wa.me/918147751900', '_blank'),
    },
    {
      label: 'EMAIL US',
      value: 'washlablaundry1@gmail.com',
      actionText: 'Send Email',
      icon: 'pricing/gmail.png',
      action: () => window.open('mailto:washlablaundry1@gmail.com'),
    },
    {
      label: 'LOCATIONS',
      value: '1 Branch',
      actionText: 'View Map',
      icon: 'pricing/map.png',
      action: () => window.open('https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946', '_blank'),
    },
  ];
}