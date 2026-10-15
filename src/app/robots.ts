import { clientData } from '@/config/clientData';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = clientData.seo.siteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
