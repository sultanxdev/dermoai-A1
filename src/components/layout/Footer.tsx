'use client';

import React from 'react';
import Link from 'next/link';
import { clientData } from '@/config/clientData';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, contact, social, services, colors } = clientData;

  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  return (
    <footer
      className="relative w-full border-t overflow-hidden pt-16 sm:pt-20"
      style={{
        backgroundColor: BG,
        borderColor: `${PRIMARY}15`,
        color: PRIMARY,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-bold tracking-tight" style={{ color: PRIMARY }}>
                {brand.logoText}
              </span>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            </div>
            
            <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: `${PRIMARY}BF` }}>
              {brand.tagline}. {clientData.hero.subheadline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {social.whatsapp && (
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: `${PRIMARY}10`,
                    color: PRIMARY,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.color = BG;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${PRIMARY}10`;
                    e.currentTarget.style.color = PRIMARY;
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: `${PRIMARY}10`,
                    color: PRIMARY,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.color = BG;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${PRIMARY}10`;
                    e.currentTarget.style.color = PRIMARY;
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: `${PRIMARY}10`,
                    color: PRIMARY,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.color = BG;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${PRIMARY}10`;
                    e.currentTarget.style.color = PRIMARY;
                  }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: PRIMARY }}>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: `${PRIMARY}CC` }}>
              <li>
                <Link href="#services" className="transition-colors hover:text-[#E64435]">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="#about" className="transition-colors hover:text-[#E64435]">
                  About Doctor
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="transition-colors hover:text-[#E64435]">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="transition-colors hover:text-[#E64435]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-[#E64435]">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: PRIMARY }}>
              Treatments
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: `${PRIMARY}CC` }}>
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link href="#services" className="transition-colors hover:text-[#E64435]">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold" style={{ color: PRIMARY }}>
              Clinic Visit
            </h3>
            <div className="space-y-3 text-sm" style={{ color: `${PRIMARY}CC` }}>
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{contact.address}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0" style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={`tel:${contact.phone}`} className="hover:underline">
                  {contact.phone}
                </a>
              </div>

              {contact.workingHours && (
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{contact.workingHours}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar - Exact user layout */}
        <div
          className="flex flex-col gap-1.5 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderColor: `${PRIMARY}1A`,
            color: `${PRIMARY}99`,
          }}
        >
          <p>© {currentYear} {brand.name}. All rights reserved.</p>
          <p>Built for clinics, with human oversight on every conversation.</p>
        </div>

        {/* Wordmark: same left and right edges as everything above it */}
        <div className="select-none pb-6 pt-4 sm:pb-8" style={{ color: PRIMARY }}>
          <TextHoverEffect text={brand.logoText || "DERMOAI"} />
        </div>
      </div>
    </footer>
  );
}
