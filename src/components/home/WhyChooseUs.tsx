'use client';

import React from 'react';
import {
  Home,
  Clock,
  ShieldCheck,
  CreditCard,
  BadgeCheck,
  UserCheck,
} from 'lucide-react';
import { clientData } from '@/config/clientData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-6 h-6 text-sky-600" />,
  Clock: <Clock className="w-6 h-6 text-indigo-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  CreditCard: <CreditCard className="w-6 h-6 text-blue-600" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-cyan-600" />,
  UserCheck: <UserCheck className="w-6 h-6 text-violet-600" />,
};

export default function WhyChooseUs() {
  const { whyChooseUs, business } = clientData;

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Trusted Doorstep Service
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Why Choose {business.name}?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We prioritize customer satisfaction, authentic spare parts, and fast door-to-door response.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-xs">
                {iconMap[benefit.icon] || <ShieldCheck className="w-6 h-6 text-sky-600" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
