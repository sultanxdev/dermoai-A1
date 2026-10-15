'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { business, contact, services, serviceAreas } = clientData;

  const waLink = createWhatsAppLink(
    contact.whatsappNumber,
    clientData.whatsapp.defaultMessage
  );

  return (
    <footer className="bg-[#0B1E36] text-slate-300 pt-16 pb-24 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {business.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {business.shortBio}
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-sm text-sky-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Up to 90 Days Service Warranty on All Repairs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>100% Genuine OEM Replacement Parts</span>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {/* Doorstep Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Our Repair Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500 text-xs">▸</span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Localities Covered (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Popular Localities
            </h4>
            <ul className="space-y-1.5 text-sm">
              {serviceAreas.localities.slice(0, 7).map((area) => (
                <li key={area}>
                  <a
                    href="#areas"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#areas"
                  className="text-sky-400 font-medium text-xs hover:underline"
                >
                  View All Localities →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Timings (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>
                  {contact.address}, {contact.city}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span>{contact.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-white hover:text-sky-400 font-semibold"
                >
                  {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p className="text-slate-400">
            Certified Door-to-Door Refrigerator & Home Appliance Repair
          </p>
        </div>
      </div>
    </footer>
  );
}
