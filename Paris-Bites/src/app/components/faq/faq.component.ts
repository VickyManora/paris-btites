import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FAQItem[] = [
    {
      question: 'Do you use real chocolate?',
      answer: 'Yes. We use premium-quality real chocolate and fresh ingredients in every dessert. Quality and taste are always our top priority.',
      isOpen: false
    },
    {
      question: 'Do mini bowls taste the same as regular bowls?',
      answer: 'Absolutely! Mini bowls follow the same recipe and flavors as our regular bowls — just in a smaller portion. Perfect for quick cravings or trying multiple flavors.',
      isOpen: false
    },
    {
      question: 'Are your desserts made fresh?',
      answer: 'Yes, all our desserts are freshly prepared daily to ensure the best taste and quality.',
      isOpen: false
    },
    {
      question: 'Is it very sweet?',
      answer: 'No. Our bowls are balanced — rich chocolate, not overly sweet. Perfect for those who love chocolate without the sugar overload.',
      isOpen: false
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

