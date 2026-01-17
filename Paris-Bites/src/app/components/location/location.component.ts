import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  openWhatsApp(): void {
    window.open('https://wa.me/917769983857', '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/parisbitesofficial', '_blank');
  }
}

