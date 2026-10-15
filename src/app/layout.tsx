import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clientData } from "@/config/clientData";
import ThemeProvider from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";
import StickyCTA from "@/components/booking/StickyCTA";
import FloatingWhatsApp from "@/components/whatsapp/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const { seo, business, contact } = clientData;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: seo.titleTemplate,
  },
  description: seo.metaDescription,
  keywords: seo.keywords,
  alternates: {
    canonical: seo.siteUrl,
  },
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
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: seo.siteUrl,
    siteName: business.name,
    title: `${business.name} | ${business.tagline}`,
    description: seo.metaDescription,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${business.name} — Refrigerator Repair Service`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: seo.metaDescription,
    images: [seo.ogImage],
  },
  ...(seo.googleSiteVerification && {
    verification: {
      google: seo.googleSiteVerification,
    },
  }),
  other: {
    "geo.region": seo.region,
    "geo.placename": contact.city,
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
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
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
      <body className={`${inter.variable} font-sans antialiased bg-[#F8FAFC] text-[#0F172A]`}>
        <ThemeProvider>
          <StickyCTA />
          <FloatingWhatsApp />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
