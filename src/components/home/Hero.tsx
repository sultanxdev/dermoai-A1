'use client';

import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Wrench, Star } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const { business, hero, contact, supportedBrands } = clientData;

  const waLink = createWhatsAppLink(
    contact.whatsappNumber,
    DEFAULT_WHATSAPP_MESSAGE
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200">
      {/* Background Subtle Accent Gradients */}
      <div
        aria-hidden
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & High-Conversion CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold mx-auto lg:mx-0 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-sky-600 animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {hero.headline}
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subheadline}
            </p>

            {/* PROMINENT DUAL CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              {/* Call Now Button */}
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-base bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/25 hover:shadow-xl transition-all duration-200 active:scale-98"
              >
                <Phone className="w-5 h-5 fill-white" />
                <span>Call Now: {contact.phoneDisplay}</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl font-bold text-base bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{hero.whatsappCtaText}</span>
              </a>
            </div>

            {/* Fast booking link */}
            <p className="text-xs sm:text-sm text-slate-500 pt-1">
              Need a visit scheduled?{' '}
              <a
                href="#contact"
                className="text-sky-600 hover:text-sky-700 font-semibold underline underline-offset-2"
              >
                Fill our 30-second Doorstep Form ↓
              </a>
            </p>

            {/* Quick Metrics & Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200/80">
              {hero.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 border border-slate-200/80 rounded-xl p-3 text-center sm:text-left shadow-sm"
                >
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Trust Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-7">
              {/* Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {business.technicianName}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Chief Doorstep Technician ({business.experienceYears} Exp.)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md border border-amber-200 text-amber-800 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{business.rating}</span>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="py-5 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Doorstep Repair in 30–60 Minutes
                    </h4>
                    <p className="text-xs text-slate-500">
                      Technician carries all standard testing tools & spare parts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      100% Genuine Spare Parts
                    </h4>
                    <p className="text-xs text-slate-500">
                      Original compressors, fans, sensors & relays with bill.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Transparent Upfront Pricing
                    </h4>
                    <p className="text-xs text-slate-500">
                      Inspection starting at ₹249. No surprise bills or hidden fees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Brands Preview */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  All Brands Repaired:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {supportedBrands.slice(0, 8).map((brand) => (
                    <span
                      key={brand}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 text-[11px] font-semibold">
                    + More
                  </span>
                </div>
              </div>

              {/* Emergency Callout Card Footer */}
              <div className="mt-5 p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wide">
                    Need Emergency Visit?
                  </p>
                  <p className="text-sm font-bold text-white">
                    {contact.phoneDisplay}
                  </p>
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors"
                >
                  Dial Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}