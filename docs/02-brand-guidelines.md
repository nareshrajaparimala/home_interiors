# Brand & Design Guidelines
## Jai Jagdamba Home Interiors — Bangalore

**Business Details (from owner card):**
- **Company:** Jai Jagdamba Home Interiors
- **Owner:** Pradeep Kumar Yadav
- **Address:** No.26/1, 7th A Cross, Singasandra, Hosur Main Road, Bangalore-560068
- **Mobile:** 9538887631 / 7570807784
- **Email:** pradeepyadav7981@gmail.com
- **Services:** Carpenter Work · Electric Work · Painting Work · Fall Ceiling Work · Tiles Work · Plumber Work

> **Status:** Awaiting reference design images. The values below are research-backed recommendations — final palette, typography, and logo to be confirmed once reference design images are shared.

---

## 1. Brand Positioning

### Who We Are
A Bangalore-based home improvement company offering **carpentry, electrical, painting, false ceilings, tiling, and plumbing** — all six trades under one team, one contract, one point of contact. Based at Singasandra on Hosur Main Road — strategically serving South, South-East, and Central Bangalore.

### Service Area (Primary)
Singasandra · Electronic City · HSR Layout · Bommanahalli · BTM Layout · JP Nagar · Bannerghatta Road · Koramangala · Jayanagar · Sarjapur Road

### Target Audience
- New homeowners in Bangalore (1–3 BHK apartments)
- Homeowners renovating existing flats or villas
- Ages 25–50, middle to upper-middle income
- Spending ₹2–20 Lakhs on home improvement
- Value: reliable single vendor, clean work, on-time completion, honest pricing

### Brand Personality
| Trait | Expression |
|---|---|
| **Trustworthy** | Transparent pricing, penalty clauses, documented process |
| **Craft-forward** | Wood grain textures, artisan details in visuals |
| **Modern** | Clean lines, minimal clutter, confident whitespace |
| **Warm** | Earthy neutrals, amber wood tones — not cold corporate |
| **Precise** | Sharp typography, exact measurements in copy, "0 surprises" |

### Tone of Voice
- **Direct and confident** — not salesy or pushy
- **Specific over vague** — "delivered in 45 days" not "quick turnaround"
- **Reassuring** — address the fears (delays, hidden costs, subcontractors)
- **Conversational** — write like an expert friend, not a brochure

---

## 2. Color Palette

### Primary Palette
```
Warm Charcoal (Primary)    #1C1A18    — Headlines, nav, footers
Timber Gold (Accent)       #C49A3C    — CTAs, highlights, hover states, borders
Cream White (Background)   #FAF8F4    — Page backgrounds
Pure White                 #FFFFFF    — Cards, modals, form surfaces
```

### Secondary Palette
```
Stone Grey                 #6B6560    — Body text, secondary labels
Warm Beige                 #EDE9E1    — Section dividers, subtle backgrounds
Deep Forest Green          #2D4A3E    — Trust badges, success states, "Bangalore" accent
Terracotta (Warm Orange)   #C4652A    — Urgency accents, warnings, limited use only
```

### Extended Neutrals
```
Grey 50    #F9F7F4
Grey 100   #F2EFE9
Grey 200   #E5E1D9
Grey 300   #CCC7BC
Grey 400   #A09890
Grey 500   #807870
Grey 600   #6B6560
Grey 700   #524E49
Grey 800   #3A3733
Grey 900   #272420
```

### Usage Rules
- **Timber Gold (#C49A3C)** — CTAs only, max 2 per viewport, never on a dark background
- **Warm Charcoal (#1C1A18)** — all `<h1>` through `<h4>`, navbar, footer background
- **Cream White (#FAF8F4)** — default page background (not pure white — too clinical for a warm brand)
- **Deep Forest Green (#2D4A3E)** — used for "Bangalore exclusive" tags, warranty badges, completion checkmarks
- Avoid using more than 3 palette colors per section

---

## 3. Typography

### Font Stack

#### Display / Hero Headlines
**Cormorant Garamond** — Serif, weight 600/700
- Used for: Hero H1, section headline statements ("Built for Bangalore Homes")
- Feeling: Refined, architectural, luxury-adjacent without being cold
- Google Fonts: `Cormorant Garamond:wght@600;700`

#### Body / UI Headlines
**Plus Jakarta Sans** — Sans-serif, weight 400/500/600
- Used for: All body text, H2/H3/H4, nav links, buttons, form labels, data
- Feeling: Modern, readable, warm undertone, works at all sizes
- Google Fonts: `Plus+Jakarta+Sans:wght@400;500;600`

#### Mono / Specs / Numbers
**JetBrains Mono** — Monospace, weight 400/500
- Used for: Pricing figures, measurements ("₹1,499/sq ft"), project stats
- Feeling: Precise, technical — reinforces accuracy and craftsmanship
- Google Fonts: `JetBrains+Mono:wght@400;500`

### Type Scale (Tailwind)
```css
/* In tailwind.config.ts extend */
fontSize: {
  'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
  'display-lg': ['56px', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
  'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
  'heading-xl': ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
  'heading-lg': ['24px', { lineHeight: '1.35', letterSpacing: '0em'     }],
  'heading-md': ['20px', { lineHeight: '1.4',  letterSpacing: '0em'     }],
  'body-lg':    ['18px', { lineHeight: '1.65', letterSpacing: '0em'     }],
  'body-md':    ['16px', { lineHeight: '1.6',  letterSpacing: '0em'     }],
  'body-sm':    ['14px', { lineHeight: '1.55', letterSpacing: '0.01em'  }],
  'label':      ['12px', { lineHeight: '1.4',  letterSpacing: '0.08em'  }],  /* uppercase labels */
  'mono-lg':    ['20px', { lineHeight: '1.3',  letterSpacing: '-0.01em' }],
  'mono-md':    ['16px', { lineHeight: '1.4',  letterSpacing: '0em'     }],
}
```

### Typography Rules
- Hero H1 → Cormorant Garamond, display-xl, Warm Charcoal
- Section titles → Plus Jakarta Sans, heading-xl, Warm Charcoal
- Body copy → Plus Jakarta Sans, body-md, Stone Grey (#6B6560)
- Pricing / numbers → JetBrains Mono, Timber Gold
- Uppercase labels ("OUR SERVICES", "BANGALORE EXCLUSIVE") → Plus Jakarta Sans, label size, 0.08em tracking, Stone Grey
- Maximum 2 font families per screen (no mixing Cormorant + Mono in same section)
- No font sizes below 14px in live UI

---

## 4. Spacing & Layout

### Grid System
- **Max content width:** 1280px
- **Column grid:** 12 columns
- **Gutter:** 24px (desktop), 16px (mobile)
- **Page horizontal padding:** 80px (desktop), 24px (mobile)

### Spacing Tokens (Tailwind defaults, extended)
```
4px   → space-1
8px   → space-2
12px  → space-3
16px  → space-4
24px  → space-6
32px  → space-8
48px  → space-12
64px  → space-16
96px  → space-24
128px → space-32
```
- Section vertical padding: `py-24` (96px) desktop, `py-16` (64px) mobile
- Between heading and body: `mt-6` (24px)
- Between body and CTA: `mt-10` (40px)

### Border Radius
```
Buttons:       8px   (rounded-lg)
Cards:         16px  (rounded-2xl)
Image frames:  12px  (rounded-xl)
Badges/tags:   9999px (rounded-full)
Modals:        20px  (rounded-[20px])
```

---

## 5. Component Visual Language

### Buttons

**Primary CTA** (Timber Gold)
```
Background: #C49A3C
Text: #1C1A18 (dark, for contrast)
Padding: 14px 28px
Font: Plus Jakarta Sans 600, 16px
Border-radius: 8px
Hover: scale(1.02) + brightness(1.05)
```

**Secondary CTA** (Ghost / Outline)
```
Background: transparent
Border: 1.5px solid #1C1A18
Text: #1C1A18
Hover: Background #1C1A18, Text #FAF8F4
```

**WhatsApp CTA** (Fixed floating)
```
Background: #25D366
Icon: WhatsApp white SVG
Size: 56px circle
Position: fixed bottom-6 right-6
Shadow: 0 4px 16px rgba(37, 211, 102, 0.4)
```

### Cards
- Background: #FFFFFF
- Border: 1px solid #E5E1D9
- Shadow: `0 2px 8px rgba(28, 26, 24, 0.06)`
- Hover shadow: `0 8px 24px rgba(28, 26, 24, 0.12)`
- Hover: `translateY(-4px)` with `transition: all 0.3s ease`

### Image Treatment
- All project images: aspect-ratio 4:3 (portfolio grid) or 16:9 (hero/featured)
- Rounded corners: `rounded-xl` (12px)
- Hover: `scale(1.04)` with `overflow: hidden` on parent
- Overlay on hover: `bg-charcoal/60` with project name + arrow

### Dividers / Section Separators
- Use whitespace primarily — avoid horizontal rules
- When separation needed: 1px `#E5E1D9` line or a narrow `bg-beige` band

---

## 6. Iconography

- **Library:** Lucide React (primary) — consistent stroke-width: 1.5
- **Style:** Outline icons only — no filled icons (too heavy for the aesthetic)
- **Size:** 20px (inline), 24px (feature icons), 32px (section highlights)
- **Color:** Stone Grey for informational, Timber Gold for feature highlights

### Service Icon Set (from Lucide)
| Service | Icon |
|---|---|
| Interior Design | `Paintbrush` |
| Modular Woodwork | `Hammer` or `Layers` |
| Electrical Works | `Zap` |
| Full Home Package | `Home` |
| Kitchen | `ChefHat` |
| Bedroom | `Bed` |
| Warranty | `ShieldCheck` |
| Timeline | `Clock` |
| Location (Bangalore) | `MapPin` |
| WhatsApp | Custom SVG |

---

## 7. Photography & Visual Direction

### Style
- **Warm-toned** — golden hour light where possible, amber wood grain
- **Clean and spacious** — show rooms at their best, not cluttered
- **Detail shots** — close-up of woodgrain, joinery, light switches, plug points (electrical craft)
- **Before/after** — same angle, same lens — slider reveal format

### Must-Have Photo Types
1. Hero: Full-room interior with warm afternoon light (living room or kitchen)
2. Woodwork close-up: drawer joinery, kitchen shutter grain
3. Electrical detail: flush modular switches, pendant lighting
4. Process shots: craftsman working, site with team
5. Team photo: principal designer/architect with site team
6. Client handover moment: homeowner receiving keys or first walkthrough

### Image Don'ts
- No stock photos of generic Indian interiors (very recognizable, undermines authenticity)
- No fisheye/ultra-wide distortion (makes rooms look fake)
- No overly saturated images (maintain the warm-neutral palette)

---

## 8. Logo Guidelines

> **Note:** Awaiting reference design. The following are direction notes for logo design.

### Direction
- Wordmark preferred (name + optional icon mark)
- Icon idea: stylized `W` or geometric woodgrain cross-section / electrical arc
- Should work in: Warm Charcoal on Cream, Cream on Charcoal (reversed), single-color black, single-color white
- Minimum size: 120px wide (web), 20mm wide (print)
- Clear space: 1× logo height on all sides

### Logo Don'ts
- No drop shadows on logo
- No stretching
- No use of Timber Gold for wordmark text (CTAs only)
- No placement on busy photographic backgrounds without overlay

---

## 9. Motion & Animation Principles

### General Rules
- All animations: `ease-out` or `spring` curves — never `linear`
- Duration range: 200ms (micro) → 600ms (page sections) → 1000ms (hero reveal)
- No autoplay videos with sound
- Reduced motion: all animations respect `prefers-reduced-motion: reduce`

### Key Animation Patterns
| Element | Animation |
|---|---|
| Hero headline | Fade-up, stagger 80ms per word |
| Section entrance | `opacity: 0 → 1` + `translateY(24px → 0)` on scroll |
| Card hover | `translateY(-4px)` + shadow deepening |
| Before/After slider | Drag-based reveal with inertia (Framer Motion) |
| CTA button | `scale(1.02)` on hover, `scale(0.98)` on active |
| Number counters | Count-up animation (IntersectionObserver trigger) |
| Page transitions | Framer Motion layout transitions, fade in/out |

---

## 10. Voice & Messaging

### Headline Formula
> **[Specific benefit] + [for Bangalore homes] + [without the pain]**

**Examples:**
- "Your Entire Home Interior — Designed, Built & Wired. One Contract."
- "Beautiful Interiors. Flawless Electrical. No Surprises."
- "From Raw Flat to Finished Home in 45 Days."
- "Crafted for Bangalore. Backed by a 10-Year Warranty."

### Value Proposition Pillars (for copy across site)
1. **Single vendor** — design + woodwork + electrical, one contract
2. **Transparent pricing** — per-sq-ft tiers, no hidden costs
3. **Deadline accountability** — penalty-backed delivery promise
4. **Bangalore-exclusive** — local team, local material sourcing, local reputation
5. **10-year warranty** — materials + workmanship

### CTAs
| Context | CTA Text |
|---|---|
| Primary hero | "Get Your Free Estimate" |
| Services section | "Book a Free Consultation" |
| Portfolio | "See Full Project" |
| Pricing page | "Start Your Project" |
| Sticky footer bar | "WhatsApp Us Now" |
| Blog posts | "Talk to a Designer" |

---

*Awaiting: Reference design images, logo files, confirmed brand name. All above to be validated against reference materials.*
