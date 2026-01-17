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
  galleryImages: GalleryItem[] = [
    { image: 'assets/gallery/influencer live moments.png', caption: 'Evening dessert vibes', label: 'Real customers' },
    { image: 'assets/gallery/influencer live moments2.png', caption: 'Customer favorite bowls', label: 'Evening rush' },
    { image: 'assets/gallery/influencer live moments3.png', caption: 'Freshly prepared, every order', label: 'Freshly prepared' },
    { image: 'assets/gallery/influencer-live-moment-4.png', caption: 'From our cart in Aundh' },
    { image: 'assets/gallery/paris bites menu gallary.png', caption: 'Our signature chocolate bowls' },
    { image: 'assets/gallery/paris bites menu gallary2.png', caption: 'Premium quality ingredients' },
    { image: 'assets/gallery/paris bites menu gallary3.png', caption: 'Made with love, served fresh' },
    { image: 'assets/gallery/paris bites cart2.png', caption: 'Your neighborhood dessert cart' }
  ];
}

