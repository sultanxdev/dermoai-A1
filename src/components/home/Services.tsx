'use client';

import React from 'react';
import {
  Layers,
  Sparkles,
  Gauge,
  Disc,
  Wind,
  Wrench,
  Check,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink } from '@/lib/whatsapp';

const iconComponents: Record<string, React.ReactNode> = {
  Refrigerator: <Wrench className="w-6 h-6 text-sky-600" />,
  Layers: <Layers className="w-6 h-6 text-sky-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-indigo-600" />,
  Gauge: <Gauge className="w-6 h-6 text-cyan-600" />,
  Disc: <Disc className="w-6 h-6 text-blue-600" />,
  Wind: <Wind className="w-6 h-6 text-teal-600" />,
};

export default function Services() {
  const { services, contact } = clientData;

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
              Professional Doorstep Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Door-to-Door Appliance Repair Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              All repairs carried out in front of you at your home. Genuine spare parts, clear upfront estimates, and up to 90 days warranty.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white hover:bg-sky-700 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Service</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const serviceWaLink = createWhatsAppLink(
              contact.whatsappNumber,
              `Hello, I would like to book a doorstep service for "${service.title}". Please let me know your available slots.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Price Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {iconComponents[service.icon] || <Wrench className="w-6 h-6 text-sky-600" />}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Includes:
                    </p>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={serviceWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <span>Book Visit</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}