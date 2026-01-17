import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  openWhatsApp(): void {
    window.open('https://wa.me/917769983857', '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/parisbitesofficial', '_blank');
  }
}

