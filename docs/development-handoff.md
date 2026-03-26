# Development Handoff — Matariki Massage & Wellness

Build a premium brochure site for a boutique massage studio in Mount Maunganui. The design should feel calm, restorative, and editorial. Avoid generic spa UI. Use soft asymmetry, large serif headings, muted earthy tones, and rounded image frames.

## Tech + Build Direction
- Build in Next.js with Tailwind
- Use responsive image components
- Keep animations subtle and performant
- Prioritise polished mobile layout for booking conversions

## Brand Tokens

### Colors
```js
colors: {
  brand: {
    night: '#1F2430',
    moss: '#667A6E',
    sand: '#D9C7B8',
    mist: '#EEE7E0',
    clay: '#B78475',
    gold: '#C8A96B',
  }
}
```

### Fonts
```js
fontFamily: {
  heading: ['Cormorant Garamond', 'serif'],
  body: ['Manrope', 'sans-serif'],
}
```

### Radius / Shadow
```js
borderRadius: {
  sm: '10px',
  md: '18px',
  lg: '28px',
  full: '999px',
}
boxShadow: {
  soft: '0 12px 32px rgba(31, 36, 48, 0.08)',
  media: '0 20px 50px rgba(31, 36, 48, 0.14)',
}
```

## Logo SVG
Copy-paste directly.

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

## Favicon SVG
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

## Site Map
- Home
- About
- Treatments
- Gift Vouchers
- Contact / Book

## Global Components

### 1. Header
**Props:** `links`, `ctaLabel`, `ctaHref`
- Transparent or mist background at top
- On scroll add backdrop blur, subtle border, and light shadow
- Desktop: inline nav
- Mobile: hamburger opens full-width panel with generous spacing

### 2. Footer
**Props:** `logo`, `navLinks`, `contactDetails`, `hours`
- Dark background
- Centered layout on mobile
- Include short line: “Tailored bodywork for rest, release, and renewal.”

### 3. HeroSplit
**Props:** `eyebrow`, `title`, `copy`, `primaryCta`, `secondaryCta`, `image`, `floatingCard`
- Left text, right tall image
- Add subtle star-map line pattern in background
- Floating card includes “60 / 90 / 120 min treatments” and “By appointment only”

### 4. BenefitCard
**Props:** `icon`, `title`, `copy`
- Use 3 cards in first home section
- Rounded corners, mist/sand backgrounds, minimal iconography

### 5. TreatmentPreviewRow / TreatmentCard
**Props:** `title`, `duration`, `price`, `copy`, `image`, `href`
- Editorial alternating layout on desktop
- Card stack on mobile
- Hover: image scale, title color shift to moss

### 6. SectionIntro
**Props:** `eyebrow`, `title`, `copy`, `align`
- Reusable intro block

### 7. TestimonialCard
**Props:** `quote`, `name`, `context`
- Soft card with serif quote marks
- Horizontal snap scroll on mobile

### 8. FAQAccordion
**Props:** `items`
- Smooth height animation
- Plus icon rotates to minus when open

### 9. SplitCTA
**Props:** `title`, `copy`, `primaryCta`, `secondaryCta`, `image`
- Used for gift vouchers and final booking push

### 10. ContactPanel
**Props:** `address`, `hours`, `phone`, `email`, `notes`
- Pair with enquiry form or map block

## Page-by-Page Build

## Home

### Section 1: Hero
- Eyebrow: `Mount Maunganui massage studio`
- Heading: `Restorative bodywork, tailored to how you need to feel.`
- Copy: `Therapeutic massage and ritual-led treatments designed to release tension, calm the nervous system, and create space to recover.`
- Primary CTA: `Book a Session`
- Secondary CTA: `Explore Treatments`
- Trust line: `Private studio · By appointment · Gift vouchers available`
- Image URL: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&h=1200&fit=crop`
- Floating card text: `60 / 90 / 120 min treatments`

### Section 2: Benefits Strip
3 cards:
1. `Tailored Care` — each session adapted to tension, energy, and goals
2. `Calm Private Space` — quiet studio experience with one-on-one attention
3. `Therapeutic Results` — relief, mobility, recovery, and deeper rest

### Section 3: Signature Treatments Preview
Use alternating editorial rows.
1. `Deep Tissue Release` — `60 min from $125`  
   Image: `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop`
2. `Hot Stone Ritual` — `90 min from $185`  
   Image: `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop`
3. `Pregnancy Massage` — `60 min from $135`  
   Image: `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=1000&fit=crop`

### Section 4: About Preview
- Two-column block with short story about restorative care, local studio, and personalised sessions
- Image URL: `https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=800&fit=crop`

### Section 5: Gift Voucher CTA
- Warm sand/clay background block
- Heading: `Give someone space to exhale.`
- Copy: promote digital or printed vouchers for birthdays, thank-yous, and care packages
- Image URL: `https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1100&h=700&fit=crop`

### Section 6: Testimonials
3 cards. Sample tone:
- “The space is beautiful, but it’s the care in the treatment itself that keeps me coming back.”
- “I arrived carrying tension in my shoulders and left feeling lighter in every sense.”
- “Professional, calming, and consistently excellent.”
- Support image or ambient background: `https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop`

### Section 7: Final CTA
- Dark background
- Heading: `Ready to return to yourself?`
- Buttons: `Book a Session`, `Ask a Question`

## About Page

### Section 1: Intro Hero
- Heading: `A quieter kind of care.`
- Copy about thoughtful bodywork rooted in listening, rhythm, and recovery
- Image URL: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&h=1100&fit=crop`

### Section 2: Brand Story
Write founder-style copy about creating a studio that feels personal, grounded, and unhurried.

### Section 3: Philosophy / Approach
Use 3 pillars:
- `Listen First`
- `Treat the Whole Body`
- `Leave You Lighter`
- Support image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop`

### Section 4: Why Clients Return
Short editorial block with bullets:
- tailored pressure and pace
- consistent therapist relationship
- premium calm environment
- practical aftercare guidance

### Section 5: Gallery Strip
- `https://images.unsplash.com/photo-1494526585095-c41746248156?w=700&h=700&fit=crop`
- `https://images.unsplash.com/photo-1511920170033-f8396924c348?w=700&h=700&fit=crop`
- reuse one interior image from home if needed for third slot

### Section 6: CTA
- Invite users to book their first appointment

## Treatments Page

### Section 1: Intro
- Heading: `Treatments that meet you where you are.`
- Intro image: `https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=1200&h=700&fit=crop`

### Section 2: Treatment Cards
Build cards with duration, short description, and starting price.
- `Therapeutic Massage` — 60 min `$125`, 90 min `$170`
- `Deep Tissue Release` — 60 min `$130`, 90 min `$178`
- `Hot Stone Ritual` — 90 min `$185`
- `Pregnancy Massage` — 60 min `$135`, 90 min `$182`
- `Recovery Session` — 45 min `$98`

Use images:
- `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=700&h=900&fit=crop`
- `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&h=900&fit=crop`
- `https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&h=900&fit=crop`

### Section 3: Add-ons / Rituals
Small cards:
- Aromatherapy blend +$15
- Hot towel grounding ritual +$20
- Scalp massage add-on +$18

### Section 4: FAQ
Questions:
- What should I wear?
- Is massage suitable during pregnancy?
- How do I choose the right session length?
- Do you offer gift vouchers?

### Section 5: CTA
- Button: `Book Your Treatment`

## Gift Vouchers Page

### Section 1: Hero
- Heading: `A thoughtful gift that feels genuinely useful.`
- Copy around rest, recovery, and care
- Hero image: `https://images.unsplash.com/photo-1516589091380-5d601971c3f1?w=1100&h=700&fit=crop`

### Section 2: Voucher Options
Cards:
- `$125` 60-minute treatment voucher
- `$185` hot stone ritual voucher
- `Custom amount` voucher

### Section 3: How It Works
3-step row:
1. Choose amount
2. Receive digital or studio-ready voucher
3. Recipient books their preferred time
- Support image: `https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&h=700&fit=crop`

### Section 4: FAQ
- expiry period
- digital vs printed
- personalised notes

### Section 5: CTA
- `Purchase a Voucher`

## Contact / Book Page

### Section 1: Intro
- Heading: `Book your session or get in touch.`
- Copy should reassure users that help is available if unsure what to choose.

### Section 2: Contact Details + Form
Details:
- Location: Mount Maunganui, New Zealand
- Hours: Tue–Sat, 9am–6pm
- Email: hello@matarikiwellness.co.nz
- Phone: +64 21 555 0182
- Booking note: by appointment only

### Section 3: Studio Panel
- Image URL: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&h=800&fit=crop`
- Add short arrival and parking notes

### Section 4: Preparation Notes
Use bullets:
- arrive 5 minutes early
- hydrate well after treatment
- note pregnancy/injuries in form
- gift vouchers welcome

### Section 5: Secondary Image Support
- `https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop`

## Responsive Notes
- Keep hero copy max-width tight on desktop and full width on mobile
- Stack all split sections under 960px
- Maintain generous vertical spacing on mobile; do not cram text
- Convert testimonial row and gallery strip into horizontal snap scrollers
- Make sticky booking CTA available in mobile menu or footer area

## Micro-interactions
- Buttons: small lift and shadow increase on hover
- Navigation links: gold underline sweep or opacity fade
- Images: slight zoom on hover for desktop only
- Accordion icon rotates 45 degrees to indicate open state
- CTA sections can use subtle fade/slide-in as they enter viewport

## Content Tone
- Calm. Assured. Softly premium.
- No loud wellness jargon.
- No salesy claims.
- Write like a trusted local studio with refined taste.
