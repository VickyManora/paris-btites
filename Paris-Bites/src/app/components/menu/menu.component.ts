import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';
import { MENU_ITEMS } from '../../data/menu.data';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems: MenuItem[] = MENU_ITEMS;
  itemQuantitiesInCart: { [key: number]: number } = {};

  // Today's Special - Rotates weekly (change manually or automate)
  todaysSpecials = [
    'Nutella Bliss',
    'Death by Chocolate',
    'Biscoff Delight'
  ];

  constructor(private cartService: CartService) {
    // Subscribe to cart changes to track quantities
    this.cartService.cartItems$.subscribe(items => {
      this.itemQuantitiesInCart = {};
      items.forEach(cartItem => {
        this.itemQuantitiesInCart[cartItem.menuItem.id] = cartItem.quantity;
      });
    });
  }

  get todaysSpecial(): string {
    // Simple weekly rotation based on week number
    const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    const index = weekNumber % this.todaysSpecials.length;
    return this.todaysSpecials[index];
  }

  getItemQuantity(itemId: number): number {
    return this.itemQuantitiesInCart[itemId] || 0;
  }

  isItemInCart(itemId: number): boolean {
    return this.getItemQuantity(itemId) > 0;
  }

  addToCart(item: MenuItem): void {
    // Add 1 item to cart
    this.cartService.addToCart(item, 1);
  }

  incrementQuantity(itemId: number): void {
    const currentQuantity = this.getItemQuantity(itemId);
    if (currentQuantity < 99) {
      this.cartService.updateQuantity(itemId, currentQuantity + 1);
    }
  }

  decrementQuantity(itemId: number): void {
    const currentQuantity = this.getItemQuantity(itemId);
    if (currentQuantity > 1) {
      this.cartService.updateQuantity(itemId, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      // Remove from cart when quantity reaches 0
      this.cartService.removeFromCart(itemId);
    }
  }

  get regularBowls(): MenuItem[] {
    return this.menuItems.filter(item => item.size === 'REGULAR');
  }

  get miniBowls(): MenuItem[] {
    return this.menuItems.filter(item => item.size === 'MINI');
  }

  getBadgeText(badge: string | null | undefined): string {
    if (!badge) return '';

    const badgeMap: { [key: string]: string } = {
      'BESTSELLER': '⭐ Bestseller',
      'MOST_LOVED': '🔥 Most Loved',
      'SIGNATURE': '👑 Signature'
    };

    return badgeMap[badge] || '';
  }

  getBadgeClass(badge: string | null | undefined): string {
    if (!badge) return '';
    return `badge-${badge.toLowerCase()}`;
  }
}

