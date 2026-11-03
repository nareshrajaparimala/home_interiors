# Technical Architecture Document
## Jai Jagdamba Home Interiors — Bangalore
**Owner:** Pradeep Kumar Yadav | **Mob:** 9538887631 / 7570807784 | **Singasandra, Hosur Main Road, Bangalore-560068**

---

## 1. Tech Stack Overview

### Frontend
| Layer | Technology | Reason |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR/SSG for SEO, fast initial loads, file-based routing |
| UI Library | **React 19** | Composition, server components, concurrent rendering |
| Styling | **Tailwind CSS v4** | Utility-first, consistent design tokens, purge for minimal CSS |
| Animation | **Framer Motion** | Page transitions, scroll-triggered animations, before/after sliders |
| Icons | **Lucide React** | Lightweight, consistent icon set |
| Image Optimization | **Next.js Image** (`next/image`) | Automatic WebP conversion, lazy loading, blur placeholder |
| Forms | **React Hook Form + Zod** | Performant forms, schema validation, TypeScript-first |
| State Management | **Zustand** | Lightweight global state (lead form, inquiry flow) |
| Date/Time | **Day.js** | Lightweight date formatting for project timelines |

### Backend
| Layer | Technology | Reason |
|---|---|---|
| Runtime | **Node.js 22 LTS** | Stable, widely hosted, full ecosystem |
| Framework | **Express.js** | Lean REST API server — no overkill for a lead-gen + CMS site |
| Database | **PostgreSQL (Supabase)** | Managed Postgres, built-in Auth, Row-Level Security, realtime subscriptions |
| ORM | **Prisma** | Type-safe queries, schema-as-code, easy migrations |
| Email | **Resend** | Developer-friendly transactional email with React templates |
| SMS/WhatsApp | **Twilio or Gupshup API** | Lead notification to sales team via WhatsApp |
| File Storage | **Supabase Storage** | Project photos, before/after images stored in S3-compatible buckets |
| CMS (optional) | **Sanity.io** | Non-technical team can update portfolio, blog, testimonials |
| Auth | **Supabase Auth** | Admin dashboard login for lead management |

### Infrastructure & DevOps
| Layer | Technology | Reason |
|---|---|---|
| Hosting (Frontend) | **Vercel** | Zero-config Next.js deployment, edge CDN, preview deployments |
| Hosting (Backend) | **Railway or Render** | Simple Node/Express hosting, autoscale, free tier for start |
| DNS & CDN | **Cloudflare** | Free DDoS protection, CDN, DNS management |
| Analytics | **PostHog** (self-hosted or cloud) | Page views, funnel tracking, form conversion, heatmaps |
| SEO Analytics | **Google Search Console + GA4** | Organic search performance tracking |
| Error Monitoring | **Sentry** | Real-time error alerts for both frontend and backend |
| CI/CD | **GitHub Actions** | Auto lint + deploy on push to `main` |
| Environment | **dotenv + Vercel Env Vars** | Separate dev/staging/prod configs |

---

## 2. Project Structure

```
interior-website/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Route group — public pages
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx          # Services overview
│   │   │   ├── interior-design/page.tsx
│   │   │   ├── modular-woodwork/page.tsx
│   │   │   ├── electrical-works/page.tsx
│   │   │   └── full-home-packages/page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx          # Portfolio grid
│   │   │   └── [slug]/page.tsx   # Individual project case study
│   │   ├── process/page.tsx      # How We Work
│   │   ├── pricing/page.tsx      # Transparent pricing tiers
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   └── estimate/page.tsx     # Cost estimator tool
│   ├── (admin)/                  # Admin route group (auth-gated)
│   │   ├── dashboard/page.tsx    # Leads overview
│   │   ├── leads/page.tsx        # All inquiries
│   │   └── portfolio/page.tsx    # Upload/manage projects
│   ├── api/                      # Next.js API Routes (lightweight)
│   │   ├── contact/route.ts      # POST — save lead, send email
│   │   ├── estimate/route.ts     # POST — calculate project estimate
│   │   └── newsletter/route.ts
│   ├── layout.tsx                # Root layout — fonts, header, footer
│   ├── globals.css               # Tailwind base + custom CSS vars
│   └── sitemap.ts                # Auto-generated sitemap
│
├── components/
│   ├── ui/                       # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── PricingTiers.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── StatsBar.tsx
│   │   └── WhatsAppCTA.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── FloatingActions.tsx   # Sticky WhatsApp + Call button
│   └── forms/
│       ├── LeadForm.tsx
│       ├── EstimateCalculator.tsx
│       └── ConsultationBooking.tsx
│
├── lib/
│   ├── db.ts                     # Prisma client singleton
│   ├── supabase.ts               # Supabase client
│   ├── email.ts                  # Resend email helpers
│   ├── whatsapp.ts               # WhatsApp notification helper
│   └── utils.ts                  # cn(), formatCurrency(), etc.
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── images/
│   ├── og-image.png
│   └── favicon.ico
│
├── types/
│   └── index.ts                  # Shared TypeScript types
│
├── content/                      # Static MDX content (blog, guides)
│   └── blog/
│
├── .env.local
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Database Schema (Prisma)

```prisma
// prisma/schema.prisma

model Lead {
  id          String   @id @default(cuid())
  name        String
  phone       String
  email       String?
  service     String   // "interior-design" | "woodwork" | "electrical" | "full-home"
  projectType String?  // "apartment" | "villa" | "office" | "commercial"
  bhk         String?  // "1bhk" | "2bhk" | "3bhk" | "4bhk+" | "villa"
  budget      String?  // "under-5L" | "5-10L" | "10-20L" | "20L+"
  message     String?
  source      String?  // "homepage" | "services" | "portfolio" | "estimate-tool"
  utmSource   String?
  utmMedium   String?
  utmCampaign String?
  status      LeadStatus @default(NEW)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  category    String   // "residential" | "commercial" | "modular" | "electrical"
  bhk         String?
  location    String   // Neighbourhood in Bangalore
  budget      String?
  duration    String?  // "45 days"
  summary     String
  description String
  beforeImage String?  // Supabase Storage URL
  afterImages String[] // Array of Supabase Storage URLs
  featured    Boolean  @default(false)
  published   Boolean  @default(false)
  completedAt DateTime?
  createdAt   DateTime @default(now())
}

model Testimonial {
  id        String   @id @default(cuid())
  name      String
  location  String   // "Koramangala, Bangalore"
  rating    Int      // 1–5
  text      String
  service   String
  videoUrl  String?
  projectId String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
}

model BlogPost {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  excerpt     String
  content     String   // MDX or HTML
  coverImage  String
  tags        String[]
  published   Boolean  @default(false)
  publishedAt DateTime?
  createdAt   DateTime @default(now())
}

enum LeadStatus {
  NEW
  CONTACTED
  QUOTED
  WON
  LOST
}
```

---

## 4. Key API Endpoints

```
POST /api/contact         — Save lead to DB + notify team via email/WhatsApp
POST /api/estimate        — Return cost estimate range based on inputs
POST /api/newsletter      — Add email to newsletter list
GET  /api/projects        — Fetch published projects (paginated)
GET  /api/projects/[slug] — Single project data
POST /admin/api/leads     — Get leads (auth required)
```

---

## 5. SEO Strategy (Technical)

### Metadata (per-page)
```typescript
// app/services/interior-design/page.tsx
export const metadata: Metadata = {
  title: "Interior Design Services in Bangalore | [Brand Name]",
  description: "Complete home interior design in Bangalore — modular kitchens, wardrobes, living rooms. 10-year warranty. Free consultation.",
  openGraph: { ... },
  twitter: { ... },
  alternates: {
    canonical: "https://yoursite.com/services/interior-design"
  }
}
```

### JSON-LD Schema
- `LocalBusiness` schema with Bangalore address on every page
- `Service` schema on each service page
- `FAQPage` schema on FAQ sections
- `Review`/`AggregateRating` schema on testimonial sections
- `BreadcrumbList` schema on inner pages

### Sitemap
- Auto-generated via `app/sitemap.ts`
- Includes all service pages, portfolio slugs, blog slugs

### Performance Targets
| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.0s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| FID / INP | < 100ms |
| Lighthouse Score | > 90 (all categories) |
| Core Web Vitals | All green |

---

## 6. Lead Capture Flow (Technical)

```
User fills form →
  React Hook Form validates (Zod schema) →
    POST /api/contact →
      Prisma saves to PostgreSQL →
        Resend sends email to team (HTML template) →
          WhatsApp API sends alert to sales number →
            Resend sends auto-reply to customer →
              PostHog tracks `lead_submitted` event
```

---

## 7. Environment Variables

```env
# Database
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=hello@yourdomain.com
TEAM_EMAIL=sales@yourdomain.com

# WhatsApp
WHATSAPP_API_KEY=
WHATSAPP_TEAM_NUMBER=+919XXXXXXXXX

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_GA_ID=

# Sentry
SENTRY_DSN=

# Admin
ADMIN_SECRET=
```

---

## 8. Dependencies (package.json)

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "react-hook-form": "^7.54.0",
    "@hookform/resolvers": "^3.9.0",
    "zod": "^3.23.0",
    "zustand": "^5.0.0",
    "@supabase/supabase-js": "^2.46.0",
    "@prisma/client": "^5.22.0",
    "resend": "^4.0.0",
    "lucide-react": "^0.460.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "dayjs": "^1.11.0",
    "sharp": "^0.33.0",
    "@sentry/nextjs": "^8.0.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/typography": "^0.5.0",
    "prisma": "^5.22.0",
    "eslint": "^9.0.0",
    "prettier": "^3.4.0"
  }
}
```

---

## 9. Deployment Checklist

- [ ] Domain registered and pointed to Vercel
- [ ] Cloudflare DNS configured (proxy enabled)
- [ ] Vercel environment variables set
- [ ] Supabase project created, RLS policies set
- [ ] Prisma migrations run on production DB
- [ ] Google Search Console verified
- [ ] GA4 tag firing on all pages
- [ ] PostHog events verified in dashboard
- [ ] Sentry DSN connected and test error fired
- [ ] Robots.txt and sitemap.xml accessible
- [ ] OG images (1200×630) for all key pages
- [ ] WhatsApp Business number connected to API
- [ ] Resend domain verified for email sending
- [ ] SSL certificate active on all domains

---

*Last updated: November 2026 | Stack versions pinned above*
