'use client';

import React from 'react';
import { ShieldCheck, Award, Wrench, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/whatsapp';

export default function AboutTechnician() {
  const { business, contact } = clientData;

  const waLink = createWhatsAppLink(
    contact.whatsappNumber,
    DEFAULT_WHATSAPP_MESSAGE
  );

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Technician Photo & Experience Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Outer Decorative Border */}
              <div className="absolute inset-0 bg-sky-200/50 rounded-3xl transform rotate-2"></div>
              
              {/* Main Card with Image */}
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={business.photoUrl}
                  alt={`${business.technicianName} - Refrigerator Repair Technician`}
                  className="w-full h-[400px] object-cover object-center"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                      Verified Field Specialist
                    </p>
                    <h4 className="text-base font-extrabold text-slate-900">
                      {business.technicianName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Doorstep Service Lead
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-sky-600 leading-none">
                      {business.experienceYears}
                    </span>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">
                      Years Exp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Credentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                About The Technician
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Meet {business.technicianName}
              </h2>
              <p className="text-base text-slate-600 mt-3 leading-relaxed">
                {business.shortBio}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-normal">
                  <strong>Transparent In-Person Diagnostics:</strong> No taking appliances away. We diagnose faults right in front of you and explain every required part.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-normal">
                  <strong>100% Genuine OEM Parts:</strong> We carry factory-grade thermostats, relays, bimetals, and compressors directly sourced for your fridge brand.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-normal">
                  <strong>Service Warranty Backing:</strong> Written invoice and up to 90 days service warranty provided for complete peace of mind.
                </p>
              </div>
            </div>

            {/* Numbers counter */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {business.experienceYears}
                </p>
                <p className="text-xs text-slate-500 font-medium">Years in Field</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {business.satisfiedCustomers}
                </p>
                <p className="text-xs text-slate-500 font-medium">Fixed Appliances</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <p className="text-xl sm:text-2xl font-black text-slate-900">
                  {business.warrantyDays}
                </p>
                <p className="text-xs text-slate-500 font-medium">Warranty Support</p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call {business.technicianName} Directly</span>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
