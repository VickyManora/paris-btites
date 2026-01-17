import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sticky-cta.component.html',
  styleUrl: './sticky-cta.component.scss'
})
export class StickyCtaComponent implements OnInit, OnDestroy {
  hasCartItems: boolean = false;
  private cartSubscription?: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.hasCartItems = items.length > 0;
    });
  }

  ngOnDestroy(): void {
    this.cartSubscription?.unsubscribe();
  }

  openWhatsApp(): void {
    window.open('https://wa.me/917769983857', '_blank');
  }
}

