'use client';

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { clientData } from '@/config/clientData';
import BookingForm from '@/components/booking/BookingForm';
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/whatsapp';

export default function Contact() {
  const { business, contact } = clientData;

  const waLink = createWhatsAppLink(
    contact.whatsappNumber,
    DEFAULT_WHATSAPP_MESSAGE
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Fast Response Hotline
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Contact & Book Doorstep Repair
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Speak directly with technician {business.technicianName} or submit your problem details below for quick scheduling.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            {/* Direct Phone Card */}
            <a
              href={`tel:${contact.phone}`}
              className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 hover:bg-sky-100/70 hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 fill-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Call Technician Directly
                </p>
                <p className="text-lg font-black text-slate-900 mt-0.5">
                  {contact.phoneDisplay}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Instant answer • Immediate slot booking
                </p>
              </div>
            </a>

            {/* Direct WhatsApp Card */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 hover:shadow-md transition-all flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 fill-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Chat on WhatsApp
                </p>
                <p className="text-base font-extrabold text-slate-900 mt-0.5">
                  Send Photo/Video of Fault
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get quick estimate or advice within 10 mins
                </p>
              </div>
            </a>

            {/* Working Hours & Service Timing */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Service & Visiting Hours
                </p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {contact.workingHours}
                </p>
                <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Same-Day Emergency Doorstep Visit Available
                </p>
              </div>
            </div>

            {/* Address & Google Maps (Conditional) */}
            {contact.address && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Workshop & Service Center
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {contact.address}, {contact.city}
                  </p>

                  {/* Google Maps link only if available */}
                  {contact.hasValidMap && contact.googleMapsUrl && (
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 mt-2 transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right: Doorstep Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}