import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '🍫',
      title: 'Premium Chocolate',
      description: 'Finest Belgian and French chocolate, sourced from the best chocolatiers'
    },
    {
      icon: '✨',
      title: 'Clean & Hygienic',
      description: 'Maintained to the highest standards of cleanliness and food safety'
    },
    {
      icon: '🌿',
      title: 'No Smoking, No Noise',
      description: 'A peaceful, family-friendly environment for everyone to enjoy'
    },
    {
      icon: '🌙',
      title: 'Evening Dessert Spot',
      description: 'Perfect place to unwind with sweet treats after a long day'
    }
  ];
}

