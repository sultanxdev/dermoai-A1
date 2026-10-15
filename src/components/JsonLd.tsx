import { clientData } from '@/config/clientData';

/**
 * JSON-LD Structured Data Component
 *
 * Injects rich schema markup into <head> so Google can display:
 * - Clinic name, address, phone in search results
 * - Doctor qualifications in Knowledge Panel
 * - Star ratings
 * - Opening hours
 * - Services list
 *
 * Test your schema at: https://search.google.com/test/rich-results
 */
export default function JsonLd() {
  const { brand, contact, aboutDoctor, services, social, seo, testimonials } = clientData;

  // Average rating from testimonials
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // ── MedicalBusiness (the clinic) ──────────────────────
      {
        '@type': ['MedicalBusiness', 'Dermatology'],
        '@id': `${seo.siteUrl}/#clinic`,
        name: brand.name,
        description: seo.metaDescription,
        url: seo.siteUrl,
        telephone: contact.phone,
        email: contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.address,
          addressCountry: 'IN',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '10:00',
            closes: '19:00',
          },
        ],
        image: `${seo.siteUrl}${aboutDoctor.imageUrl}`,
        logo: {
          '@type': 'ImageObject',
          url: `${seo.siteUrl}/favicon.ico`,
        },
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Card, UPI',
        sameAs: [
          social.instagram,
          social.facebook,
          social.linkedin,
          social.whatsapp,
        ].filter(Boolean),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: avgRating.toFixed(1),
          reviewCount: testimonials.length,
          bestRating: '5',
          worstRating: '1',
        },
        hasMap: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
        employee: [
          {
            '@type': 'Physician',
            '@id': `${seo.siteUrl}/#doctor`,
            name: aboutDoctor.name,
            description: aboutDoctor.bioParagraphs.join(' '),
            qualifications: aboutDoctor.credentials,
            image: `${seo.siteUrl}${aboutDoctor.imageUrl}`,
            worksFor: { '@id': `${seo.siteUrl}/#clinic` },
            medicalSpecialty: 'Dermatology',
          },
        ],
        // Services offered
        availableService: services.map((s) => ({
          '@type': 'MedicalProcedure',
          name: s.title,
          description: s.description,
        })),
      },

      // ── WebSite (enables Google Sitelinks Search Box) ────
      {
        '@type': 'WebSite',
        '@id': `${seo.siteUrl}/#website`,
        url: seo.siteUrl,
        name: brand.name,
        description: seo.metaDescription,
        inLanguage: 'en-IN',
      },

      // ── WebPage (the homepage) ────────────────────────────
      {
        '@type': 'WebPage',
        '@id': `${seo.siteUrl}/#webpage`,
        url: seo.siteUrl,
        name: `${brand.name} | ${brand.tagline}`,
        isPartOf: { '@id': `${seo.siteUrl}/#website` },
        about: { '@id': `${seo.siteUrl}/#clinic` },
        description: seo.metaDescription,
        inLanguage: 'en-IN',
      },

      // ── FAQPage (boosts FAQ rich results in Google) ───────
      {
        '@type': 'FAQPage',
        mainEntity: clientData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
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
