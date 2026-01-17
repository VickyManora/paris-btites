import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeaturesComponent } from './components/features/features.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LocationComponent } from './components/location/location.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { StickyCtaComponent } from './components/sticky-cta/sticky-cta.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HowItWorksComponent,
    MenuComponent,
    FeaturesComponent,
    GalleryComponent,
    LocationComponent,
    FaqComponent,
    FooterComponent,
    StickyCtaComponent,
    OrderSummaryComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
