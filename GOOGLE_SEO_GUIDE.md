# 🚀 Google SEO & Integration Guide
### For Dermatology Clinic Websites — Centralized Setup

---

## ⚡ Quick Start Checklist

When a client buys and you have their domain ready, open **one file**:
`src/config/clientData.ts` → Update the `seo` section:

```ts
seo: {
  siteUrl:                "https://theirdomainname.com",  // ← CRITICAL
  metaDescription:        "Expert dermatologist in [City]...",
  keywords:               "dermatologist in [City], skin clinic near me...",
  googleSiteVerification: "",  // ← paste after Step 2 below
  googleAnalyticsId:      "",  // ← paste after Step 3 below
}
```

---

## STEP 1 — Domain & Hosting

Before Google can index your site, you need a live URL.

| Task | Notes |
|---|---|
| Buy a domain | Recommended: GoDaddy, Namecheap, Google Domains |
| Host the Next.js app | **Vercel** is easiest (free tier available) — just connect GitHub repo |
| Set `siteUrl` in config | Must match the exact live URL, no trailing slash |
| Ensure HTTPS | Vercel does this automatically. Google **penalises** non-HTTPS sites |

> **Naming tip:** `drclinicname.com` or `skinclinicname.in` rank better for local searches

---

## STEP 2 — Google Search Console (Most Important)

Google Search Console (GSC) tells Google your site exists and lets you monitor performance.

### Setup:
1. Go to 👉 **https://search.google.com/search-console**
2. Click **"Add Property"** → Choose **"URL prefix"** → Enter `https://yourclinic.com`
3. Choose **"HTML tag"** verification method
4. Copy the `content="..."` value (e.g. `abc123XYZ_token`)
5. In `clientData.ts`, set:
   ```ts
   googleSiteVerification: "abc123XYZ_token"
   ```
6. Deploy the site → Come back to GSC → Click **"Verify"** ✅

### After Verification:
- Click **"Sitemaps"** in the left menu
- Enter: `sitemap.xml` → Click **Submit**
- Google will now crawl all your pages

### Monitor Weekly:
| Report | What to check |
|---|---|
| **Coverage** | Are pages indexed? Any errors? |
| **Performance** | Which keywords bring clicks? |
| **Core Web Vitals** | Is the site fast enough? |
| **Rich Results** | Are FAQ boxes and business info showing? |

---

## STEP 3 — Google Analytics 4 (Track Visitors)

1. Go to 👉 **https://analytics.google.com**
2. Click **Admin** → **Create** → **Property**
3. Fill in clinic name, country (India), currency (INR)
4. Go to **Data Streams** → **Add stream** → **Web**
5. Enter website URL → Copy the **Measurement ID** (starts with `G-`)
6. In `clientData.ts`, set:
   ```ts
   googleAnalyticsId: "G-XXXXXXXXXX"
   ```
7. Deploy — GA4 is now live. No other code needed.

### Key Reports to Watch:
| Report | What it tells you |
|---|---|
| **Acquisition** | Where visitors come from (Google, WhatsApp, Instagram) |
| **Engagement → Pages** | Which pages people visit most |
| **Conversions** | How many clicked "Book Appointment" |

---

## STEP 4 — Google My Business (Critical for Local Search)

Google My Business is why clinics appear in **Google Maps** and the map pack in search results. This is **free** and extremely powerful.

1. Go to 👉 **https://business.google.com**
2. Search for the clinic name → **Add your business**
3. Fill in:
   - Business name (exact clinic name)
   - Category: **Dermatologist** + **Skin Care Clinic**
   - Address (full, with PIN code)
   - Phone number
   - Website URL
   - Working hours
4. **Verify** via postcard (Google mails a code to the clinic address)
5. Add photos:
   - Doctor photo
   - Clinic exterior
   - Treatment rooms
   - Before/after treatment photos (blurred faces)
6. Enable **Booking** button → Link to the website contact section

### 🌟 Get Reviews:
After every successful treatment, ask the patient to leave a Google review. **Star rating is the #1 local ranking factor.**

---

## STEP 5 — Rich Results (Already Built In)

Your website already has **JSON-LD structured data** injected automatically. This enables:

| Schema Type | What Google Shows |
|---|---|
| `MedicalBusiness` | Address, phone, hours in search results |
| `Physician` | Doctor credentials in Knowledge Panel |
| `FAQPage` | FAQ dropdowns directly in search results |
| `AggregateRating` | ⭐⭐⭐⭐⭐ stars under the search result |

### Test your rich results:
👉 https://search.google.com/test/rich-results
Paste the live URL. All schemas should pass ✅

---

## STEP 6 — Keyword Strategy for Indian Dermatology

### High-Intent Keywords (Use These First)
```
dermatologist in [City]
skin clinic near me
acne treatment in [City]
best skin doctor in [City]
pigmentation removal [City]
laser hair removal [City]
hair fall treatment [City]
anti aging treatment [City]
```

### How to Use Them
Update `clientData.seo.keywords` with city-specific terms:
```ts
keywords: "dermatologist in Ahmedabad, skin clinic in Ahmedabad, acne treatment Ahmedabad, best skin doctor near me, pigmentation treatment Ahmedabad",
```

Also update the `metaDescription` to naturally include the city name:
```ts
metaDescription: "Expert dermatologist in Ahmedabad offering acne treatment, anti-aging, laser hair reduction & more. Book appointment today — ₹500 consultation.",
```

---

## STEP 7 — Page Speed (Google Core Web Vitals)

Google ranks faster websites higher. Your Next.js setup is already optimized but check:

1. Go to 👉 **https://pagespeed.web.dev**
2. Enter your URL → run test
3. Target: **90+ score** on mobile

### Common Quick Fixes:
| Issue | Fix |
|---|---|
| Slow images | Convert `/public/*.png` to WebP format |
| Missing compression | Enable in `next.config.ts`: `compress: true` |
| Large fonts | Already using `next/font` — ✅ |

---

## STEP 8 — Social Proof (WhatsApp & Instagram)

Indian patients heavily use WhatsApp and Instagram to find doctors.

### Update social links in `clientData.ts`:
```ts
social: {
  instagram: "https://instagram.com/yourclinichandle",
  whatsapp:  "https://wa.me/91XXXXXXXXXX",
  facebook:  "https://facebook.com/yourclinicpage",
}
```

### Instagram Strategy:
- Post 3x/week: before/after results, tips, clinic photos
- Use local hashtags: `#dermatologistAhmedabad`, `#skincareindia`
- Add website link in bio

---

## 📋 Complete Monthly SEO Checklist

| Frequency | Task |
|---|---|
| **One-time** | Google Search Console setup + sitemap submission |
| **One-time** | Google My Business setup + verification |
| **One-time** | Google Analytics 4 setup |
| **Monthly** | Check GSC for crawl errors |
| **Monthly** | Check rankings for target keywords |
| **Monthly** | Request 5+ new Google reviews from patients |
| **Monthly** | Post 8-12 Instagram posts |
| **Quarterly** | Update testimonials in `clientData.ts` |
| **Quarterly** | Run PageSpeed test and fix issues |

---

## 🛠 Files Added to Your Website (Automatic)

| URL | Purpose |
|---|---|
| `/sitemap.xml` | Tells Google all your pages |
| `/robots.txt` | Tells crawlers what to index |
| Page `<head>` | Full meta tags, OG, Twitter card |
| Page `<head>` | JSON-LD structured data for rich results |
| Page `<head>` | Google Analytics 4 (when ID provided) |

---

*Guide created for the centralized dermatology website template — sultandev*
