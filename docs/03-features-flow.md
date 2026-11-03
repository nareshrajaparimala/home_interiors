# Features List & Full User Flow Document
## Interior Woodwork, Design & Electrical Works — Bangalore

---

## 1. Site Pages Master List

| # | Page | URL | Priority |
|---|---|---|---|
| 1 | Homepage | `/` | P0 |
| 2 | Services Overview | `/services` | P0 |
| 3 | Interior Design | `/services/interior-design` | P0 |
| 4 | Modular Woodwork | `/services/modular-woodwork` | P0 |
| 5 | Electrical Works | `/services/electrical-works` | P0 |
| 6 | Full Home Packages | `/services/full-home-packages` | P0 |
| 7 | Portfolio / Projects | `/portfolio` | P0 |
| 8 | Project Case Study | `/portfolio/[slug]` | P0 |
| 9 | Pricing | `/pricing` | P0 |
| 10 | How We Work (Process) | `/process` | P1 |
| 11 | About Us | `/about` | P1 |
| 12 | Contact | `/contact` | P0 |
| 13 | Free Estimate Tool | `/estimate` | P1 |
| 14 | Blog | `/blog` | P2 |
| 15 | Blog Post | `/blog/[slug]` | P2 |
| 16 | Thank You (post-form) | `/thank-you` | P1 |
| 17 | Admin Dashboard | `/admin/dashboard` | P1 |
| 18 | 404 Page | `/404` | P1 |

---

## 2. Feature Inventory

### Global / Site-Wide Features
| Feature | Description | Priority |
|---|---|---|
| Sticky navigation | Transparent on hero, solid on scroll with subtle shadow | P0 |
| WhatsApp float button | Fixed bottom-right, opens WhatsApp chat | P0 |
| Click-to-call button | Fixed bottom-left on mobile only | P0 |
| Floating enquiry bar | Bottom bar on mobile: "Call | WhatsApp | Get Estimate" | P0 |
| Lead capture popup | Exits-intent or 30s timer: "Book a free consultation" | P1 |
| City badge | "Serving Bangalore Since [Year]" tag in header | P0 |
| SEO metadata | Title, description, OG image per page | P0 |
| JSON-LD schema | LocalBusiness, Service, FAQ, BreadcrumbList | P0 |
| Google Analytics 4 | Page views, events, conversion tracking | P0 |
| PostHog analytics | Funnel analysis, heatmaps, session recordings | P1 |
| Sitemap.xml | Auto-generated, submitted to GSC | P0 |
| Robots.txt | Block admin routes | P0 |
| 404 custom page | With navigation back to key pages | P1 |
| Cookie consent | GDPR-light banner (for GA/PostHog) | P2 |

---

### Page 1: Homepage (`/`)

**Goal:** Convert first-time visitors into leads. Establish trust in first 5 seconds.

#### Sections (in order):

**1.1 Hero Section**
- Full-width background: premium interior photo (or subtle video loop, muted)
- H1 headline: Cormorant Garamond, display-xl
- Sub-headline: 1–2 lines with the 3 core services
- "Bangalore Exclusive" badge (green)
- Two CTAs: "Get Free Estimate" (primary/gold) + "See Our Work" (ghost)
- Scroll-down indicator

**1.2 Trust / Stats Bar**
- 5 stats in a horizontal strip: `500+ Projects` | `10-Year Warranty` | `45-Day Delivery` | `Bangalore Only` | `No Hidden Costs`
- Counter animation on first view
- Subtle Cream-to-Beige background band

**1.3 Services Grid**
- 4 service cards in 2×2 grid (desktop), 1-col scroll (mobile)
- Each card: icon + title + 2-line description + "Explore →" link
  1. Interior Design
  2. Modular Woodwork
  3. Electrical Works
  4. Full Home Packages
- Hover: card lifts, icon turns gold

**1.4 Featured Portfolio Strip**
- Headline: "Recent Projects in Bangalore"
- 3 featured project cards (horizontal scroll on mobile)
- Each card: project photo (4:3), project name, location (HSR Layout, Koramangala, etc.), BHK type
- "View All Projects →" CTA below

**1.5 Why Choose Us (Differentiators)**
- 4–6 differentiator blocks in alternating layout (icon + title + description)
  1. One Contract — Design + Wood + Electrical
  2. Penalty-Backed Delivery Promise
  3. Transparent Per Sq Ft Pricing
  4. 10-Year Warranty, No Fine Print
  5. 100% Bangalore-Based Team
  6. Free 3D Design Before You Commit
- Section background: Warm Charcoal (#1C1A18), text in white/gold

**1.6 Before/After Showcase**
- 2–3 before/after image sliders (drag to reveal)
- Room-type labels below: "3 BHK Living Room — Koramangala"
- Subtle caption: "₹12L budget | 42 days"

**1.7 How It Works (Process Preview)**
- 5-step horizontal stepper (or vertical on mobile)
  1. Free Consultation (day 0)
  2. 3D Design & Quote (day 3–5)
  3. Contract & Material Approval (day 7–10)
  4. Build & Install (day 10–50)
  5. Handover & Warranty (day 50–55)
- "See Full Process →" link

**1.8 Testimonials Carousel**
- 3–5 client testimonials, auto-rotate (pause on hover)
- Each: Name, location (Bangalore neighbourhood), rating stars, quote, project type
- Video testimonial thumbnail if available

**1.9 Pricing Preview**
- Headline: "Simple, Transparent Pricing"
- 3 tier cards (Essential / Premium / Signature):
  - Price: ₹X,XXX /sq ft
  - 3 bullet inclusions
  - "Starting from ₹X Lakhs for a 2 BHK"
- "See Full Pricing →" and "Get Your Quote" CTAs

**1.10 Bangalore Focus Section**
- Map or illustrated Bangalore graphic
- "We serve all major Bangalore localities" + chip tags for areas
  (Koramangala, HSR Layout, Indiranagar, Whitefield, Sarjapur, JP Nagar, Bannerghatta Road, etc.)
- Headline: "Bangalore Is Our Only City. That Means Your Project Gets Our Full Attention."

**1.11 Contact / Lead Form Section**
- Short 4-field form: Name, Phone, Service, BHK / Space Type
- CTA: "Book My Free Consultation"
- Trust micro-copy below form: "No spam. Our team calls within 2 hours."
- Alternate: "Or WhatsApp us directly →" link

**1.12 Footer**
- Logo + tagline
- Navigation links (Services, Portfolio, Pricing, About, Blog, Contact)
- Address: Bangalore (with Google Maps link)
- Phone + WhatsApp + Email
- Social icons: Instagram, YouTube, Google Reviews
- Copyright + Privacy Policy + Terms

---

### Page 2: Services Overview (`/services`)

- Grid of 4 large service cards (full description)
- Each card links to the dedicated service page
- FAQ accordion at bottom (top 5 questions about services)

---

### Page 3: Interior Design (`/services/interior-design`)

**Sections:**
1. Hero with H1 optimized for: "Interior Design in Bangalore"
2. What's included: modular kitchen, living, bedroom, bathroom, ceiling, flooring
3. Room-type cards with links (Kitchen | Bedroom | Living Room | Kids Room | Bathroom)
4. Our design process (5 steps visual)
5. Portfolio gallery (filtered: design projects only)
6. Before/after slider (2 examples)
7. Pricing mention + CTA
8. FAQ: "How long does interior design take?" / "Do you do 3D design?" etc.
9. Testimonial (design-specific client)
10. Lead form

---

### Page 4: Modular Woodwork (`/services/modular-woodwork`)

**Sections:**
1. Hero: "Custom Modular Furniture in Bangalore"
2. Material quality call-out: "BWP Marine-Grade Plywood | Soft-Close Hardware | German CNC Cut"
3. Woodwork categories: Modular Kitchen | Wardrobes | TV Units | Pooja Units | Study Units | Vanity
4. Factory process (brief): Design → CNC Cut → Assemble → Install
5. Portfolio: woodwork projects
6. Warranty details (prominently)
7. FAQ: "What is BWP plywood?" / "Do you do custom sizes?"
8. Lead form

---

### Page 5: Electrical Works (`/services/electrical-works`)

> **Differentiator page** — no competitor markets this well for residential.

**Sections:**
1. Hero: "Electrical Fit-Out & Wiring in Bangalore" + sub: "Part of every full-home package"
2. Services list with icons:
   - Complete home wiring (point-by-point)
   - DB (Distribution Board) installation & upgrade
   - Modular switch installation (Legrand, Schneider, Havells)
   - Fan, light, AC point installation
   - Smart switches / home automation prep
   - ELCB / safety circuit installation
   - Kitchen appliance points (chimney, hob, OTG, microwave)
   - Bathroom geyser & exhaust points
3. Safety & compliance call-out: "All work per IS:732 wiring standards"
4. Smart home automation section: brief intro to smart switches, app control
5. Portfolio: electrical-specific project photos (beautiful panel, switch layout)
6. "Why hire us for electrical too?" — eliminates coordination problem
7. FAQ: "Can I hire just for electrical?" / "Is your work ISI compliant?"
8. Lead form

---

### Page 6: Full Home Packages (`/services/full-home-packages`)

**Sections:**
1. Hero: "Complete Home Interiors — One Contract, Zero Stress"
2. What's included visual checklist (all 3 services combined)
3. 3 pricing tiers with complete inclusions
4. Timeline: "From Empty Flat to Dream Home in 45–60 Days"
5. FAQs about packages
6. Calculator preview + link
7. Portfolio: full-home projects
8. Lead form

---

### Page 7: Portfolio (`/portfolio`)

**Features:**
- Masonry or grid layout (3-col desktop, 2-col tablet, 1-col mobile)
- **Filter tabs:** All | Residential | Commercial | Modular Kitchen | Woodwork | Electrical | Full Home
- **Sort:** Newest | Budget: High-Low | Budget: Low-High
- Each card: project photo, title, location, BHK/type, budget range
- Hover: overlay with "View Project →"
- Pagination (12 per page) or infinite scroll
- "Request Similar Project" CTA sticky on page

---

### Page 8: Project Case Study (`/portfolio/[slug]`)

**Sections:**
1. Hero: Large project featured image (full-width)
2. Project meta bar: Location | BHK | Budget | Duration | Services used
3. Project overview text (200–300 words)
4. Before/After slider (if available)
5. Image gallery (8–12 images with lightbox viewer)
6. Challenges & solutions (2–3 short paragraphs — storytelling)
7. Client testimonial (this project's client, if available)
8. Related projects (3 similar projects)
9. "Start a Similar Project" CTA + form

---

### Page 9: Pricing (`/pricing`)

> **Key differentiator page** — almost no Bangalore competitor shows real pricing.

**Sections:**
1. Headline: "Honest Pricing. No Hidden Costs."
2. Sub: "We're one of very few interior companies in Bangalore to publish our rates upfront."
3. **3 Tier Cards (side by side):**

| | Essential | Premium | Signature |
|---|---|---|---|
| Rate | ₹1,299/sq ft | ₹1,799/sq ft | ₹2,499+/sq ft |
| Kitchen | Acrylic shutters | PU/Lacquer shutters | Veneer/custom |
| Wardrobe | Laminate | PU finish | Bespoke veneer |
| Ceiling | POP/gypsum basic | Coffers + indirect | Custom cove + lighting |
| Flooring | Tiles | Wooden laminate | Engineered wood/marble |
| Electrical | Standard ISI wiring | Legrand modular switches | Schneider/Havells premium + smart |
| Warranty | 5 years | 10 years | 10 years + priority service |
| Delivery | 55 days | 50 days | 45 days |

4. "What's NOT included" section (clarity): civil demolition, window grills, plumbing (unless full-home package)
5. Payment milestone schedule: 10% booking / 40% fabrication start / 40% installation / 10% handover
6. "Use Our Calculator to estimate your full cost →"
7. FAQ: "Can I mix tiers?" / "Is GST included?"

---

### Page 10: How We Work / Process (`/process`)

**Sections:**
1. Hero: "A Clear Process, From Day One to Handover"
2. Detailed 7-step process with timeline:
   - **Step 1 (Day 0–1):** Free Site Visit & Consultation
   - **Step 2 (Day 1–5):** 3D Design Concepts (2 options)
   - **Step 3 (Day 5–7):** Itemized Quote (BOQ — Bill of Quantities)
   - **Step 4 (Day 7–10):** Material Selection & Contract Sign
   - **Step 5 (Day 10–20):** Factory Production (woodwork)
   - **Step 6 (Day 20–50):** On-site Installation & Electrical
   - **Step 7 (Day 50–55):** Quality Check, Snag Fix & Handover
3. "What if there's a delay?" — penalty clause call-out box
4. Client communication promise: "Weekly photos + WhatsApp group updates"
5. FAQ section (process-specific)

---

### Page 11: About Us (`/about`)

**Sections:**
1. Hero: Brand story headline
2. Origin story (200 words — who started it, why, what problem they solve)
3. Team section: principal designer + site lead + electrical head (names, photos, brief bios)
4. Company stats: Projects | Years | Warranty | Team size
5. "Bangalore Only" philosophy section
6. Certifications / empanelments (if any)
7. Awards or press mentions (if any)
8. CTA to contact

---

### Page 12: Contact (`/contact`)

**Sections:**
1. Headline + sub-text: "Let's talk about your home."
2. Two options presented clearly:
   - Book a free site visit (form)
   - WhatsApp us (large green button with number)
3. Contact form: Name, Phone, Email, Service type, BHK/area, Preferred date for site visit, Message
4. Response promise: "We respond within 2 business hours."
5. Office address with embedded Google Map (Bangalore)
6. Phone / Email / WhatsApp / Instagram listed
7. FAQ: "Is the consultation really free?" / "Do you travel to all parts of Bangalore?"

---

### Page 13: Free Estimate Calculator (`/estimate`)

**Features:**
- **Step 1:** Property type (Apartment | Villa | Office | Shop)
- **Step 2:** Size (dropdown or text: 1BHK | 2BHK | 3BHK | 4BHK+ | Custom sq ft)
- **Step 3:** Services needed (checkboxes: Interior Design | Woodwork | Electrical | All Three)
- **Step 4:** Tier preference (Essential / Premium / Signature)
- **Step 5:** Budget range (informational — for prioritization)
- **Result:** Estimated cost range (e.g., "Your project could cost between ₹12L – ₹18L")
- Below result: "This is an estimate. Book a free consultation for an exact itemized quote."
- CTA: "Book My Free Consultation" (form or WhatsApp)
- **No email required to see estimate** — reduce friction, build trust

---

### Page 14–15: Blog (`/blog`, `/blog/[slug]`)

**Blog Topics (first 10 posts to write):**
1. "How much does a 3 BHK interior cost in Bangalore in 2026?"
2. "Modular Kitchen vs. Carpenter-Made Kitchen — Which Is Right for You?"
3. "Top 10 Interior Design Mistakes Bangalore Homeowners Make"
4. "Complete Guide to Home Wiring in Bangalore (What to Demand from Your Electrician)"
5. "Before You Sign an Interior Contract in Bangalore — Read This"
6. "BWP vs BWR Plywood — What Your Interior Company Won't Tell You"
7. "Smart Home Electrical Basics for New Apartments in Bangalore"
8. "How to Choose the Right Interior Designer in Bangalore"
9. "Timeline for a Full 3 BHK Interior in Bangalore — Week by Week"
10. "Koramangala / HSR / Whitefield Homes We've Transformed (Gallery)"

---

## 3. Admin Dashboard Features

| Feature | Description |
|---|---|
| Lead inbox | Table view of all form submissions with status tags |
| Lead detail | View full lead info, add notes, change status (New/Contacted/Quoted/Won/Lost) |
| Lead export | CSV export for sales team |
| Portfolio CMS | Add/edit/delete project entries (title, images, metadata, published toggle) |
| Blog CMS | Create/edit blog posts with markdown editor |
| Analytics snapshot | Lead count, source breakdown, this week vs last week |
| Email notifications | Configure team notification email addresses |

---

## 4. Lead Capture Flow (User Journey)

```
Visitor lands on Homepage
       ↓
Scrolls to portfolio / reads services
       ↓
Triggers: CTA click / exit intent popup / 30s timer popup
       ↓
Lead Form appears (Name, Phone, Service, BHK)
       ↓
Form submits (POST /api/contact)
       ↓
┌──────────────────────────────────────────┐
│  Backend processes:                       │
│  1. Save to DB (PostgreSQL via Prisma)    │
│  2. Send team email (Resend)              │
│  3. Send WhatsApp alert to sales rep      │
│  4. Send auto-reply SMS/WhatsApp to user  │
└──────────────────────────────────────────┘
       ↓
User redirected to /thank-you page
       ↓
Thank-you page shows:
  - "We'll call you within 2 hours"
  - "Meanwhile, WhatsApp us if urgent"
  - Related portfolio projects (keep them engaged)
       ↓
Sales team calls within 2 hours
       ↓
Lead status updated in admin dashboard
```

---

## 5. Estimate Calculator Flow

```
User lands on /estimate
       ↓
Step 1: Select property type (4 options)
       ↓
Step 2: Select BHK/size
       ↓
Step 3: Check services needed
       ↓
Step 4: Select quality tier
       ↓
Calculate button → POST /api/estimate
       ↓
Result page shows:
  - Estimated range: "₹12L – ₹18L"
  - What's included at this tier
  - Disclaimer text
  - "Book Free Consultation" CTA (form)
  - "WhatsApp to discuss" CTA
       ↓
User submits consultation form → same lead flow as above
```

---

## 6. Portfolio Project Flow

```
/portfolio → Grid of project cards
       ↓
Filter by category / sort by budget
       ↓
Click project card
       ↓
/portfolio/[slug] opens
       ↓
Read overview → View before/after slider
       ↓
Browse photo gallery (lightbox)
       ↓
Read client testimonial
       ↓
"Start a Similar Project" CTA → Lead form
       ↓
Lead captured → same backend flow
```

---

## 7. Conversion Touchpoints Summary

| Touchpoint | Location | Action |
|---|---|---|
| Hero CTA | Homepage top | "Get Free Estimate" → /estimate or form |
| Stats bar | Homepage | Trust signal |
| Services CTA | Each service card | "Book Consultation" → form |
| Portfolio CTA | Portfolio pages | "Start Similar Project" → form |
| Pricing CTA | /pricing | "Start Your Project" → form |
| Process CTA | /process | "Book Free Site Visit" → form |
| Blog CTA | End of each post | "Talk to a Designer" → form |
| Exit intent popup | All pages | 30s timer → form |
| WhatsApp button | All pages | Direct WhatsApp open |
| Mobile sticky bar | Mobile only | Call | WhatsApp | Estimate |
| Footer | All pages | Contact + links |

---

## 8. Mobile-First Considerations

| Feature | Mobile Behaviour |
|---|---|
| Navigation | Hamburger → full-screen overlay menu |
| Portfolio grid | 1 column, full-width cards |
| Estimate calculator | Full-screen step wizard |
| Before/after slider | Tap-and-hold to drag |
| WhatsApp button | Enlarged tap target (min 56px) |
| Floating action bar | Fixed bottom: Call | WhatsApp | Estimate |
| Forms | Full-width fields, large tap targets, autofocus |
| Images | Lazy loaded, WebP via next/image |
| Hero video | Disabled on mobile (photo fallback for performance) |

---

## 9. Performance & Accessibility Checklist

- [ ] All images use `next/image` with `alt` text
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] All interactive elements keyboard-accessible
- [ ] Forms have accessible labels (not just placeholders)
- [ ] Focus states visible for all buttons/links
- [ ] Skip-to-main-content link (screen reader)
- [ ] All animations respect `prefers-reduced-motion`
- [ ] Hero video has `autoplay muted loop playsinline` (and is purely decorative)
- [ ] No horizontal overflow on any viewport
- [ ] Core Web Vitals pass before launch

---

*Last updated: November 2026 | Awaiting reference design assets*
