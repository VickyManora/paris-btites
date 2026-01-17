import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface GalleryItem {
  image: string;
  caption: string;
  label?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  // All real gallery images: 4 influencer moments + 3 menu gallery photos + 1 cart photo
  // Optimized JPG format for faster loading
  galleryImages: GalleryItem[] = [
    { image: 'assets/gallery/influencer live moments.jpg', caption: 'Evening dessert vibes', label: 'Real customers' },
    { image: 'assets/gallery/influencer live moments2.jpg', caption: 'Customer favorite bowls', label: 'Evening rush' },
    { image: 'assets/gallery/influencer live moments3.jpg', caption: 'Freshly prepared, every order', label: 'Freshly prepared' },
    { image: 'assets/gallery/influencer-live-moment-4.jpg', caption: 'From our cart in Aundh' },
    { image: 'assets/gallery/paris bites menu gallary.jpg', caption: 'Our signature chocolate bowls' },
    { image: 'assets/gallery/paris bites menu gallary2.jpg', caption: 'Premium quality ingredients' },
    { image: 'assets/gallery/paris bites menu gallary3.jpg', caption: 'Made with love, served fresh' },
    { image: 'assets/gallery/paris bites cart2.jpg', caption: 'Your neighborhood dessert cart' }
  ];
}

