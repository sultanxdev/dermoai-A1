# 🚀 Appointment Booking System - Quick Reference

## What's Implemented

✅ **Booking Form Component** - Responsive, validated form with error handling  
✅ **Google Sheets Integration** - Auto-saves bookings to a Google Sheet  
✅ **WhatsApp Redirect** - Pre-fills WhatsApp messages with booking details  
✅ **Sticky Mobile CTA** - Call, WhatsApp, and Book buttons on mobile  
✅ **Form Validation** - Zod validation for phone, name, treatment, dates  
✅ **Anti-Spam** - Honeypot field to block automated submissions  
✅ **Analytics Tracking** - Track bookings, clicks, and conversions  
✅ **API Route** - Secure backend route for form submissions  

---

## 📁 Files Created

```
src/
├── components/
│   └── booking/
│       ├── BookingForm.tsx        ← Main form component
│       └── StickyCTA.tsx          ← Mobile CTA bar + desktop buttons
├── lib/
│   ├── whatsapp.ts               ← WhatsApp utilities
│   └── analytics.ts              ← Analytics tracking
└── app/
    ├── api/
    │   └── book-appointment/
    │       └── route.ts          ← API endpoint
    └── layout.tsx                ← Updated with StickyCTA
config/
└── clientData.ts                 ← Updated with treatments & booking config
.env.local.example               ← Environment variable template
BOOKING_SETUP.md                 ← Complete setup guide
```

---

## 🔧 Quick Setup (5 minutes)

### 1. Copy Environment Variable Template
```bash
cp .env.local.example .env.local
```

### 2. Create Google Sheet
- Go to [sheets.google.com](https://sheets.google.com)
- Create sheet named "Dr [Name] Leads"
- Add columns: Timestamp, Name, Phone, Treatment, Preferred Date, Preferred Time, Message, Source, Status

### 3. Deploy Google Apps Script
- In Google Sheet: Extensions → Apps Script
- Paste the code from BOOKING_SETUP.md (Step 2)
- Click Deploy → New Deployment → Web App
- Copy the deployed URL

### 4. Update Environment Variables
Edit `.env.local`:
```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 5. Update Client Data
In `src/config/clientData.ts`:
```typescript
contact: {
  whatsappNumber: "919876543210",  // Your WhatsApp number (no spaces/symbols)
  // ... other fields
}
```

### 6. Test
```bash
npm run dev
# Visit http://localhost:3000
# Scroll to Contact section
# Submit test booking
# Check Google Sheet for data
```

---

## 📊 Component Hierarchy

```
layout.tsx
└── StickyCTA (conditionally rendered)
    ├── Mobile: Bottom bar with 3 buttons
    └── Desktop: Right side floating buttons

page.tsx
└── Home
    └── Contact
        └── BookingForm (this is what users interact with)
            └── Uses: BookingForm component
            └── Calls: /api/book-appointment
            └── Redirects: WhatsApp
```

---

## 🎯 Data Flow

```
1. User fills form
   ↓
2. Validation checks (zod schema)
   ↓
3. Form submitted to /api/book-appointment
   ↓
4. API sends data to Google Apps Script webhook
   ↓
5. Google Apps Script appends row to Google Sheet
   ↓
6. Analytics event tracked
   ↓
7. User redirected to WhatsApp
```

---

## 🔑 Environment Variables

Required:
```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
```

---

## 🎨 Customization Points

### Change Form Appearance
- Edit `src/components/booking/BookingForm.tsx`
- Look for Tailwind classes like `bg-blue-600`, `text-white`, etc.

### Change Form Fields
- Edit `BookingForm.tsx` form section
- Update Zod schema at the top

### Change WhatsApp Message Template
- Edit `src/lib/whatsapp.ts`
- Function: `generateWhatsAppMessage()`

### Change Treatments List
- Edit `src/config/clientData.ts`
- Section: `treatments: [ ... ]`

### Disable Sticky CTA
- Edit `src/config/clientData.ts`
- Set `booking.stickyCtaEnabled: false`

---

## 🧪 Testing Checklist

- [ ] Form displays on contact section
- [ ] Phone validation works (requires 10+ digits)
- [ ] Name validation works (requires 2+ chars)
- [ ] Treatment dropdown has options
- [ ] Submit button triggers submission
- [ ] Success message appears
- [ ] Google Sheet gets new row
- [ ] WhatsApp opens (may be blocked by browser popup settings)
- [ ] Mobile sticky CTA appears at bottom
- [ ] Analytics events fire (check Google Analytics Realtime)

---

## 🐛 Common Issues & Fixes

### Issue: "Failed to submit booking"
- Check browser console (F12) for errors
- Verify `GOOGLE_SCRIPT_URL` in `.env.local`
- Test URL directly in browser

### Issue: Data not in Google Sheet
- Verify Apps Script deployed with "Anyone" access
- Check sheet is named "Sheet1" (case-sensitive)
- Verify column headers match expected format

### Issue: WhatsApp doesn't open
- Allow popups in browser settings
- Verify `whatsappNumber` has no spaces/symbols
- Check phone format (10+ digits, country code)

### Issue: Validation errors
- Phone must be 10+ digits
- Name must be 2+ characters
- Treatment must be selected

---

## 📈 Analytics Events Tracked

| Event | Triggers | Usage |
|-------|----------|-------|
| `appointment_submitted` | Form submitted | Track form interactions |
| `whatsapp_click` | WhatsApp button clicked | Measure messaging interest |
| `call_click` | Call button clicked | Measure call interest |
| `form_impression` | Form loaded | Track engagement |
| `lead_conversion` | Successful submission | Measure conversions |

View in Google Analytics 4 → Realtime → Events

---

## 🔐 Security Features

- ✅ **Validation** - Zod schema validates all inputs
- ✅ **Honeypot** - Hidden field catches bots
- ✅ **HTTPS** - Deployed sites use HTTPS
- ✅ **No Storage** - Data goes to Google Sheets (your control)
- ✅ **Rate Limiting** - Can be added to API route

---

## 📞 Contact Form in Different Places

### Current Locations
1. **Contact Section** - Main place, full width form
2. **Sticky CTA** - Mobile bottom, opens in modal
3. **Sticky CTA** - Desktop right side, opens in modal

### Adding to Other Places
```tsx
import BookingForm from "@/components/booking/BookingForm";

export default function YourComponent() {
  return (
    <BookingForm />
  );
}
```

---

## 🚀 Deployment

### Before Deploying to Production

1. Update `clientData.ts`:
   - ✅ Set `demo.isDemo = false`
   - ✅ Update clinic name, phone, email
   - ✅ Update WhatsApp number

2. Add Environment Variables:
   - ✅ `GOOGLE_SCRIPT_URL` in Vercel/hosting platform

3. Test Everything:
   - ✅ Fill and submit form
   - ✅ Check Google Sheet
   - ✅ Test WhatsApp redirect
   - ✅ Test mobile experience

4. Monitor:
   - ✅ Check Google Analytics for events
   - ✅ Monitor Google Sheet for leads

---

## 📖 Full Documentation

For complete setup instructions, see: **[BOOKING_SETUP.md](../BOOKING_SETUP.md)**

---

## 💡 Future Enhancements

These features could be added:

1. **Calendar Integration** - Show available slots
2. **SMS Fallback** - Send SMS if WhatsApp unavailable
3. **Email Confirmation** - Auto-reply emails
4. **CRM Dashboard** - View all leads in one place
5. **Appointment Reminders** - Auto-send reminder messages
6. **Payment Integration** - Collect deposit/payment
7. **AI Response** - Auto-respond to common questions
8. **Multi-Language** - Support multiple languages

---

**Status**: ✅ Production Ready  
**Last Updated**: May 2026
