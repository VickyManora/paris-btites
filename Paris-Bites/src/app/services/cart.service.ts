import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  constructor() {
    // Load cart from localStorage on init
    this.loadCartFromStorage();
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('paris-bites-cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        this.cartItems.next(items);
      } catch (e) {
        console.error('Error loading cart from storage', e);
      }
    }
  }

  private saveCartToStorage(): void {
    localStorage.setItem('paris-bites-cart', JSON.stringify(this.cartItems.value));
  }

  addToCart(menuItem: MenuItem, quantity: number = 1): void {
    const currentCart = this.cartItems.value;
    const existingItemIndex = currentCart.findIndex(
      item => item.menuItem.id === menuItem.id
    );

    if (existingItemIndex > -1) {
      // Item exists, update quantity
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      // New item, add to cart
      currentCart.push({ menuItem, quantity });
    }

    this.cartItems.next([...currentCart]);
    this.saveCartToStorage();
  }

  updateQuantity(menuItemId: number, quantity: number): void {
    const currentCart = this.cartItems.value;
    const itemIndex = currentCart.findIndex(
      item => item.menuItem.id === menuItemId
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        currentCart.splice(itemIndex, 1);
      } else {
        currentCart[itemIndex].quantity = quantity;
      }
      this.cartItems.next([...currentCart]);
      this.saveCartToStorage();
    }
  }

  removeFromCart(menuItemId: number): void {
    const currentCart = this.cartItems.value.filter(
      item => item.menuItem.id !== menuItemId
    );
    this.cartItems.next(currentCart);
    this.saveCartToStorage();
  }

  clearCart(): void {
    this.cartItems.next([]);
    localStorage.removeItem('paris-bites-cart');
  }

  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  getTotalItems(): number {
    return this.cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => {
      const price = parseFloat(item.menuItem.price.replace('₹', ''));
      return total + (price * item.quantity);
    }, 0);
  }

  openWhatsAppOrder(customerName: string): void {
    const items = this.cartItems.value;
    if (items.length === 0) {
      return;
    }

    // Build message as plain Unicode string with safe emojis
    let message = '🛒 ONLINE ORDER\n\n';
    message += '🛎️ *New Order from Paris Bites Website*\n\n';
    message += `👤 *Customer Name:* ${customerName}\n\n`;
    message += '🍫 *Order Details:*\n';

    // Number emojis for items
    const numberEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

    items.forEach((item, index) => {
      const price = parseFloat(item.menuItem.price.replace('₹', ''));
      const itemTotal = price * item.quantity;
      const numberEmoji = index < numberEmojis.length ? numberEmojis[index] : `${index + 1}.`;
      message += `${numberEmoji} *${item.menuItem.name}*\n`;
      message += `   🔢 Quantity: ${item.quantity}\n`;
      message += `   💰 Price: ₹${price} x ${item.quantity} = ₹${itemTotal}\n\n`;
    });

    const total = this.getTotalPrice();
    message += '➖➖➖➖➖➖➖➖➖\n';
    message += `🧾 *Total Amount:* ₹${total}\n`;
    message += '➖➖➖➖➖➖➖➖➖\n\n';
    message += '📍 *Pickup Location:*\n';
    message += 'Paris Bites, Aundh, Pune\n\n';
    message += '⏰ *Preferred Pickup Time:* _____\n\n';
    message += '🙏 Thank you for your order!';

    // Use wa.me with encodeURIComponent on the FULL message
    const whatsappNumber = '917769983857';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Debug: Log to console
    console.log('=== WhatsApp Message ===');
    console.log(message);
    console.log('=== WhatsApp URL ===');
    console.log(whatsappUrl);

    window.open(whatsappUrl, '_blank');
  }
}

