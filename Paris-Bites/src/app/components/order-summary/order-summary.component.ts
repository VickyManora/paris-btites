import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { ModalComponent, ModalConfig } from '../modal/modal.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;
  showCart: boolean = false;
  private cartSubscription?: Subscription;

  // Modal state
  showModal: boolean = false;
  modalConfig: ModalConfig = {
    title: '',
    type: 'confirm'
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalItems = this.cartService.getTotalItems();
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
    // Prevent body scroll when cart is open
    if (this.showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  updateQuantity(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity);
  }

  removeItem(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  clearCart(): void {
    this.modalConfig = {
      title: 'Clear Cart?',
      message: 'Are you sure you want to remove all items from your cart?',
      type: 'confirm',
      confirmText: 'Yes, Clear Cart',
      cancelText: 'Cancel'
    };
    this.showModal = true;
  }

  handleClearCartConfirm(): void {
    this.cartService.clearCart();
    this.showCart = false;
    document.body.style.overflow = '';
    this.showModal = false;
  }

  orderOnWhatsApp(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty. Please add items to order.');
      return;
    }

    // Show name input modal
    this.modalConfig = {
      title: 'Enter Your Name',
      message: 'Please provide your name for the order:',
      type: 'input',
      inputPlaceholder: 'Your name...',
      confirmText: 'Order on WhatsApp',
      cancelText: 'Cancel'
    };
    this.showModal = true;
  }

  handleNameConfirm(customerName: string | boolean): void {
    if (typeof customerName === 'string' && customerName.trim()) {
      this.cartService.openWhatsAppOrder(customerName.trim());
      this.showModal = false;
      // Optionally clear cart after ordering
      // this.cartService.clearCart();
      // this.showCart = false;
    }
  }

  handleModalCancel(): void {
    this.showModal = false;
  }

  getItemTotal(item: CartItem): number {
    const price = parseFloat(item.menuItem.price.replace('₹', ''));
    return price * item.quantity;
  }
}

