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
      value: '+91 98765 43210',
      actionText: 'Call Now',
      icon: '📞',
      action: () => window.open('tel:+919876543210'),
    },
    {
      label: 'WHATSAPP',
      value: '+91 98765 43210',
      actionText: 'Chat Now',
      icon: '💬',
      action: () => window.open('https://wa.me/919876543210', '_blank'),
    },
    {
      label: 'EMAIL US',
      value: 'info@prasadlaundry.com',
      actionText: 'Send Email',
      icon: '✉️',
      action: () => window.open('mailto:info@prasadlaundry.com'),
    },
    {
      label: 'LOCATIONS',
      value: '2 Branches',
      actionText: 'View Map',
      icon: '📍',
      action: () => window.open('https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946', '_blank'),
    },
  ];
}