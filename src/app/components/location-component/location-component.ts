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
    address: '⁠1830,41, st cross, 26th Main Rd, Putlanpalya, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560041',
    hours: 'Mon–Sun: 9:00 AM – 9:30 PM',
    phone: '+91 ⁠81477 51900',
    // Replace YOUR_API_KEY with actual key, or use a public embed link
    mapEmbedUrl: 'https://www.google.com/maps?q=1830%2C41%2C%20st%20cross%2C%2026th%20Main%20Rd%2C%20Putlanpalya%2C%20Jayanagara%209th%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041&output=embed',
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
    const phone = '+91 8147751900';
    const number = phone.replace(/\D/g, ''); // removes everything except digits
    window.open(`https://wa.me/${number}`, '_blank');
  }
}