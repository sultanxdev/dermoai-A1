import { clientData } from "@/config/clientData";

/**
 * JSON-LD Structured Data Component for Local Appliance Repair Business
 * Helps Google display Rich Snippets, Local Pack, Reviews & FAQs
 */
export default function JsonLd() {
  const { business, contact, services, seo, testimonials, faqs } = clientData;

  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Local Appliance Repair Business ────────────────────
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${seo.siteUrl}/#business`,
        name: business.name,
        description: seo.metaDescription,
        url: seo.siteUrl,
        telephone: contact.phone,
        email: contact.email,
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: contact.address,
          addressLocality: contact.city,
          addressRegion: contact.state,
          postalCode: contact.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "28.6139",
          longitude: "77.2090",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "21:00",
          },
        ],
        image: business.photoUrl,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: business.rating || avgRating.toFixed(1),
          reviewCount: business.reviewCount || testimonials.length,
          bestRating: "5",
          worstRating: "1",
        },
        hasMap: contact.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
        availableService: services.map((s) => ({
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
        })),
      },

      // ── WebSite Schema ──────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": `${seo.siteUrl}/#website`,
        url: seo.siteUrl,
        name: business.name,
        description: seo.metaDescription,
        inLanguage: "en-IN",
      },

      // ── FAQPage Schema ──────────────────────────────────────
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
