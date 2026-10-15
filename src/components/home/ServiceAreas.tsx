'use client';

import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, MessageCircle } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function ServiceAreas() {
  const { serviceAreas, contact } = clientData;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocalities = serviceAreas.localities.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="areas" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200">
            Doorstep Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Service Areas in {serviceAreas.city}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Our doorstep technicians are stationed across major localities for rapid 30 to 60-minute arrival.
          </p>

          {/* Quick Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your locality / area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all shadow-xs"
            />
          </div>
        </div>

        {/* Localities Chips Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {filteredLocalities.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {filteredLocalities.map((locality, idx) => {
                const areaWaLink = createWhatsAppLink(
                  contact.whatsappNumber,
                  `Hello, I need refrigerator repair at my address in ${locality}. Is a technician available today?`
                );

                return (
                  <a
                    key={idx}
                    href={areaWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 hover:border-sky-300 transition-all group"
                  >
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-sky-800 truncate">
                      {locality}
                    </span>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-slate-500">
                Don&apos;t see your specific locality listed?
              </p>
              <p className="text-sm font-bold text-slate-800 mt-1">
                We likely still cover your neighborhood!
              </p>
              <a
                href={createWhatsAppLink(
                  contact.whatsappNumber,
                  `Hello, I want to check if you provide doorstep repair in "${searchTerm}". Please let me know.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Check Availability on WhatsApp</span>
              </a>
            </div>
          )}

          {/* Bottom Area Guarantee Banner */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero extra travel surcharge for any covered locality.</span>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-sky-600 hover:text-sky-700 font-bold underline"
            >
              Need Same-Day Visit? Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
