'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clientData } from '@/config/clientData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { colors, faqs } = clientData;

  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      <div id="faq" className="absolute -top-10 left-0" aria-hidden />
      {/* Decorative ambient washes */}
      <div
        aria-hidden
        className="absolute top-1/4 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: PRIMARY }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 -left-20 h-80 w-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-4"
            style={{
              backgroundColor: `${PRIMARY}10`,
              color: ACCENT,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            Common Questions
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ color: PRIMARY }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: `${PRIMARY}CC` }}
          >
            Everything you need to know about our treatments, booking, and doctor consultations.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${isOpen ? PRIMARY : `${PRIMARY}15`}`,
                  boxShadow: isOpen ? `0 10px 30px -10px ${PRIMARY}20` : '0 2px 8px -2px rgba(75,98,74,0.05)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-5 sm:px-7 sm:py-6 flex justify-between items-center text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base sm:text-lg font-semibold pr-4 leading-snug"
                    style={{ color: PRIMARY }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      backgroundColor: isOpen ? PRIMARY : `${PRIMARY}10`,
                      color: isOpen ? BG : PRIMARY,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div
                        className="px-5 pb-5 sm:px-7 sm:pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t"
                        style={{
                          color: `${PRIMARY}BF`,
                          borderColor: `${PRIMARY}0F`,
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm" style={{ color: `${PRIMARY}99` }}>
            Have a different question?{' '}
            <a
              href="#contact"
              className="font-semibold underline underline-offset-4 transition-colors"
              style={{ color: ACCENT }}
            >
              Ask our doctor directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
