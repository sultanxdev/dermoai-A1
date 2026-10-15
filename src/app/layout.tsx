import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { clientData } from "@/config/clientData";
import ThemeProvider from "@/components/ThemeProvider";
//import DemoBanner from "@/components/layout/DemoBanner";
import JsonLd from "@/components/JsonLd";
import StickyCTA from "@/components/booking/StickyCTA";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const { seo, brand, contact } = clientData;

// ─────────────────────────────────────────────────────────────
//  CENTRALIZED SEO METADATA
//  All values come from clientData.ts — only edit that file.
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Base URL for resolving relative paths (OG image, etc.)
  metadataBase: new URL(seo.siteUrl),

  // Title shown in browser tab and Google search results
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: seo.titleTemplate,
  },

  // Description shown under title in Google results
  description: seo.metaDescription,

  // Keywords (secondary signal, but still useful)
  keywords: seo.keywords,

  // Canonical URL — tells Google the definitive page URL
  alternates: {
    canonical: seo.siteUrl,
  },

  // Tell Google to index this page normally
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — controls how the link looks when shared on
  // WhatsApp, Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: brand.name,
    title: `${brand.name} | ${brand.tagline}`,
    description: seo.metaDescription,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${brand.name} — Expert Dermatology Clinic`,
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | ${brand.tagline}`,
    description: seo.metaDescription,
    images: [seo.ogImage],
    ...(seo.twitterHandle && { creator: seo.twitterHandle }),
  },

  // Google Search Console verification
  // Paste your verification token into clientData.seo.googleSiteVerification
  ...(seo.googleSiteVerification && {
    verification: {
      google: seo.googleSiteVerification,
    },
  }),

  // Additional meta tags
  other: {
    "geo.region": seo.region,
    "geo.placename": contact.address,
    "contact": contact.phone,
    "og:phone_number": contact.phone,
    "og:email": contact.email,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google Rich Results */}
        <JsonLd />

        {/* Google Analytics 4 — only injected when an ID is provided */}
        {seo.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${seo.googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${seo.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistMono.variable} ${inter.variable} ${playfair.variable} ${clientData.typography.className} antialiased`}
        style={{
          backgroundColor: clientData.colors.background,
          fontFamily: clientData.typography.fontFamily,
        }}
      >
        <ThemeProvider>
          {clientData.booking.stickyCtaEnabled && <StickyCTA />}
          <FloatingWhatsApp />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
