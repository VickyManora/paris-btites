import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      number: '1',
      icon: '🍫',
      title: 'Browse Menu',
      description: 'Explore our delicious chocolate bowls and desserts'
    },
    {
      number: '2',
      icon: '➕',
      title: 'Add to Cart',
      description: 'Click "ADD" on your favorites and adjust quantities'
    },
    {
      number: '3',
      icon: '📝',
      title: 'Review Order',
      description: 'Check your cart and enter your name'
    },
    {
      number: '4',
      icon: '💬',
      title: 'Order on WhatsApp',
      description: 'Send your order directly via WhatsApp - we\'ll confirm within minutes'
    },
    {
      number: '5',
      icon: '🎉',
      title: 'Pick Up & Enjoy',
      description: 'Visit us at the scheduled time and enjoy your fresh desserts!'
    }
  ];
}

