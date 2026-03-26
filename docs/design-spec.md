# Matariki Massage & Wellness — Design Spec

## Brand Personality
Quiet luxury with coastal warmth. The brand should feel restorative, grounded, and intimate. It should borrow from the stillness of early evening, natural stone, candlelight, and soft linen rather than tropical spa clichés. The visual language should feel curated and breathable.

## Visual Identity

### Color Palette
Use a dark, moody wellness palette with soft mineral contrast.

- **Night Sky** — `#1F2430` — primary background, footer, dark sections
- **Sea Moss** — `#667A6E` — secondary brand tone, icons, buttons on light backgrounds
- **Warm Sand** — `#D9C7B8` — soft accent background, cards, subtle highlights
- **Stone Mist** — `#EEE7E0` — main light background
- **Clay Rose** — `#B78475` — accent for hover states, dividers, quiet warmth
- **Star Gold** — `#C8A96B` — premium accent for small details, marks, and logo highlight

### Typography
Use a refined serif/sans pairing with softness and authority.

- **Headings:** `Cormorant Garamond` — elegant, spacious, premium without feeling cold
- **Body/UI:** `Manrope` — clean, modern, readable, grounded on mobile

### Type Scale
- Hero display: 64/72 desktop, 42/48 tablet, 34/40 mobile
- H1: 52/60 desktop, 38/44 mobile
- H2: 40/46 desktop, 30/36 mobile
- H3: 28/34
- Body large: 20/32
- Body: 16/28
- Fine print: 14/22

### Spacing System
- `space-1: 4px`
- `space-2: 8px`
- `space-3: 12px`
- `space-4: 16px`
- `space-5: 24px`
- `space-6: 32px`
- `space-7: 48px`
- `space-8: 64px`
- `space-9: 96px`
- `space-10: 128px`

### Radius System
- Small UI elements: `10px`
- Cards: `18px`
- Large media frames: `28px`
- Pill buttons: `999px`

### Shadow System
- **Soft card:** `0 12px 32px rgba(31, 36, 48, 0.08)`
- **Elevated media:** `0 20px 50px rgba(31, 36, 48, 0.14)`
- **Inset glow:** `inset 0 1px 0 rgba(255,255,255,0.35)`

## Layout Direction

### Overall Feel
- Airy but intimate
- Editorial, not grid-heavy SaaS
- Soft asymmetry with overlapping photo blocks
- Moody dark sections balanced by warm pale backgrounds

### Navigation
- Slim top bar over light background
- Left-aligned wordmark with star icon
- Center or right-aligned nav links
- Rounded primary CTA button: **Book a Session**
- On scroll: subtle translucent stone background with blur

### Hero Style
- Split asymmetrical layout
- Left: large serif heading, short calming intro, CTA cluster, trust line
- Right: tall rounded portrait image with floating treatment card overlapping lower edge
- Background includes faint star-map line pattern inspired by Matariki cluster

### Section Layouts
- **Intro benefits:** 3-column soft cards with icons
- **Signature treatments:** alternating editorial rows with image + text
- **Studio experience:** full-width immersive dark band with quote and supporting stats
- **Gift vouchers:** offset card layout with warm accent background
- **Testimonials:** horizontal card carousel or stacked cards on mobile
- **Contact:** two-column split with booking details and image-backed map/visit panel

### Footer
- Dark, centered footer with logo, short brand line, nav links, hours, and Instagram/contact text

## Page Structure

### 1. Home
Sections:
1. Hero
2. Benefits strip
3. Signature treatments preview
4. About the studio preview
5. Gift vouchers callout
6. Testimonials
7. Final booking CTA

### 2. About
Sections:
1. Intro hero with founder portrait or studio detail
2. Brand story
3. Philosophy / approach
4. Why clients return
5. Studio gallery strip
6. CTA

### 3. Treatments
Sections:
1. Page intro
2. Treatment cards with duration/pricing
3. Add-ons / rituals
4. FAQ
5. Booking CTA

### 4. Gift Vouchers
Sections:
1. Gift-led hero
2. Voucher options
3. How it works
4. FAQ
5. CTA

### 5. Contact / Book
Sections:
1. Contact intro
2. Booking methods and hours
3. Studio location details
4. Preparation notes
5. Enquiry form

## Components
- Header
- Footer
- Section intro block
- Primary button / secondary text button
- Benefit card
- Treatment card
- Quote/testimonial card
- Pricing row
- FAQ accordion
- Gallery strip
- Split CTA block
- Contact detail list

## Logo Design

### Logo Concept
A minimal emblem plus wordmark. The emblem uses a seven-star cluster abstracted into a calm circular constellation, referencing Matariki without becoming ornate. The wordmark pairs refined serif typography with wide tracking for a premium wellness feel.

### Logo SVG
```svg
<svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(4 8)">
    <circle cx="12" cy="16" r="2.2" fill="#C8A96B"/>
    <circle cx="22" cy="9" r="1.8" fill="#C8A96B"/>
    <circle cx="27" cy="18" r="1.8" fill="#C8A96B"/>
    <circle cx="17" cy="24" r="1.7" fill="#C8A96B"/>
    <circle cx="7" cy="24" r="1.6" fill="#C8A96B"/>
    <circle cx="4" cy="13" r="1.4" fill="#C8A96B"/>
    <circle cx="18" cy="3" r="1.4" fill="#C8A96B"/>
    <path d="M12 16L22 9L27 18L17 24L7 24L4 13L18 3" stroke="#667A6E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
  </g>
  <text x="46" y="22" fill="#1F2430" font-family="Cormorant Garamond, serif" font-size="20" letter-spacing="0.08em">MATARIKI</text>
  <text x="46" y="38" fill="#667A6E" font-family="Manrope, sans-serif" font-size="9.5" letter-spacing="0.22em">MASSAGE &amp; WELLNESS</text>
</svg>
```

### Color Variants
- **Primary:** wordmark in Night Sky and Sea Moss, icon stars in Star Gold
- **Reversed:** wordmark in Stone Mist, stars in Warm Sand or Star Gold on dark background
- **Monochrome:** all one color in Night Sky or white

### Usage Notes
- Minimum width: `120px` for full logo
- Clear space: at least height of constellation emblem on all sides
- Use icon-only mark for social avatars and favicon contexts

## Favicon Design

### Favicon Concept
A simplified star-cluster mark: one central star with six smaller stars around it, contained in a subtle circular balance. It should read clearly at very small sizes.

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="32" cy="32" r="4" fill="#667A6E"/>
  <circle cx="46" cy="22" r="3" fill="#667A6E"/>
  <circle cx="50" cy="36" r="2.5" fill="#667A6E"/>
  <circle cx="38" cy="47" r="2.5" fill="#667A6E"/>
  <circle cx="22" cy="46" r="2.5" fill="#667A6E"/>
  <circle cx="16" cy="28" r="2.5" fill="#667A6E"/>
  <circle cx="28" cy="16" r="2.5" fill="#667A6E"/>
</svg>
```

### Favicon Colors
- Primary color: `#667A6E`
- Transparent background

## Image Plan
Use serene, cohesive Unsplash imagery with warm natural light, muted linens, hands-on treatment, and calm interiors. Keep a consistent soft neutral grade.

### Home
- Hero image: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&h=1200&fit=crop`
- Treatments preview: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop`
- Studio preview: `https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop`
- Testimonials / ambient support: `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop`

### About
- Intro portrait/detail: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=1100&fit=crop`
- Philosophy section: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop`
- Gallery image 1: `https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=700&fit=crop`
- Gallery image 2: `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=700&h=700&fit=crop`

### Treatments
- Page hero: `https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=700&fit=crop`
- Deep tissue card: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=900&fit=crop`
- Hot stone / ritual card: `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&h=900&fit=crop`
- Pregnancy massage card: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&h=900&fit=crop`

### Gift Vouchers
- Hero image: `https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1100&h=700&fit=crop`
- Supporting image: `https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=700&fit=crop`

### Contact / Book
- Studio image: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&h=800&fit=crop`
- Detail image: `https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop`

## Motion and Interaction
- Buttons lift by `-2px` on hover with softened shadow
- Treatment cards fade image scale from `1` to `1.04` on hover
- FAQ accordion uses smooth height transition and plus-to-minus icon rotation
- Header gains blur and subtle border on scroll
- Testimonial cards can snap-scroll horizontally on touch devices

## Responsive Behavior
- Collapse nav to hamburger below `960px`
- Hero shifts from 2 columns to stacked layout below `960px`
- Floating treatment card in hero becomes inline beneath image on mobile
- Treatment rows become single-column cards on tablet/mobile
- Gallery strip becomes horizontal scroll on mobile
- Footer stacks into centered grouped blocks on small screens

## Accessibility Notes
- Maintain AA contrast, especially on Night Sky sections
- Use generous tap targets for booking actions
- Keep body text at 16px minimum
- Ensure decorative star pattern remains low contrast and non-distracting

## Tailwind Token Mapping
- `brand.night = #1F2430`
- `brand.moss = #667A6E`
- `brand.sand = #D9C7B8`
- `brand.mist = #EEE7E0`
- `brand.clay = #B78475`
- `brand.gold = #C8A96B`
- `fontFamily.heading = ['Cormorant Garamond', 'serif']`
- `fontFamily.body = ['Manrope', 'sans-serif']`
