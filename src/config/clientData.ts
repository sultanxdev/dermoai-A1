// ============================================================
//  CENTRALIZED CLIENT CONFIGURATION — REFRIGERATOR & APPLIANCE REPAIR
//  ─────────────────────────────────────────────────────────────
//  This is THE single source of truth for every piece of
//  business data, contact details, services, areas, and content.
//
//  To customize for the client, edit this file.
// ============================================================

export const clientData = {
  // ── 0. SEO & LOCAL SEARCH CONFIGURATION ────────────────────
  seo: {
    siteUrl: "https://coolcare-refrigeratorservice.com",
    titleTemplate: "%s | Reliable Doorstep Refrigerator Repair",
    metaTitle: "CoolCare Refrigerator Repair | Fast Door-to-Door Service",
    metaDescription:
      "Expert refrigerator & home appliance repair technician at your doorstep. Fast 60-min visit, genuine spare parts, transparent pricing & warranty. Call or WhatsApp now!",
    keywords:
      "refrigerator repair, fridge repair near me, fridge technician doorstep, single door fridge repair, double door fridge repair, inverter fridge repair, fridge gas charging, compressor repair, washing machine repair, ac service",
    ogImage: "/og-image.png",
    googleSiteVerification: "",
    googleAnalyticsId: "",
    locale: "en_IN",
    region: "IN",
    city: "New Delhi",
  },

  // ── 1. DEMO & BANNER FLAGS ────────────────────────────────
  demo: {
    isDemo: false, // Set to true if presenting demo preview
    bannerText: "⚡ Same-Day Doorstep Service Available in Your Area — Book Your Slot Today!",
  },

  // ── 2. BUSINESS & CLIENT PROFILE ──────────────────────────
  business: {
    name: "CoolCare Appliance Solutions",
    technicianName: "Ramesh Sharma", // [Client Name]
    tagline: "Reliable Refrigerator Repair at Your Doorstep",
    shortBio:
      "Certified appliance technician with 12+ years of hands-on experience specializing in domestic and commercial refrigeration, inverter compressors, and PCB circuits.",
    experienceYears: "12+",
    satisfiedCustomers: "4,500+",
    responseTime: "30-60 Mins",
    warrantyDays: "90 Days",
    rating: 4.9,
    reviewCount: 320,
    photoUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop", // Professional technician photo
  },

  // ── 3. CONTACT & WORKING HOURS ────────────────────────────
  contact: {
    phone: "+91 98765 43210", // Primary phone for dialer
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210", // Digits only, with country code (e.g. 919876543210)
    email: "support@coolcare-repair.com",
    address: "Shop No. 14, Main Market, Sector 15, Near City Center",
    city: "New Delhi",
    state: "Delhi NCR",
    pincode: "110001",
    workingHours: "Monday – Sunday: 8:00 AM – 9:00 PM (7 Days a Week)",
    emergencyAvailable: true,
    // Google Maps link: Leave empty if no valid physical storefront or map
    googleMapsUrl: "https://maps.google.com/?q=New+Delhi",
    hasValidMap: true,
  },

  // ── 4. WHATSAPP TEMPLATES ──────────────────────────────────
  whatsapp: {
    defaultMessage: "Hello, I need appliance repair service. Please contact me.",
    ctaMessage: "Hello, I want to book a doorstep refrigerator inspection. Please share availability.",
  },

  // ── 5. HERO SECTION ────────────────────────────────────────
  hero: {
    badge: "Door-to-Door Appliance Service • Same Day Visit",
    headline: "Reliable Refrigerator Repair at Your Doorstep",
    subheadline:
      "Fast, affordable, and trustworthy repair services for all refrigerator brands & models. 100% genuine spare parts, transparent quotes, and doorstep service within 60 minutes.",
    callCtaText: "Call Now",
    whatsappCtaText: "WhatsApp Us",
    highlights: [
      { label: "Doorstep Visit", value: "30-60 Mins" },
      { label: "Service Warranty", value: "Up to 90 Days" },
      { label: "Genuine Parts", value: "100% OEM" },
      { label: "Rating", value: "★ 4.9 / 5.0" },
    ],
  },

  // ── 6. COMMON REFRIGERATOR PROBLEMS WE FIX ────────────────
  commonProblems: [
    {
      id: "no-cooling",
      title: "Fridge Not Cooling",
      description: "Compressor or fan failure, low gas level, or blocked airflow causing temperature rise.",
      icon: "ThermometerSnowflake",
    },
    {
      id: "water-leak",
      title: "Water Leakage Inside / Below",
      description: "Clogged defrost drain tube, cracked drain pan, or faulty door gasket seals.",
      icon: "Droplets",
    },
    {
      id: "frost-buildup",
      title: "Excessive Frost / Ice Buildup",
      description: "Faulty defrost heater, bimetal thermostat, or defrost timer causing ice over-accumulation.",
      icon: "Snowflake",
    },
    {
      id: "noise",
      title: "Strange or Loud Noises",
      description: "Rattling compressor mountings, failing evaporator fan motor, or condenser coil vibrations.",
      icon: "Volume2",
    },
    {
      id: "gas-leak",
      title: "Gas Refill / Refrigerant Leak",
      description: "Puncture in copper coils causing gradual cooling loss and continuous compressor running.",
      icon: "Flame",
    },
    {
      id: "power-tripping",
      title: "Tripping MCB / Power Fault",
      description: "Short circuit in inverter PCB board, faulty start relay, or grounded compressor.",
      icon: "Zap",
    },
  ],

  // ── 7. SERVICES OFFERED ────────────────────────────────────
  services: [
    {
      id: "single-door",
      title: "Single Door Refrigerator Repair",
      shortDescription:
        "Direct cool single door fridge diagnostics, thermostat calibration, gasket replacement, and cooling coil repair.",
      startingPrice: "₹249 Inspection",
      turnaround: "Same Day",
      features: ["Thermostat replacement", "Door rubber gasket change", "Capillary tube flushing", "Ice buildup troubleshooting"],
      icon: "Refrigerator",
    },
    {
      id: "double-door",
      title: "Double Door / Frost-Free Fridge",
      shortDescription:
        "Comprehensive repair for frost-free models. Defrost sensor, timer, bi-metal thermostat, and cooling fan repairs.",
      startingPrice: "₹299 Inspection",
      turnaround: "Same Day",
      features: ["Defrost heater check", "Freezer fan motor repair", "Air damper troubleshooting", "Electronic sensor replacement"],
      icon: "Layers",
    },
    {
      id: "side-by-side",
      title: "Side-by-Side & French Door Inverter",
      shortDescription:
        "Specialized servicing for multi-door, smart inverter, and French door premium refrigerators.",
      startingPrice: "₹399 Inspection",
      turnaround: "Same Day",
      features: ["Inverter PCB diagnostics", "Dual evaporator inspection", "Digital display repair", "Water/ice dispenser fixing"],
      icon: "Sparkles",
    },
    {
      id: "gas-charging",
      title: "Compressor Repair & Gas Charging",
      shortDescription:
        "R134a & R600a eco-friendly refrigerant gas refilling with nitrogen pressure leakage testing & vacuuming.",
      startingPrice: "Genuine Quotes",
      turnaround: "60-90 Mins",
      features: ["Pinpoint leak detection", "Capillary tube replacement", "Nitrogen pressure vacuuming", "Original brand gas top-up"],
      icon: "Gauge",
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair",
      shortDescription:
        "Doorstep service for front load, top load, and semi-automatic machines from all top brands.",
      startingPrice: "₹299 Inspection",
      turnaround: "Same Day",
      features: ["Drum rotation fault", "Drain pump repair", "Water inlet valve", "Motor & belt replacement"],
      icon: "Disc",
    },
    {
      id: "ac-repair",
      title: "Air Conditioner (AC) Service",
      shortDescription:
        "Split and window AC deep cleaning, copper pipe leak fix, capacitor replacement, and cooling diagnostics.",
      startingPrice: "₹349 Inspection",
      turnaround: "Same Day",
      features: ["Jet foam deep clean", "Gas leak repair", "PCB circuit board repair", "Compressor troubleshooting"],
      icon: "Wind",
    },
  ],

  // ── 8. BRANDS WE SERVICE ───────────────────────────────────
  supportedBrands: [
    "Samsung",
    "LG",
    "Whirlpool",
    "Godrej",
    "Haier",
    "Bosch",
    "Panasonic",
    "Hitachi",
    "Voltas Beko",
    "Kelvinator",
    "Liebherr",
    "Electrolux",
  ],

  // ── 9. WHY CHOOSE US ───────────────────────────────────────
  whyChooseUs: [
    {
      title: "Door-to-Door Convenience",
      description: "No need to transport heavy appliances. Our technician visits your home with full equipment.",
      icon: "Home",
    },
    {
      title: "Quick 30-60 Min Response",
      description: "Local neighborhood coverage ensures emergency same-day visits right when your food is at risk.",
      icon: "Clock",
    },
    {
      title: "100% Genuine Spare Parts",
      description: "We use only authentic, brand-approved spare parts with manufacturer warranty.",
      icon: "ShieldCheck",
    },
    {
      title: "Transparent & Fair Pricing",
      description: "Zero hidden costs. Get an upfront estimate before any repair work commences.",
      icon: "CreditCard",
    },
    {
      title: "Up to 90 Days Service Warranty",
      description: "All replaced parts and labor come backed by our trusted 30 to 90-day peace-of-mind warranty.",
      icon: "BadgeCheck",
    },
    {
      title: "Experienced & Verified Technician",
      description: "12+ years of hands-on expertise with background verification and proper safety gear.",
      icon: "UserCheck",
    },
  ],

  // ── 10. HOW IT WORKS ───────────────────────────────────────
  howItWorks: [
    {
      step: "01",
      title: "Contact Us",
      description: "Call our direct phone number or send a WhatsApp message describing your appliance problem.",
      icon: "PhoneCall",
    },
    {
      step: "02",
      title: "Doorstep Visit & Inspection",
      description: "Technician arrives at your home at the scheduled time to diagnose the fault thoroughly.",
      icon: "Wrench",
    },
    {
      step: "03",
      title: "Instant Repair & Warranty",
      description: "We explain the issue, provide upfront estimate, fix the appliance on the spot, and hand over the warranty card.",
      icon: "CheckCircle2",
    },
  ],

  // ── 11. SERVICE AREAS (LOCALITIES COVERED) ────────────────
  serviceAreas: {
    city: "New Delhi & NCR",
    description: "Door-to-door technician visit available across all major localities with zero transit delays:",
    localities: [
      "South Extension",
      "Lajpat Nagar",
      "Hauz Khas",
      "Malviya Nagar",
      "Saket",
      "Greater Kailash (GK 1 & 2)",
      "Vasant Kunj",
      "Dwarka (All Sectors)",
      "Janakpuri",
      "Uttam Nagar",
      "Rohini",
      "Pitampura",
      "Paschim Vihar",
      "Noida (Sectors 1-120)",
      "Indirapuram",
      "Vaishali",
    ],
  },

  // ── 12. GENUINE CUSTOMER REVIEWS ───────────────────────────
  testimonials: [
    {
      id: 1,
      name: "Vikas Aggarwal",
      locality: "Hauz Khas, New Delhi",
      appliance: "Samsung Double Door Inverter Fridge",
      rating: 5,
      date: "Last week",
      review:
        "My refrigerator stopped cooling on Sunday morning with groceries inside. Ramesh arrived within 45 minutes, found a bad defrost sensor, replaced it with an original part, and the fridge was cooling perfectly again. Transparent charges and polite behavior!",
    },
    {
      id: 2,
      name: "Pooja Malhotra",
      locality: "Dwarka Sector 12",
      appliance: "LG Frost-Free Refrigerator",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Very honest technician! Another repair person quoted ₹3,500 claiming gas leak, but this technician checked and fixed a simple stuck fan motor for a fraction of that price. Highly recommended for honest doorstep repair.",
    },
    {
      id: 3,
      name: "Rajesh Nair",
      locality: "Noida Sector 62",
      appliance: "Whirlpool Single Door Fridge",
      rating: 5,
      date: "1 month ago",
      review:
        "Gas refill and filter replacement done cleanly at my house. He checked with nitrogen gauge to confirm there were no leaks before refilling. Works like brand new now. Proper bill and 90-day warranty provided.",
    },
    {
      id: 4,
      name: "Sunita Verma",
      locality: "Lajpat Nagar",
      appliance: "IFB Front Load Washing Machine",
      rating: 5,
      date: "1 month ago",
      review:
        "Called them for washing machine drum noise. Replaced worn bearings quickly. Fast doorstep visit, reasonable charges, and very professional technician.",
    },
  ],

  // ── 13. FREQUENTLY ASKED QUESTIONS (FAQs) ─────────────────
  faqs: [
    {
      question: "How quickly can a technician visit my home?",
      answer:
        "We provide same-day doorstep service. In most covered localities, our technician arrives within 30 to 60 minutes of booking your request.",
    },
    {
      question: "What is your visiting/inspection fee?",
      answer:
        "Our standard doorstep inspection charge is nominal (₹249–₹299 depending on the appliance). If you proceed with the repair work, this inspection charge is completely adjusted or waived!",
    },
    {
      question: "Do you use original spare parts?",
      answer:
        "Yes, 100%. We only source OEM and manufacturer-approved brand spare parts to guarantee safety, cooling efficiency, and longevity.",
    },
    {
      question: "Is there any warranty on refrigerator repairs?",
      answer:
        "Yes! All repairs and replaced components come with a 30 to 90 days service warranty. If the same issue recurs within the warranty window, we fix it with zero service fee.",
    },
    {
      question: "Do I need to carry my refrigerator to a workshop?",
      answer:
        "No. 99% of refrigerator repairs (compressor replacement, gas filling, thermostat, fan motor, PCB repair) are completed right at your doorstep in front of you.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "You can pay after the service is completed and tested via UPI (Google Pay, PhonePe, Paytm), Cash, or Bank Transfer.",
    },
  ],

  // ── 14. ENQUIRY / BOOKING FORM CONFIGURATION ───────────────
  enquiryForm: {
    title: "Book Doorstep Repair Visit",
    subtitle: "Fill out this quick form or call directly. We'll confirm your slot in minutes.",
    applianceOptions: [
      "Single Door Refrigerator",
      "Double Door / Frost-Free Refrigerator",
      "Side-by-Side / Multi-Door Refrigerator",
      "Inverter Refrigerator",
      "Washing Machine (Front/Top Load)",
      "Split / Window Air Conditioner (AC)",
      "Microwave Oven",
      "Other Appliance",
    ],
  },

  // ── 15. THEME PALETTE (PROFESSIONAL BLUE & NAVY) ───────────
  colors: {
    primary: "#0284C7", // Vibrant technician blue
    primaryHover: "#0369A1",
    navy: "#0B1E36", // Trustworthy dark navy
    navyLight: "#132D4B",
    accent: "#F97316", // Urgent orange/amber for Call-to-actions
    accentHover: "#EA580C",
    background: "#F8FAFC", // Clean light cool slate
    surface: "#FFFFFF",
    textMain: "#0F172A", // Deep slate
    textMuted: "#475569", // Medium slate
    border: "#E2E8F0",
    iceBlue: "#E0F2FE",
  },
};

export type ClientData = typeof clientData;
