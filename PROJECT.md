# 🏥 Dermatology Clinic Website

A modern, fully customizable Next.js website template designed for dermatology clinics, skin specialists, and aesthetic medicine practices. Built with performance, SEO, and conversion optimization in mind.

---

## 📋 Project Overview

This is a professional healthcare website designed to help dermatologists and skin clinics:
- **Showcase Services** - Display dermatology treatments and procedures
- **Build Trust** - Feature doctor credentials and patient testimonials
- **Drive Conversions** - Guide patients to book consultations via WhatsApp/contact form
- **Optimize for SEO** - Rank on Google with schema markup and SEO-friendly structure
- **Responsive Design** - Beautiful on desktop, tablet, and mobile devices

### Current Status
🚀 **Demo Mode**: This is currently a template/demo site. Edit `clientData.ts` to customize for a real clinic.

### ⭐ NEW: Complete Appointment Booking System
This project now includes a **production-ready appointment booking system** that:
- Collects leads via a validated booking form
- Saves data directly to Google Sheets
- Redirects users to WhatsApp with pre-filled messages
- Includes mobile sticky CTA buttons
- Tracks conversions with Google Analytics
- Includes anti-spam protection

**See [BOOKING_SETUP.md](BOOKING_SETUP.md) for complete setup instructions!**

---

## 🎯 Key Features

- ✅ **100% Customizable** - All text, colors, and content controlled via `clientData.ts`
- ✅ **SEO Optimized** - Google Search Console, Analytics, Open Graph, structured data
- ✅ **Mobile Responsive** - Fully responsive design using Tailwind CSS
- ✅ **High Performance** - Next.js 16 with TypeScript for fast load times
- ✅ **Animated Components** - Smooth animations with Framer Motion
- ✅ **WhatsApp Integration** - Contact forms pre-fill WhatsApp messages
- ✅ **Demo Banner** - Shows "Demo Preview" when in demo mode
- ✅ **Professional Layout** - Hero, Services, Doctor Profile, Testimonials, FAQ, Contact sections

---

## 🏗️ Project Structure

```
dr/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main homepage - imports all sections
│   │   ├── layout.tsx         # Root layout with metadata & providers
│   │   ├── globals.css        # Global styles
│   │   ├── robots.ts          # SEO - robots.txt generation
│   │   └── sitemap.ts         # SEO - sitemap.xml generation
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Footer with links & info
│   │   │   └── DemoBanner.tsx # Demo preview banner
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero section with CTA
│   │   │   ├── Services.tsx        # Services/treatments grid
│   │   │   ├── AboutDoctor.tsx     # Doctor profile section
│   │   │   ├── Testimonials.tsx    # Patient reviews
│   │   │   ├── Faq.tsx            # FAQ accordion
│   │   │   └── Contact.tsx        # Contact form
│   │   │
│   │   ├── JsonLd.tsx         # Schema markup for Google
│   │   └── ThemeProvider.tsx  # CSS variables theme provider
│   │
│   └── config/
│       └── clientData.ts       # ⭐ SINGLE SOURCE OF TRUTH - All customization here
│
├── public/                     # Static assets (images, favicon, etc.)
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── next.config.ts             # Next.js config
├── tailwind.config.js         # Tailwind CSS config
├── eslint.config.mjs          # Linting rules
└── postcss.config.mjs         # PostCSS config
```

### 📁 How It Works

1. **All content lives in `clientData.ts`** - This is the only file you need to edit to customize the site for a new clinic
2. **Components read from `clientData`** - Each component imports and displays data from the centralized config
3. **Styling via CSS variables** - Colors and brand elements are defined in the theme provider

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with SSR, routing, and optimization |
| **React 19** | UI component library |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS 4** | Utility-first CSS framework for styling |
| **Framer Motion** | Smooth animations and transitions |
| **Lucide React** | Modern SVG icons |
| **ESLint** | Code quality and consistency |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Setup

```bash
# 1. Navigate to project directory
cd dr

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## ⚙️ Configuration Guide

### Step 1: Customize Client Data

Edit **[`src/config/clientData.ts`](src/config/clientData.ts)** - This is the main configuration file:

```typescript
export const clientData = {
  seo: {
    siteUrl: "https://yourclinic.com",
    titleTemplate: "%s | Dermatologist & Skin Specialist",
    metaDescription: "...",
    keywords: "...",
  },
  brand: {
    name: "Your Clinic Name",
    tagline: "Your tagline",
  },
  aboutDoctor: {
    name: "Dr. [Name]",
    credentials: "(MBBS, MD, Dermatology)",
    // ... more fields
  },
  contact: {
    phone: "+91 98765 00000",
    email: "appointments@yourclinic.com",
    address: "Your Clinic Address, City, State",
    whatsappNumber: "919876500000", // digits only
  },
  // ... more sections
}
```

### Step 2: Set Up Google Integration

1. **Google Search Console**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your domain as a property
   - Copy the verification token and paste in `clientData.seo.googleSiteVerification`

2. **Google Analytics**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a property for your domain
   - Get the Measurement ID (starts with `G-`)
   - Paste in `clientData.seo.googleAnalyticsId`

### Step 3: Add Branding Assets

Place these images in the `public/` folder:
- `og-image.png` (1200×630px) - Shown when link is shared
- `doctor-portrait.png` - Doctor profile image
- `favicon.ico` - Browser tab icon
- Any other brand assets

### Step 4: Disable Demo Mode

When going live, change in `clientData.ts`:
```typescript
demo: {
  isDemo: false,  // ← Change from true to false
  // ...
}
```

---

## 📄 Page Components Explained

### **Hero Section** (`Hero.tsx`)
- Main headline with clinic name and tagline
- Call-to-action button for bookings
- Eye-catching design with optional background

### **Services Section** (`Services.tsx`)
- Grid of dermatology treatments and procedures
- Each service shows name, description, and icon
- Configured via `clientData.services`

### **About Doctor** (`AboutDoctor.tsx`)
- Doctor's profile with photo, name, and credentials
- Bio paragraphs highlighting expertise
- "Book Consultation" CTA button

### **Testimonials** (`Testimonials.tsx`)
- Patient reviews and success stories
- Display patient name, treatment, review text, and rating
- Configured via `clientData.testimonials`

### **FAQ Section** (`Faq.tsx`)
- Common questions about treatments and procedures
- Expandable accordion interface
- Configured via `clientData.faq`

### **Contact Section** (`Contact.tsx`)
- Contact form (name, email, message)
- Sends data as pre-filled WhatsApp message
- Shows clinic hours, address, phone, email

---

## 🎨 Styling & Customization

### Theme Colors

Colors are controlled via CSS variables in [ThemeProvider.tsx](src/components/ThemeProvider.tsx) and configured in `clientData.ts`:

```typescript
theme: {
  primary: "#1e40af",      // Main brand color
  secondary: "#7c3aed",    // Accent color
  accent: "#ec4899",       // Highlight color
  // ...
}
```

### Tailwind CSS

The project uses **Tailwind CSS v4** for styling. Customize via `tailwind.config.js`.

---

## 🔍 SEO Features

✅ **Meta Tags** - Page title, description, keywords
✅ **Open Graph** - Rich preview on social media
✅ **Schema Markup** - Google-friendly structured data
✅ **Robots.txt** - Auto-generated for search engines
✅ **Sitemap.xml** - Auto-generated for crawling
✅ **Mobile Friendly** - Responsive design for all devices

---

## 📱 Responsive Breakpoints

The design is responsive across:
- **Mobile** - Under 640px
- **Tablet** - 640px to 1024px
- **Desktop** - Over 1024px

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to https://vercel.com/new
# 3. Connect your GitHub repo
# 4. Click "Deploy"

# 5. After deployment, update:
#    - clientData.seo.siteUrl with your production URL
#    - Google Search Console verification token
#    - Google Analytics ID
```

### Deploy to Other Platforms

- **Netlify**: Deploy `next build` output
- **AWS Amplify**: Connect GitHub repo
- **DigitalOcean**: Use App Platform with Node.js runtime
- **Self-hosted**: Build with `npm run build` and run with `npm start`

---

## 📋 Checklist Before Going Live

- [ ] Update `clientData.ts` with clinic information
- [ ] Add doctor portrait and branding images to `/public`
- [ ] Set up Google Search Console and add verification token
- [ ] Set up Google Analytics and add Measurement ID
- [ ] Update `siteUrl` to production domain
- [ ] Configure WhatsApp business number
- [ ] Test contact form and WhatsApp integration
- [ ] Test on mobile devices
- [ ] Set `isDemo: false` in demo section
- [ ] Deploy to production
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Google Analytics for traffic

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### TypeScript Errors
```bash
npm run lint  # Check for type issues
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Images Not Showing
- Ensure images are in the `/public` folder
- Check file paths in `clientData.ts` match actual filenames
- Images should be `.png`, `.jpg`, or `.webp` format

---

## 📞 Support & Customization

This template is designed to be a starting point. Key areas for customization:

1. **Add more sections** - Create new components and import in `page.tsx`
2. **Modify colors** - Update CSS variables in theme config
3. **Change layout** - Edit component styling in individual `.tsx` files
4. **Add features** - Integrate payment, booking systems, etc.

---

## 📄 License

This project is a customizable template for healthcare professionals.

---

**Last Updated**: May 2026  
**Built By**: Sultandev  
**Version**: 0.1.0
