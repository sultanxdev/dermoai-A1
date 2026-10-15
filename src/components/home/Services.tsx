'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants, type Easing } from 'framer-motion';
import { Stethoscope, Sparkles, Zap, Droplets, type LucideIcon } from 'lucide-react';
import { clientData } from '@/config/clientData';
import WhatsAppCTA from '@/components/whatsapp/WhatsAppCTA';
import { getTreatmentMessage } from '@/lib/whatsapp';

/* ─── Brand Palette ───────────────────────────────────────── */
const GREEN  = clientData.colors.primary;
const CREAM  = clientData.colors.background;
const RED    = clientData.colors.accent;

// Map icon strings from config to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Sparkles,
  Zap,
  Droplets,
};

const EASE: Easing = [0.22, 1, 0.36, 1];

export default function Services() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      style={{ backgroundColor: 'white' }}
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden
        className="absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/3 translate-x-1/3 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: GREEN }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: a friendly introduction */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:sticky lg:top-32 lg:col-span-4"
          >
            <span
              className="inline-block rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: `${GREEN}10`, color: GREEN }}
            >
              Our Services
            </span>
            <h2
              className="mt-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: GREEN }}
            >
              Skin treatments, explained in plain words
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: `${GREEN}99` }}>
              Every skin is different. We look at yours first, then suggest only what it needs,
              with medical expertise behind every step.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="#contact"
                className="w-fit rounded-xl px-8 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{
                  backgroundColor: GREEN,
                  color: CREAM,
                  outlineColor: GREEN,
                }}
              >
                Book a consultation
              </a>
              <p className="max-w-xs text-sm leading-relaxed" style={{ color: `${GREEN}80` }}>
                Not sure which treatment fits? Tell us your concern and we will point you in
                the right direction.
              </p>
            </div>
          </motion.div>

          {/* Right: treatments */}
          <motion.div
            className="grid grid-cols-1 gap-5 pb-12 sm:grid-cols-2 lg:col-span-8 sm:gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {clientData.services.map((service) => {
              const Icon = iconMap[service.icon] ?? Sparkles;
              return (
                <div key={service.id} className="sm:even:translate-y-10">
                  <motion.article
                    variants={item}
                    className="group flex h-full flex-col rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl sm:rounded-3xl"
                    style={{
                      backgroundColor: CREAM,
                      border: '1px solid rgba(75, 98, 74, 0.06)',
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE } }}
                  >
                    <span
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl"
                      style={{
                        backgroundColor: `${GREEN}10`,
                        color: GREEN,
                      }}
                      aria-hidden
                    >
                      <Icon size={24} strokeWidth={1.75} className="sm:hidden" />
                      <Icon size={28} strokeWidth={1.75} className="hidden sm:block" />
                    </span>

                    <h3
                      className="font-serif text-xl font-bold leading-tight sm:text-2xl"
                      style={{ color: GREEN }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed sm:mt-3 sm:text-base" style={{ color: `${GREEN}99` }}>
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-col gap-3 border-t pt-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-5" style={{ borderColor: `${GREEN}10` }}>
                      <WhatsAppCTA
                        message={getTreatmentMessage(service.id)}
                        label="Ask about this"
                        variant="outline"
                        size="sm"
                        showIcon={true}
                        location={`service_card_${service.id}`}
                        className={`flex-1 !border-[${GREEN}]/30 !text-[${GREEN}] hover:!bg-[${GREEN}]/5`}
                      />
                      <a
                        href="#contact"
                        className="whitespace-nowrap text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                        style={{ color: RED, outlineColor: GREEN }}
                      >
                        Know more →
                      </a>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}