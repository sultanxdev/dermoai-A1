'use client';

import React from 'react';
import {
  ThermometerSnowflake,
  Droplets,
  Snowflake,
  Volume2,
  Flame,
  Zap,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { clientData } from '@/config/clientData';
import { createWhatsAppLink } from '@/lib/whatsapp';

const iconMap: Record<string, React.ReactNode> = {
  ThermometerSnowflake: <ThermometerSnowflake className="w-6 h-6 text-sky-600" />,
  Droplets: <Droplets className="w-6 h-6 text-blue-600" />,
  Snowflake: <Snowflake className="w-6 h-6 text-cyan-600" />,
  Volume2: <Volume2 className="w-6 h-6 text-amber-600" />,
  Flame: <Flame className="w-6 h-6 text-orange-600" />,
  Zap: <Zap className="w-6 h-6 text-rose-600" />,
};

export default function ProblemsSection() {
  const { commonProblems, contact } = clientData;

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Quick Diagnostic Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Common Refrigerator Problems We Fix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Is your appliance showing any of these symptoms? Our technician diagnoses and fixes them right at your doorstep.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonProblems.map((problem) => {
            const problemWaLink = createWhatsAppLink(
              contact.whatsappNumber,
              `Hello, my refrigerator has this problem: "${problem.title}". Please send a technician for inspection.`
            );

            return (
              <div
                key={problem.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-200 flex items-center justify-center mb-4 transition-colors">
                    {iconMap[problem.icon] || <ThermometerSnowflake className="w-6 h-6 text-sky-600" />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {problem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <a
                    href={problemWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>WhatsApp For Fix</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                  >
                    <span>Book Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
