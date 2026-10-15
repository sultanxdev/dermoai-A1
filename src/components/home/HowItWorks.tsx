'use client';

import React from 'react';
import { PhoneCall, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { clientData } from '@/config/clientData';

const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-6 h-6 text-sky-600" />,
  Wrench: <Wrench className="w-6 h-6 text-sky-600" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
};

export default function HowItWorks() {
  const { howItWorks, contact } = clientData;

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            How Door-to-Door Repair Works
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            No transporting bulky appliances to a service center. We visit your doorstep and repair it on the spot.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {howItWorks.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-slate-800/80 border border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between hover:border-sky-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-sky-400 font-mono">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-700/70 flex items-center justify-center">
                    {iconMap[step.icon] || <Wrench className="w-6 h-6 text-sky-400" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < howItWorks.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-6 h-6 text-sky-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-400 mb-4">
            Need urgent repair today? Our local technicians are on duty.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${contact.phone}`}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              📞 Call Now: {contact.phoneDisplay}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors"
            >
              Schedule Online Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
