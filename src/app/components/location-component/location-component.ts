import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../shared/safeurl.pipe'

interface Branch {
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
}

@Component({
  selector: 'app-location-component',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './location-component.html',
  styleUrl: './location-component.scss',
})
export class LocationComponent {
  branch: Branch = {
    name: 'Washlab Laundry - Main Branch',
    address: '4th Cross, S.G. Palya, Bengaluru 560029',
    hours: 'Mon–Sun: 7:00 AM – 10:00 PM',
    phone: '+91 98765 43210',
    // Replace YOUR_API_KEY with actual key, or use a public embed link
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    mapDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=12.9716,77.5946',
  };

  openInMaps(): void {
    window.open(this.branch.mapDirectionsUrl, '_blank');
  }

  callBranch(): void {
    window.open(`tel:${this.branch.phone}`);
  }

  openWhatsApp(): void {
    const number = this.branch.phone.replace(/\s+/g, '').replace('+', '');
    window.open(`https://wa.me/${number}`, '_blank');
  }
}