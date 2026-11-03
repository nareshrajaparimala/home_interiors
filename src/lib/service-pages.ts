export interface ServicePageData {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  scope: { title: string; items: string[] }[];
  brands: string[];
  gallery: { src: string; alt: string; caption: string }[];
  timeline: string;
  startingPrice: string;
  faqs: { q: string; a: string }[];
  iconPath: React.ReactNode;
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "woodwork-interior": {
    slug: "woodwork-interior",
    label: "Woodwork & Interior",
    title: "Woodwork & Interior Design In Bangalore",
    subtitle: "Custom modular furniture, kitchens, wardrobes, TV units, pooja rooms and study tables crafted by our in-house carpenters.",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    description: "Our woodwork division delivers precision-crafted modular furniture for every room in your Bangalore home. From modular kitchens with soft-close mechanisms to custom wardrobes with internal organizers, every piece is manufactured with BWP-grade plywood and premium hardware.",
    scope: [
      { title: "Kitchen", items: ["Modular kitchen shutters (acrylic, PU, laminate)", "Granite/quartz countertops", "Chimney and hob cutouts", "Soft-close drawer systems", "Magic corner and carousel units", "Overhead cabinets with lift-up shutters"] },
      { title: "Bedroom", items: ["Sliding and hinged wardrobes", "Bed with hydraulic storage", "Bedside tables and dressing units", "TV unit with wall panelling", "Study desk with overhead shelves"] },
      { title: "Living Room", items: ["TV unit with back panelling", "Crockery and display units", "Bookshelf and partition units", "Shoe rack and foyer console", "Bar unit with glass shelves"] },
      { title: "Special Units", items: ["Pooja room with carved doors", "Kids room bunk beds", "Walk-in wardrobe systems", "Window seating with storage", "Wall-mounted floating shelves"] },
    ],
    brands: ["Century Ply", "Greenply", "Hettich", "Hafele", "Blum", "Ebco", "Merino Laminates", "Greenlam"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "L-shaped modular kitchen design Bangalore", caption: "L-shaped modular kitchen with granite countertop and chimney" },
      { src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80", alt: "Custom wardrobe sliding doors Bangalore", caption: "Full-height sliding wardrobe with mirror finish" },
      { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", alt: "Living room TV unit Bangalore interior", caption: "Floating TV unit with integrated LED back-panel lighting" },
      { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", alt: "Modern bedroom interior design Bangalore", caption: "Bedroom with hydraulic bed, wardrobe, and study corner" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80", alt: "Complete living room interior Bangalore", caption: "Complete living room with TV unit, bookshelf, and bar counter" },
      { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80", alt: "U-shaped kitchen design Bangalore", caption: "U-shaped kitchen with breakfast counter and ample storage" },
    ],
    timeline: "15-30 days depending on scope",
    startingPrice: "Starting from 1.5 Lakhs",
    faqs: [
      { q: "What type of plywood do you use?", a: "We use BWP (Boiling Water Proof) grade plywood from Century or Greenply. For wet areas like kitchens and bathrooms, we use marine-grade BWP plywood for maximum durability." },
      { q: "Do you do only modular or carpenter-made furniture?", a: "We specialize in factory-precision modular furniture with CNC-cut panels. This ensures exact measurements, clean edges, and faster installation compared to on-site carpentry." },
      { q: "What hardware brands do you use?", a: "We use Hettich, Hafele, Blum, and Ebco hardware — all with soft-close mechanisms. You can choose the brand and finish during the design phase." },
      { q: "Can I see 3D designs before fabrication?", a: "Yes, we provide detailed 3D renderings of every room before starting fabrication. You approve the design and materials before we begin." },
    ],
    iconPath: null,
  },
  "electrical-work": {
    slug: "electrical-work",
    label: "Electrical Work",
    title: "Electrical Work & Wiring In Bangalore",
    subtitle: "Complete home electrical fit-out — wiring, switches, lighting, DB panels, and smart home preparation.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    description: "Our licensed electricians handle everything from fresh wiring for new apartments to complete rewiring of older homes. We use ISI-certified materials and follow IS:732 wiring standards for every Bangalore home we work on.",
    scope: [
      { title: "Complete Wiring", items: ["New apartment point-to-point wiring", "Rewiring for old buildings", "Concealed wiring with PVC conduits", "ISI-certified copper cables (Havells/Finolex)", "Earthing and grounding systems"] },
      { title: "Switches & Points", items: ["Modular switch installation (Legrand/Schneider/Havells)", "5-amp and 15-amp socket points", "USB charging socket points", "AC points with isolators", "Kitchen appliance points (chimney, hob, microwave, RO)"] },
      { title: "Lighting", items: ["LED ceiling lights and downlights", "Cove lighting for false ceilings", "Pendant and chandelier installation", "Outdoor and balcony lighting", "Under-cabinet kitchen lights"] },
      { title: "Panels & Safety", items: ["Distribution Board (DB) installation", "MCB and ELCB safety devices", "Voltage stabilizer setup", "Inverter and UPS wiring", "Smart switch preparation for home automation"] },
    ],
    brands: ["Havells", "Legrand", "Schneider Electric", "Finolex", "Polycab", "Anchor", "Syska LED"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", alt: "Modular electrical switches installation Bangalore", caption: "Premium Legrand modular switches with sleek white finish" },
      { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80", alt: "Pendant lighting in modern Bangalore home", caption: "Designer pendant lights over dining area" },
      { src: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80", alt: "Distribution board installation Bangalore", caption: "Organized DB panel with labeled MCB circuits" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Cove lighting in living room Bangalore", caption: "Warm LED cove lighting integrated with false ceiling" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", alt: "Bedroom lighting design Bangalore", caption: "Layered bedroom lighting with dimmable controls" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", alt: "Smart home switch panel Bangalore", caption: "Smart-ready switches with WiFi module provision" },
    ],
    timeline: "5-15 days depending on scope",
    startingPrice: "Starting from 30,000",
    faqs: [
      { q: "Is your electrical work ISI compliant?", a: "Yes. All materials used are ISI-certified. Our wiring follows IS:732 standards and all work is done by licensed electricians." },
      { q: "Can you do just electrical without other services?", a: "Absolutely. We handle standalone electrical projects — rewiring, switch upgrades, lighting installation, or DB panel work." },
      { q: "Do you install smart home switches?", a: "Yes, we prepare the wiring for smart switches and can install WiFi-enabled switches from brands like Legrand MyHome or Schneider Wiser." },
      { q: "How do you handle concealed wiring?", a: "We chase walls with precision, lay PVC conduits, pull ISI copper wires, and replaster cleanly. The finish is invisible once painting is done." },
    ],
    iconPath: null,
  },
  "painting-work": {
    slug: "painting-work",
    label: "Painting Work",
    title: "Painting Work In Bangalore",
    subtitle: "Interior and exterior painting, texture finishes, waterproofing, and wall treatments by professional painters.",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80",
    description: "Our painting team delivers flawless finishes for Bangalore homes — from fresh coats for new apartments to complete repainting of older properties. We use premium paints with proper preparation: putty, primer, and multiple finish coats.",
    scope: [
      { title: "Interior Painting", items: ["Premium emulsion painting (2-3 coats)", "Wall putty and primer application", "Matte, satin, and semi-gloss finishes", "Ceiling painting with anti-fungal treatment", "Door and window frame enamel painting"] },
      { title: "Texture & Design", items: ["Italian texture finishes", "Metallic wall textures", "Stone and marble effect textures", "Stucco and concrete finishes", "Accent wall feature designs"] },
      { title: "Exterior Painting", items: ["Exterior emulsion (weatherproof)", "Balcony and terrace painting", "Grille and railing enamel finish", "Anti-algae coating for Bangalore climate", "Compound wall painting"] },
      { title: "Special Treatments", items: ["Waterproofing for bathrooms", "Terrace waterproofing (Dr. Fixit)", "Dampness treatment for old walls", "Wood polish and PU coating", "Epoxy floor coating"] },
    ],
    brands: ["Asian Paints", "Berger", "Nerolac", "Dulux", "Indigo Paints", "Dr. Fixit", "Pidilite"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80", alt: "Interior wall painting Bangalore", caption: "Smooth satin finish in warm neutral tones" },
      { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80", alt: "Texture wall painting Bangalore", caption: "Italian metallic texture on bedroom accent wall" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Full home painting Bangalore", caption: "Complete 3 BHK interior painting with Asian Paints Royale" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80", alt: "Living room painting Bangalore", caption: "Dual-tone living room walls with feature panelling" },
      { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80", alt: "Bedroom painting and colour Bangalore", caption: "Pastel bedroom with matte emulsion finish" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: "Kitchen painting Bangalore home", caption: "Kitchen walls with washable satin finish for easy cleaning" },
    ],
    timeline: "3-10 days depending on area",
    startingPrice: "Starting from 25,000",
    faqs: [
      { q: "What paint brands do you use?", a: "We primarily use Asian Paints (Royale, Apcolite), Berger, and Nerolac. You choose the brand, shade, and finish — we apply with proper preparation." },
      { q: "How many coats do you apply?", a: "Standard process: 1 coat wall putty, 1 coat primer, 2 coats finish paint. For premium finishes, we add an extra coat for deeper coverage." },
      { q: "Do you include wall preparation?", a: "Yes. Every project includes crack filling, wall putty, sanding, and primer before the finish coats. Proper preparation is non-negotiable." },
      { q: "How long does paint last in Bangalore weather?", a: "With proper preparation and premium paint, interior painting lasts 5-7 years. Exterior with weatherproof paint lasts 3-5 years." },
    ],
    iconPath: null,
  },
  "false-ceiling": {
    slug: "false-ceiling",
    label: "False Ceiling",
    title: "False Ceiling Work In Bangalore",
    subtitle: "Designer gypsum and POP ceilings with integrated cove lighting, spot lights, and ambient effects.",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    description: "Transform your rooms with designer false ceilings that add depth, hide wiring, and create stunning lighting effects. We design and install gypsum board, POP, and grid ceilings with precision finishing.",
    scope: [
      { title: "Gypsum Board Ceiling", items: ["Plain flat gypsum ceilings", "Peripheral / L-box ceilings", "Multi-level layered designs", "Circular and curved profiles", "Seamless joint finishing"] },
      { title: "POP Ceiling", items: ["Plaster of Paris moulding designs", "Cornices and border details", "POP ceiling with cutout patterns", "Medallion and rose designs", "Custom artistic POP work"] },
      { title: "Lighting Integration", items: ["LED cove light channels", "Recessed spot light cutouts", "Panel light integration", "RGB colour-changing cove lights", "Chandelier mounting reinforcement"] },
      { title: "Specialized", items: ["Wooden panel ceiling accents", "Grid/Armstrong ceiling for offices", "Bathroom moisture-proof ceilings", "Sound-absorbing acoustic panels", "Exposed beam false ceiling frames"] },
    ],
    brands: ["Gyproc (Saint-Gobain)", "USG Boral", "Armstrong", "Fibre Cement Boards", "Philips LED", "Syska LED"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Gypsum false ceiling living room Bangalore", caption: "Multi-level gypsum ceiling with warm cove lighting" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", alt: "Bedroom false ceiling with spot lights Bangalore", caption: "Peripheral L-box ceiling with recessed spot lights" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", alt: "Designer layered ceiling Bangalore", caption: "Designer layered ceiling with indirect ambient lighting" },
      { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80", alt: "Modern ceiling design Bangalore flat", caption: "Modern minimal ceiling with concealed LED strip" },
      { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", alt: "Ceiling with pendant light Bangalore", caption: "False ceiling with central pendant chandelier cutout" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=600&q=80", alt: "Complete room ceiling design Bangalore", caption: "Full room ceiling with perimeter cove and centre panel" },
    ],
    timeline: "5-12 days depending on area",
    startingPrice: "Starting from 40,000",
    faqs: [
      { q: "Gypsum or POP — which is better?", a: "Gypsum board is factory-made, moisture-resistant, and faster to install. POP allows more artistic freedom for curves and custom mouldings. We recommend gypsum for modern homes and POP for ornate designs." },
      { q: "Does false ceiling reduce room height?", a: "Typically, a false ceiling drops 4-6 inches from the original ceiling. For rooms with 9+ feet height, this is negligible. We can also do partial ceilings (peripheral only) to minimize height loss." },
      { q: "Can you integrate existing lights into the false ceiling?", a: "Yes. We plan cutouts for spot lights, panel lights, cove LED strips, and even chandelier mounting points during the design phase." },
      { q: "Is false ceiling suitable for bathrooms?", a: "Yes, we use moisture-proof gypsum boards or cement fibre boards for bathroom ceilings. These resist humidity and prevent sagging." },
    ],
    iconPath: null,
  },
  "tiles-flooring": {
    slug: "tiles-flooring",
    label: "Tiles & Flooring",
    title: "Tiles & Flooring Work In Bangalore",
    subtitle: "Expert tile fitting for floors, walls, bathrooms, and kitchens with precision levelling and grouting.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80",
    description: "Our tiling specialists deliver flawless floor and wall installations for Bangalore homes. From large-format vitrified tiles to intricate bathroom mosaics, we ensure precise levelling, clean cuts, and durable grouting.",
    scope: [
      { title: "Floor Tiles", items: ["Vitrified tile installation (2x2, 2x4, 4x4 ft)", "Porcelain tile laying", "Marble and granite flooring", "Wooden laminate / vinyl plank flooring", "Anti-skid tiles for wet areas"] },
      { title: "Wall Tiles", items: ["Bathroom wall tiles (floor to ceiling)", "Kitchen backsplash tiles", "Dado height tiling", "Accent wall tile cladding", "Exterior wall tile installation"] },
      { title: "Bathroom", items: ["Complete bathroom tiling", "Shower area waterproofing + tiling", "Bathroom floor slope for drainage", "Niche and shelf tile finishing", "Toilet seat area tiling"] },
      { title: "Finishing", items: ["Tile grouting (epoxy or cement)", "Tile border and skirting", "Floor levelling before tiling", "Old tile removal and re-tiling", "Tile sealing and polishing"] },
    ],
    brands: ["Kajaria", "Somany", "RAK Ceramics", "Asian Granito", "Nitco", "Johnson Tiles", "Cera"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", alt: "Bathroom tiles installation Bangalore", caption: "Large-format vitrified tiles with minimal joints" },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", alt: "Bathroom wall tiles Bangalore", caption: "Full bathroom wall-to-wall ceramic tiling" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: "Kitchen backsplash tiles Bangalore", caption: "Subway tile kitchen backsplash with contrast grout" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Living room floor tiles Bangalore", caption: "Premium 4x4 vitrified tiles in living-dining area" },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80", alt: "Balcony tiles Bangalore", caption: "Anti-skid outdoor tiles for balcony" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", alt: "Marble flooring Bangalore home", caption: "Italian marble-look porcelain flooring" },
    ],
    timeline: "7-20 days depending on area",
    startingPrice: "Starting from 35,000",
    faqs: [
      { q: "Do you supply the tiles or do I buy them?", a: "Either way works. You can buy tiles from any showroom and we install them. Or we can source tiles from our partner dealers (Kajaria, Somany) at competitive rates." },
      { q: "What size tiles do you recommend for rooms?", a: "For living rooms, 2x4 or 4x4 ft tiles give a spacious look with fewer joints. For bathrooms, 1x2 or 2x2 ft tiles with anti-skid finish are ideal." },
      { q: "Can you remove old tiles and re-tile?", a: "Yes. We remove existing tiles, level the surface, apply fresh adhesive, and lay new tiles. We handle all debris removal." },
      { q: "What type of grouting do you use?", a: "We offer both cement-based and epoxy grout. Epoxy grout costs more but is waterproof, stain-resistant, and ideal for bathrooms and kitchens." },
    ],
    iconPath: null,
  },
  "plumbing-work": {
    slug: "plumbing-work",
    label: "Plumbing Work",
    title: "Plumbing Work In Bangalore",
    subtitle: "Complete plumbing and sanitary installation — bathroom fixtures, kitchen plumbing, concealed piping, and geyser setup.",
    heroImage: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1920&q=80",
    description: "Our plumbing team handles everything from fresh installations in new apartments to complete replumbing of older Bangalore homes. We use branded CPVC and PPR pipes with concealed routing for a clean finish.",
    scope: [
      { title: "Bathroom Plumbing", items: ["Complete bathroom plumbing layout", "Concealed hot and cold water lines", "Shower mixer and diverter installation", "Western/Indian toilet seat fitting", "Washbasin and pedestal installation"] },
      { title: "Kitchen Plumbing", items: ["Kitchen sink installation (single/double)", "Under-counter plumbing routing", "Dishwasher water inlet and drain", "RO water purifier point", "Washing machine inlet and drain"] },
      { title: "Fixtures", items: ["Jaquar / Hindware / Cera fixture installation", "Rain shower and handheld shower setup", "Health faucet installation", "Towel rod and accessories mounting", "Floor drain and trap installation"] },
      { title: "Systems", items: ["Geyser / water heater installation", "Overhead tank and sump pump wiring", "Water pressure booster setup", "Solar water heater piping", "Concealed cistern (Geberit) installation"] },
    ],
    brands: ["Jaquar", "Hindware", "Cera", "Kohler", "Astral CPVC", "Supreme PPR", "Geberit"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80", alt: "Modern bathroom fixtures Bangalore", caption: "Premium Jaquar fixtures with rain shower setup" },
      { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80", alt: "Kitchen sink plumbing Bangalore", caption: "Under-counter kitchen plumbing with garbage disposal" },
      { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80", alt: "Geyser installation Bangalore", caption: "Wall-mounted geyser with concealed hot/cold piping" },
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", alt: "Bathroom renovation plumbing Bangalore", caption: "Complete bathroom replumbing with concealed lines" },
      { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80", alt: "Shower installation Bangalore", caption: "Wall-mounted mixer with overhead and hand shower" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: "Kitchen tap installation Bangalore", caption: "Pull-out kitchen faucet with hot water provision" },
    ],
    timeline: "3-10 days depending on scope",
    startingPrice: "Starting from 20,000",
    faqs: [
      { q: "Do you use concealed or exposed piping?", a: "We strongly recommend concealed piping for a clean finish. We use CPVC pipes for hot water and PPR/UPVC for cold water lines, all routed inside walls." },
      { q: "Which plumbing brands do you install?", a: "We install Jaquar, Hindware, Cera, and Kohler fixtures. You choose the brand and model — we handle procurement and installation." },
      { q: "Can you replumb an old bathroom?", a: "Yes. We remove old fixtures, reroute piping as needed, install new concealed lines, and fit new sanitary ware. This is often done alongside tiling." },
      { q: "Do you handle geyser installation?", a: "Yes. We install storage and instant water heaters, run concealed hot water lines from the geyser to bathroom and kitchen, and set up the electrical point." },
    ],
    iconPath: null,
  },
};
