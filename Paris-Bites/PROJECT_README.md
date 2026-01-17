# Paris Bites – Chocolaterie & Desserts

A premium single-page website for a dessert brand built with Angular (latest version) featuring an elegant Paris café aesthetic.

## 🎨 Design Features

- **Theme Colors**: Soft pink (#f8b4c3), cream/white (#faf8f5), beige (#d4a574), gold accents (#c9a961)
- **Typography**: Playfair Display (headings) + Poppins (body)
- **Fully Responsive**: Mobile-first design approach
- **Smooth Animations**: Scroll-triggered fade-in effects and hover transitions
- **No UI Frameworks**: Pure SCSS styling, no Bootstrap or Material

## 🏗️ Architecture

### Technology Stack
- **Angular 19** (latest version)
- **Standalone Components** (no modules)
- **TypeScript**
- **SCSS** for styling
- **Single-page layout** (no routing)

### Project Structure
```
Paris-Bites/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Sticky navigation header
│   │   │   ├── hero/            # Hero section with CTA
│   │   │   ├── about/           # About Paris Bites section
│   │   │   ├── menu/            # Menu grid (KEY FEATURE)
│   │   │   ├── features/        # Why Paris Bites section
│   │   │   ├── gallery/         # Image gallery
│   │   │   ├── location/        # Location & timing info
│   │   │   └── footer/          # Footer with social links
│   │   ├── data/
│   │   │   └── menu.data.ts     # Menu items data
│   │   ├── models/
│   │   │   └── menu-item.model.ts
│   │   ├── directives/
│   │   │   └── scroll-animation.directive.ts
│   │   ├── app.ts
│   │   ├── app.html
│   │   └── app.scss
│   ├── styles.scss              # Global styles
│   └── index.html
└── public/
    └── assets/
        ├── menu/                # Menu item images
        └── gallery/             # Gallery images
```

## 📄 Sections

### 1. Hero Section
- **Headline**: "Paris vibes are coming to your street"
- **Subtext**: "Save room for dessert. Something sweet is coming."
- **CTA Button**: "View Menu" (smooth scroll to menu)

### 2. About Paris Bites
- Brand story emphasizing quality, hygiene, and fresh preparation
- Three highlight cards: Premium Quality, Hygiene First, Fresh Daily

### 3. Menu Section (KEY FEATURE)
- **Grid Layout**: Responsive (1 col mobile → 2 cols tablet → 3-4 cols desktop)
- **12 Menu Items** with:
  - Dish image
  - Dish name
  - Short description
- **Elegant hover effects**: Card lift, image zoom, gradient overlay
- **Easy to update**: All data in `src/app/data/menu.data.ts`

### 4. Why Paris Bites
- Four feature cards:
  - Premium Chocolate
  - Clean & Hygienic
  - No Smoking, No Noise
  - Evening Dessert Spot

### 5. Gallery Section
- 8 image grid with smooth hover zoom effects
- Responsive: 2 cols (mobile) → 3 cols (tablet) → 4 cols (desktop)

### 6. Location & Timing
- "Coming soon near you"
- "Open from 5 PM onwards"
- Animated location icon

### 7. Contact & Social
- WhatsApp button (customizable link)
- Instagram button (customizable handle)
- Footer with copyright and branding

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
cd Paris-Bites
npm install
```

### Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`

### Build for Production
```bash
npm run build
# or
ng build
```
Build artifacts will be in the `dist/` directory.

## 🖼️ Adding Your Images

### Menu Images
1. Place your menu item images in `public/assets/menu/`
2. Use these exact filenames:
   - chocolate-bowl.jpg
   - eclair.jpg
   - strawberry-tart.jpg
   - chocolate-mousse.jpg
   - macarons.jpg
   - creme-brulee.jpg
   - truffle-cake.jpg
   - fruit-parfait.jpg
   - tiramisu.jpg
   - chocolate-fondue.jpg
   - profiteroles.jpg
   - berry-cheesecake.jpg

**Recommended specs**: 800x800px, JPG/PNG, < 500KB

### Gallery Images
1. Place your gallery images in `public/assets/gallery/`
2. Use these exact filenames:
   - gallery-1.jpg through gallery-8.jpg

**Recommended specs**: 1000x1000px, JPG/PNG, < 500KB

## 🔧 Customization

### Update Menu Items
Edit `src/app/data/menu.data.ts`:
```typescript
export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Your Dessert Name',
    image: 'assets/menu/your-image.jpg',
    shortDescription: 'Your description here'
  },
  // Add more items...
];
```

### Update Contact Links
Edit `src/app/components/footer/footer.component.ts`:
```typescript
openWhatsApp(): void {
  window.open('https://wa.me/YOUR_NUMBER', '_blank');
}

openInstagram(): void {
  window.open('https://instagram.com/YOUR_HANDLE', '_blank');
}
```

### Change Theme Colors
Edit `src/styles.scss`:
```scss
:root {
  --color-primary: #f8b4c3;    /* Soft pink */
  --color-secondary: #d4a574;  /* Beige/gold */
  --color-accent: #c9a961;     /* Gold accent */
  --color-cream: #faf8f5;      /* Cream/white */
  // Customize as needed
}
```

## ✨ Features Implemented

- ✅ Angular standalone components
- ✅ Single-page layout with smooth scroll navigation
- ✅ Fully responsive (mobile-first)
- ✅ Paris café aesthetic with custom color scheme
- ✅ SCSS styling (no UI frameworks)
- ✅ Menu system with structured data
- ✅ Scroll-triggered fade-in animations
- ✅ Hover effects on cards and images
- ✅ Sticky header navigation
- ✅ Social media integration
- ✅ Easy-to-update menu data structure
- ✅ Placeholder images included

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1023px (2 columns)
- **Desktop**: 1024px - 1279px (3 columns)
- **Large Desktop**: ≥ 1280px (4 columns)

## 🎯 Performance

- Lazy loading images
- Optimized animations
- Minimal bundle size
- Fast initial load

## 📝 Notes

- All text content is production-ready (no lorem ipsum)
- Menu data is easily updatable via TypeScript constants
- Images are structured for easy replacement
- Smooth scroll behavior for navigation
- Intersection Observer API for scroll animations

## 🤝 Support

For questions or issues, please refer to the Angular documentation:
- [Angular Documentation](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)

---

**Built with ❤️ and chocolate**

