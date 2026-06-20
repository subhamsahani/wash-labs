import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-component',
  imports: [],
  templateUrl: './faq-component.html',
  styleUrl: './faq-component.scss',
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: "Do you wash my clothes together with other people's clothes?",
      answer: 'Absolutely not. Each order is washed separately so no need to worry about that. Your clothes are safe with us!',
      isOpen: true,
    },
    {
      question: 'Where do you clean my clothes?',
      answer: 'All clothes are processed at our dedicated, professionally managed facility using quality detergents and equipment — never at random local vendors. Every step, from washing to packing, is handled in-house by trained staff.',
      isOpen: false,
    },
    {
      question: 'What is the turnaround time?',
      answer: 'Standard orders are delivered within 24–48 hours depending on the service you choose. Express service is available for same-day or next-day delivery at select locations.',
      isOpen: false,
    },
    {
      question: "What if I'm not at home during collection or delivery?",
      answer: 'No problem — you can leave your clothes with a neighbor, security guard, or in a designated spot, and let our delivery partner know in advance. Rescheduling is also quick and easy.',
      isOpen: false,
    },
    {
      question: 'Is there a laundry service near me?',
      answer: 'We currently serve multiple areas across the city and are expanding rapidly. Enter your address or pincode on our booking page to instantly check if we deliver to your location.',
      isOpen: false,
    },
    {
      question: 'Do you provide free pickup and drop?',
      answer: 'Yes! Pickup and delivery are completely free on all orders above the minimum billing amount, with no hidden charges.',
      isOpen: false,
    },
    {
      question: 'How do I schedule a pickup?',
      answer: 'Simply book a pickup slot through our website or app, choose a convenient time, and our team will arrive at your doorstep. You can reschedule anytime before pickup.',
      isOpen: false,
    },
    {
      question: 'Do you offer premium laundry care?',
      answer: 'Yes, our Premium Laundry package includes gentle hand-wash options, mild detergents, individual packing, and extra care for delicate and high-value garments.',
      isOpen: false,
    },
    {
      question: 'Are you really the #1 laundry service?',
      answer: "We're proud to be one of the most trusted laundry services in the city, backed by thousands of happy repeat customers and consistently high ratings for quality and reliability.",
      isOpen: false,
    },
    {
      question: 'Do you offer dry cleaning as well?',
      answer: 'Absolutely. We offer professional dry cleaning for suits, formal wear, and delicate fabrics, using eco-safe solvents and premium hangers for finishing.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}