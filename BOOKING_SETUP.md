# 📅 Complete Appointment Booking System Guide

## Overview

This guide walks you through setting up a complete appointment booking system that:
- ✅ Collects leads through a professional booking form
- ✅ Saves data to Google Sheets automatically
- ✅ Redirects users to WhatsApp for direct communication
- ✅ Tracks conversions with Google Analytics
- ✅ Works on mobile and desktop
- ✅ Includes anti-spam protection
- ✅ Shows sticky CTA buttons on mobile

---

## 🏗️ Architecture

```
┌─────────────────────┐
│   User Books        │
│   Appointment       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────┐
│  Next.js Booking Form       │
│  (Validation + Anti-spam)   │
└──────────┬──────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│  Next.js API Route               │
│  /api/book-appointment/route.ts  │
└──────────┬───────────────────────┘
           │
           ▼
┌──────────────────────────────────────────┐
│  Google Apps Script Webhook              │
│  (Deployed web app)                      │
└──────────┬───────────────────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  Google Sheet                │
│  Leads Database              │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────────┐
│  User Redirected to WhatsApp     │
│  Pre-filled with booking details │
└──────────────────────────────────┘
```

---

## 📋 STEP 1: Create Google Sheet

### 1. Go to Google Sheets
- Open [sheets.google.com](https://sheets.google.com)
- Click "Create" → "New spreadsheet"
- Name it: `Dr [Name] Leads` (e.g., "Dr Sharma Leads")

### 2. Create Columns
In **Row 1**, add these column headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Treatment | Preferred Date | Preferred Time | Message | Source | Status |

### 3. Format Date Column (Optional)
- Select column A (Timestamp)
- Right-click → "Format cells"
- Choose "Date time" → "Format: Jan 1, 2025, 10:30 AM"

---

## 🔧 STEP 2: Create Google Apps Script

### 1. Open Apps Script Editor
- In your Google Sheet, click **Extensions** → **Apps Script**
- A new tab opens with the Apps Script editor

### 2. Delete Default Code
- Delete all code in the editor
- Paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active sheet (Sheet1 is default)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

    // Parse incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Add row to sheet
    sheet.appendRow([
      new Date(),                  // Timestamp
      data.name,                   // Name
      data.phone,                  // Phone
      data.treatment,              // Treatment
      data.preferredDate,          // Preferred Date
      data.preferredTime,          // Preferred Time
      data.message,                // Message
      data.source,                 // Source
      "NEW"                        // Status
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Save the Script
- Click the **Save** button (Ctrl+S)
- Name it: "Clinic Booking Script"
- Click **Save**

---

## 🚀 STEP 3: Deploy Google Apps Script

### 1. Create New Deployment
- Click **Deploy** button (top right)
- Choose **New Deployment**

### 2. Select Type
- Click the dropdown next to "Type"
- Select **"Web app"**

### 3. Configure Deployment
- **Execute as**: `Me` (your Google account)
- **Who has access**: `Anyone`

### 4. Deploy
- Click **Deploy** button
- A dialog shows the deployed URL

### 5. Copy the URL
- Find the line: `New deployment ID:`
- Copy the entire URL shown
- It looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec`

**Save this URL — you'll need it in the next step!**

---

## 🔐 STEP 4: Add Environment Variable

### 1. Create `.env.local` File
- In your project root, create a file: `.env.local`
- Or copy from `.env.local.example`:

```bash
# Windows (PowerShell)
Copy-Item ".env.local.example" ".env.local"
```

### 2. Add Google Script URL
In `.env.local`, replace with your deployed URL:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

### 3. Verify
- Your `.env.local` should have exactly one line
- Check that there are no spaces or extra characters

---

## 📝 STEP 5: Configure Clinic Details

### 1. Open `src/config/clientData.ts`
- Find the `contact` section:

```typescript
contact: {
  phone: "+91 98765 00000",              // Your clinic phone
  email: "appointments@yourclinic.com",  // Your clinic email
  address: "Your Clinic Address, City",  // Your clinic address
  workingHours: "Mon – Sat: 10:00 AM – 7:00 PM",
  whatsappNumber: "919876500000",  // ⭐ IMPORTANT - WhatsApp number
},
```

### 2. Update WhatsApp Number
- **Format**: Country code + phone number, NO spaces or symbols
- **Examples**:
  - India: `919876543210` (91 = country code)
  - USA: `13125551234` (1 = country code)
  - UK: `442071838750` (44 = country code)

### 3. Update Treatments (Optional)
If you want to customize treatment options, edit:

```typescript
treatments: [
  { id: "acne", name: "Acne Treatment" },
  { id: "pigmentation", name: "Pigmentation Treatment" },
  // Add more as needed
],
```

---

## 🧪 STEP 6: Test the System

### 1. Start Development Server
```bash
npm run dev
```

### 2. Open Website
- Go to `http://localhost:3000`

### 3. Scroll to Contact Section
- Find the "Begin Your Skin Journey Today" section
- You should see the booking form on the right

### 4. Fill Out Form
- Name: "Test User"
- Phone: "9876543210" (or your number)
- Treatment: "Acne Treatment"
- Date: Tomorrow's date
- Message: "Test booking"

### 5. Submit
- Click "Book Appointment"
- You should see a success message
- **Important**: You'll be redirected to WhatsApp

### 6. Check Google Sheet
- Go back to your Google Sheet
- Refresh the page
- You should see a new row with your test data!

### ✅ If It Works
- The form submitted successfully
- Data saved to Google Sheets
- WhatsApp opened with pre-filled message

### ❌ If It Doesn't Work

**Problem: Form submits but WhatsApp doesn't open**
- Check that `whatsappNumber` in `clientData.ts` is correct (no + or spaces)

**Problem: Google Sheets not getting data**
- Check `GOOGLE_SCRIPT_URL` in `.env.local` is correct
- Make sure Apps Script deployment shows "Anyone" can access
- Try redeploying the Apps Script

**Problem: Form validation errors**
- Make sure phone number is 10+ digits
- Name must be 2+ characters
- Treatment must be selected

---

## 📱 Mobile Experience

### Sticky CTA Bar (Mobile Only)
On mobile phones, a sticky bottom bar appears with:
- 📞 **Call** - Direct phone call
- 💬 **WhatsApp** - Direct WhatsApp chat
- 📅 **Book** - Opens full booking form

### Desktop
On desktop, circular buttons appear on the right side:
- Same functionality as mobile
- Non-intrusive placement

**To disable sticky CTA**, in `clientData.ts`:
```typescript
booking: {
  enabled: true,
  stickyCtaEnabled: false,  // Set to false to hide
}
```

---

## 📊 Analytics Tracking

### Events Tracked
The booking form automatically tracks:

1. **appointment_submitted** - User submitted form
2. **whatsapp_click** - User clicked WhatsApp button
3. **call_click** - User clicked Call button
4. **lead_conversion** - Successful form submission

### View in Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your property
3. Go to **Realtime** → **Events**
4. You should see the events firing when users interact

### Add Analytics ID
In `clientData.ts`:
```typescript
seo: {
  googleAnalyticsId: "G-XXXXXXXXXX",  // Get from Google Analytics
}
```

---

## 🛡️ Security Features

### Anti-Spam Protection
- **Honeypot Field**: Hidden form field that should remain empty
- **Validation**: Phone and name are validated
- **Rate Limiting**: Can be added to API route if needed

### What's Already Implemented
- ✅ Zod validation for all fields
- ✅ Honeypot anti-spam field
- ✅ Phone number validation
- ✅ Required field checks
- ✅ Future date validation

### Add CAPTCHA (Optional)
For higher spam protection:

1. Install Turnstile: `npm install @marsidev/react-turnstile`
2. Get free keys from [Cloudflare Turnstile](https://dash.cloudflare.com)
3. Add to BookingForm component

---

## 📧 Google Sheets Automation (Optional)

### Auto-Reply with Google Apps Script
You can add email notifications:

```javascript
// Add to Apps Script:
function sendNotification() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  const data = sheet.getRange(lastRow, 1, 1, 9).getValues()[0];
  
  GmailApp.sendEmail(
    "your-email@gmail.com",
    "New Lead: " + data[1],
    "Name: " + data[1] + "\nPhone: " + data[2]
  );
}
```

### Auto-Create Calendar Event
Send appointment details to Google Calendar automatically

---

## 🎨 Customization

### Change Form Title
In `clientData.ts`:
```typescript
booking: {
  formTitle: "Schedule Your Consultation",
  formSubtitle: "We'll contact you within 2 hours",
}
```

### Change Button Colors
In `BookingForm.tsx`, find the button styling:
```tsx
className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700..."
```
Change `blue-600` to your preferred color.

### Add Custom Field
Edit `BookingForm.tsx` and add:
```tsx
<input type="text" {...register("newField")} placeholder="..." />
```

---

## 🚢 Deployment Checklist

Before going live:

- [ ] `.env.local` file created with `GOOGLE_SCRIPT_URL`
- [ ] Google Apps Script deployed and accessible
- [ ] WhatsApp number configured correctly in `clientData.ts`
- [ ] Test booking form works end-to-end
- [ ] Google Sheets shows test data
- [ ] WhatsApp test message received
- [ ] Analytics ID added (if using GA4)
- [ ] Mobile sticky CTA tested on phone
- [ ] All error messages are user-friendly

---

## 🐛 Troubleshooting

### Issue: "Failed to submit booking"
**Solution**: 
1. Check browser console for errors (F12 → Console)
2. Verify `GOOGLE_SCRIPT_URL` in `.env.local` is correct
3. Test Apps Script URL in browser: paste the URL directly

### Issue: WhatsApp doesn't open
**Solution**:
1. Check `whatsappNumber` format (no + or spaces)
2. Verify phone number is 10+ digits
3. On some browsers, you may need to allow popups

### Issue: Data not appearing in Google Sheets
**Solution**:
1. Verify Apps Script deployment is set to "Anyone"
2. Check sheet name is "Sheet1" (case-sensitive)
3. Try redeploying the Apps Script
4. Check browser console for network errors

### Issue: Form fields not validating
**Solution**:
1. Check browser console for validation errors
2. Name must be 2+ characters
3. Phone must be 10+ digits
4. Treatment must be selected from dropdown

---

## 📞 Support

### Common Questions

**Q: Can I see who booked?**
A: Yes! Open Google Sheets → see all bookings with timestamps

**Q: Can I export the data?**
A: Yes! In Google Sheets → File → Download → Excel/CSV

**Q: Can I add more fields to the form?**
A: Yes! Edit `BookingForm.tsx` and `clientData.ts`

**Q: Does it work internationally?**
A: Yes! WhatsApp works in 150+ countries. Just update the country code.

**Q: Can I send SMS instead of WhatsApp?**
A: Yes, modify the redirect URL to SMS format: `sms:+phonenumber?body=...`

---

## ✅ Success Indicators

Your booking system is working correctly when:

1. ✅ Users can fill and submit the form
2. ✅ Data appears in Google Sheets within seconds
3. ✅ WhatsApp opens with pre-filled message
4. ✅ Mobile shows sticky CTA bar
5. ✅ Analytics tracks the events
6. ✅ No console errors (F12 → Console)

---

## 🚀 Next Steps (Advanced)

Once basic booking works, you can:

1. **Add Scheduling Calendar** - Integrate Calendly or Cal.com
2. **Send Confirmation Email** - Add email notifications
3. **Create Dashboard** - View all bookings in real-time
4. **Add Payment** - Integrate Razorpay or Stripe
5. **Automatic Follow-ups** - Send reminders before appointment

---

**Last Updated**: May 2026  
**Status**: ✅ Production Ready
