export const SITE = {
  name: "Jai Jagdamba Home Interiors",
  shortName: "Jai Jagdamba",
  tagline: "Home Interiors",
  owner: "Pradeep Kumar Yadav",
  phone1: "9538887631",
  phone2: "7570807784",
  email: "pradeepyadav7981@gmail.com",
  whatsapp: "919538887631",
  address: "No.26/1, 7th A Cross, Singasandra, Hosur Main Road, Bangalore-560068",
  city: "Bangalore",
  pincode: "560068",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hi, I need a quote for home interior work in Bangalore."
)}`;

export const SERVICES = [
  {
    id: "carpenter",
    label: "Carpenter Work",
    slug: "carpenter-work",
    heading: "Custom Modular Furniture & Woodwork For Bangalore Homes",
    images: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Modular kitchen design with L-shaped layout in Bangalore home", caption: "A modular kitchen with soft-close drawers and granite countertop" },
      { src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80", alt: "Custom wardrobe with sliding doors in Bangalore bedroom", caption: "A full-height wardrobe with sliding doors and internal organizers" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", alt: "Custom TV unit with storage designed for Bangalore living room", caption: "A TV unit with back panelling and concealed storage shelves" },
    ],
    cta: "Talk To Our Carpenter Expert",
  },
  {
    id: "electrical",
    label: "Electric Work",
    slug: "electric-work",
    heading: "Complete Electrical Wiring & Fit-Out For Safe Bangalore Homes",
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Modern modular switch board installation in Bangalore home", caption: "Modular Legrand/Havells switches with neat concealed wiring" },
      { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80", alt: "Modern pendant lighting installed in Bangalore dining room", caption: "Designer pendant and cove lighting for living and dining areas" },
      { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80", alt: "Distribution board and safety wiring for Bangalore apartment", caption: "Full DB box installation with ELCB/MCB safety circuit protection" },
    ],
    cta: "Talk To Our Electrical Expert",
  },
  {
    id: "painting",
    label: "Painting Work",
    slug: "painting-work",
    heading: "Premium Wall Painting & Texture Finishes In Bangalore",
    images: [
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80", alt: "Interior wall painting with smooth satin finish in Bangalore home", caption: "Smooth satin finish wall painting for a modern living room" },
      { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80", alt: "Accent wall with texture paint design in Bangalore bedroom", caption: "Accent wall with designer texture and metallic finish" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Full home painting with Asian Paints in Bangalore apartment", caption: "Complete home painting with Asian Paints premium emulsion" },
    ],
    cta: "Get Painting Quote",
  },
  {
    id: "ceiling",
    label: "False Ceiling",
    slug: "false-ceiling",
    heading: "Designer False Ceilings With Cove Lighting For Bangalore Flats",
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Gypsum false ceiling with warm cove lighting in Bangalore living room", caption: "Gypsum false ceiling with warm LED cove lighting in living room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", alt: "POP ceiling with recessed spot lights in Bangalore bedroom", caption: "POP peripheral ceiling with recessed spot lights for bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", alt: "Layered false ceiling design in Bangalore hall", caption: "Multi-layered designer ceiling with indirect ambient lighting" },
    ],
    cta: "Talk To Our Ceiling Expert",
  },
  {
    id: "tiles",
    label: "Tiles Work",
    slug: "tiles-work",
    heading: "Expert Tile Fitting & Flooring Solutions For Bangalore Properties",
    images: [
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", alt: "Premium bathroom tiles fitting in Bangalore apartment", caption: "Premium vitrified floor tiles with precise 2mm joint finishing" },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", alt: "Bathroom wall and floor tiles installed in Bangalore home", caption: "Bathroom wall-to-wall ceramic tiles with anti-skid flooring" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: "Kitchen backsplash tile work in Bangalore modular kitchen", caption: "Designer kitchen backsplash tiles with dado height coverage" },
    ],
    cta: "Get Tiles Quote",
  },
  {
    id: "plumbing",
    label: "Plumber Work",
    slug: "plumber-work",
    heading: "Complete Plumbing & Sanitary Installation For Bangalore Homes",
    images: [
      { src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80", alt: "Modern bathroom plumbing fixtures installed in Bangalore", caption: "Complete bathroom plumbing with branded Jaquar/Hindware fittings" },
      { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80", alt: "Kitchen sink and plumbing setup in Bangalore modular kitchen", caption: "Kitchen sink installation with under-counter plumbing and RO point" },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80", alt: "Geyser and water heater installation in Bangalore bathroom", caption: "Geyser installation and hot/cold water line with concealed piping" },
    ],
    cta: "Talk To Our Plumbing Expert",
  },
] as const;

export const PORTFOLIO = [
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80", title: "Modern 3 BHK Home Interior", location: "HSR Layout, Bangalore", tag: "Full Home" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "2 BHK Painting & False Ceiling", location: "Koramangala, Bangalore", tag: "Painting + Ceiling" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80", title: "Modular Kitchen & Wardrobes", location: "Electronic City", tag: "Carpentry" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", title: "Villa Complete Renovation", location: "JP Nagar, Bangalore", tag: "All 6 Trades" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", title: "Bathroom Tiling & Plumbing", location: "Singasandra, Bangalore", tag: "Tiles + Plumbing" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", title: "Full Electrical & Lighting", location: "Whitefield, Bangalore", tag: "Electrical" },
] as const;

export const REVIEWS = [
  { name: "Rajesh Kumar", initial: "R", location: "2 BHK, HSR Layout", text: "Pradeep and his team did an excellent job with our modular kitchen and wardrobes. The quality of carpentry is top-notch and they finished on time. Highly recommended!" },
  { name: "Sneha Patel", initial: "S", location: "3 BHK, Koramangala", text: "Complete electrical rewiring and painting for our 3 BHK flat. Very professional work. The team was clean, punctual and the pricing was transparent from day one." },
  { name: "Amit Singh", initial: "A", location: "2 BHK, Electronic City", text: "Got tiles work and false ceiling done for our entire flat. The finish quality is amazing. Pradeep personally supervises every project which makes a big difference." },
  { name: "Priya Reddy", initial: "P", location: "3 BHK Villa, JP Nagar", text: "Best interior team in Bangalore for the price. They handled carpentry, plumbing and painting all at once. One point of contact made it so easy. Would hire again!" },
] as const;

export const TESTIMONIALS = [
  { text: "Working with Jai Jagdamba was a great experience. They handled our entire 3 BHK — from carpentry to painting to electrical. The quality is as good as any premium interior firm but at a fraction of the cost.", author: "Kriti & Manas", location: "3 BHK, Prestige Lakeside Habitat, Singasandra" },
  { text: "Pradeep and team did our false ceiling, complete wiring, and bathroom tiling. Finished in exactly 25 days as promised. Very clean work and professional team. Will definitely recommend.", author: "Venkatesh R.", location: "2 BHK, Salarpuria Sattva, Electronic City" },
  { text: "The best part about hiring them is one phone call handles everything. No running between electrician, painter, carpenter separately. Pradeep manages it all and the results are outstanding.", author: "Deepa Sharma", location: "Villa, Bannerghatta Road" },
] as const;

export const LOCATIONS = [
  "Singasandra", "Electronic City", "HSR Layout", "Koramangala", "BTM Layout",
  "JP Nagar", "Bannerghatta Road", "Jayanagar", "Sarjapur Road", "Whitefield",
  "Bommanahalli", "Begur", "Kudlu Gate", "Marathahalli", "Hebbal",
  "Indiranagar", "Yelahanka", "Kanakapura Road",
] as const;

export const FAQS = [
  { q: "Do you handle all 6 services or do you subcontract?", a: "All work is done by our own in-house team. We have dedicated carpenters, electricians, painters, ceiling specialists, tile fitters, and plumbers — all employed directly. Zero subcontracting means better quality, accountability, and coordination." },
  { q: "What is your pricing model? Are there hidden charges?", a: "We provide a detailed written quotation before any work begins, listing every item, material, and cost. The price you approve is the price you pay — no hidden charges, no surprise additions. Payment is milestone-based: 10% booking, 40% material, 40% execution, 10% handover." },
  { q: "Do you serve all areas of Bangalore?", a: "Yes, we serve all major Bangalore localities. Our office is in Singasandra (Hosur Main Road) so we are especially quick to serve South and South-East Bangalore — Electronic City, HSR Layout, Koramangala, JP Nagar, BTM, Sarjapur Road. We also cover Whitefield, Marathahalli, Indiranagar, Hebbal and more." },
  { q: "How long does a complete 2 BHK or 3 BHK interior take?", a: "A typical 2 BHK takes 25-35 days and a 3 BHK takes 35-50 days depending on the scope of work. We provide a committed timeline before starting and keep you updated with regular progress photos via WhatsApp." },
  { q: "Can I hire you for just one service — like only painting or only electrical?", a: "Absolutely! While many clients choose us for full home interiors, you can hire us for any individual service — just painting, just electrical rewiring, just tile work, or any combination. We'll give you a separate quote for the specific work you need." },
  { q: "What brands of materials do you use?", a: "We use only branded, ISI-certified materials. For paints: Asian Paints, Berger, Nerolac. For electrical: Havells, Legrand, Schneider. For tiles: Kajaria, Somany, RAK. For plumbing: Jaquar, Hindware. For carpentry hardware: Hettich, Ebco. You choose the brand and finish — we procure and install." },
] as const;

export const SERVICE_OPTIONS = [
  "Full Home Interior",
  "Carpenter Work",
  "Electric Work",
  "Painting Work",
  "False Ceiling",
  "Tiles Work",
  "Plumber Work",
] as const;

export const COMPARE_ROWS = [
  { feature: "All 6 trades under one roof", us: "Carpentry, Electrical, Painting, Ceiling, Tiles, Plumbing — one team", them: "You coordinate 4-5 separate vendors yourself" },
  { feature: "Single point of contact", us: "Owner Pradeep personally oversees every project", them: "No accountability — each vendor blames the other" },
  { feature: "Transparent pricing", us: "Itemized written quote before work starts", them: "Verbal estimates with surprise additions later" },
  { feature: "Warranty", us: "5-year written warranty on all work", them: "No warranty — \"call me if there's a problem\"" },
  { feature: "Material quality", us: "Branded materials (Asian Paints, Kajaria, Havells, Jaquar)", them: "Unknown brand substitutes to cut costs" },
  { feature: "Timeline", us: "Committed timeline with progress updates", them: "Open-ended — \"2 more days\" every week" },
  { feature: "Clean handover", us: "Full cleanup and walkthrough before handover", them: "Debris and incomplete finishing left behind" },
] as const;
