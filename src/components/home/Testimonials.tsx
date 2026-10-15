'use client';

import React from 'react';
import { motion, useReducedMotion, type Easing } from 'framer-motion';
import { clientData } from '@/config/clientData';

/* ─── Brand Palette ───────────────────────────────────────── */
const GREEN  = clientData.colors.primary;
const CREAM  = clientData.colors.background;
const RED    = clientData.colors.accent;

const EASE: Easing = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const reduce = useReducedMotion();
  const items = clientData.testimonials;
  const average = items.length
    ? items.reduce((sum, t) => sum + t.rating, 0) / items.length
    : 0;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      style={{ backgroundColor: GREEN }}
    >
      {/* Soft glow background shapes */}
      <div
        aria-hidden
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: GREEN }}
      />
      <div
        aria-hidden
        className="absolute -left-48 bottom-0 h-72 w-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: RED }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase mb-4"
              style={{ backgroundColor: 'rgba(245, 246, 240, 0.15)', color: CREAM }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RED }} />
              Patient Stories
            </span>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
              style={{ color: CREAM }}
            >
              What our patients say
            </h2>

            {items.length > 0 && (
              <div className="mt-4 flex items-center justify-center gap-3" style={{ color: `${CREAM}CC` }}>
                <span className="flex" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 sm:h-5 sm:w-5" fill={RED}>
                      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                    </svg>
                  ))}
                </span>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold" style={{ color: CREAM }}>{average.toFixed(1)}</span> out of 5 across {items.length} verified reviews
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Responsive Grid: Zero Horizontal Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: reduce ? 0 : index * 0.12, ease: EASE }}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                backgroundColor: CREAM,
                boxShadow: `0 20px 40px -12px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <div>
                {/* Quote Mark */}
                <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 sm:h-9 sm:w-9" aria-hidden>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill={GREEN} opacity="0.18" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill={GREEN} opacity="0.18" />
                </svg>

                {/* Stars */}
                <div className="mb-4 flex gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 sm:h-5 sm:w-5" fill={RED}>
                      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: GREEN }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author & Source */}
              <div className="mt-6 pt-5 border-t flex items-center justify-between" style={{ borderColor: `${GREEN}18` }}>
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-sm"
                    style={{ backgroundColor: `${GREEN}15`, color: GREEN }}
                  >
                    {testimonial.name.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-base font-bold leading-tight" style={{ color: GREEN }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: `${GREEN}80` }}>
                      Verified Patient
                    </p>
                  </div>
                </div>

                {testimonial.source && (
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${GREEN}10`, color: GREEN }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RED }} />
                    {testimonial.source}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}