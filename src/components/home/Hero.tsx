'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { clientData } from '@/config/clientData';

export default function Hero() {
  const reduce = useReducedMotion();
  const { brand, hero, colors } = clientData;
  const phone = clientData.contact?.phone;

  const GREEN = colors.primary;
  const CREAM = colors.background;
  const RED = colors.accent;

  const easeCubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCubic } },
  };

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24"
      style={{ backgroundColor: CREAM }}
    >
      {/* Soft background shapes */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: GREEN }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: RED }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04] blur-3xl"
        style={{ backgroundColor: GREEN }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left: words */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:col-span-6"
        >
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4 text-sm font-medium shadow-sm"
              style={{
                backgroundColor: 'rgba(75, 98, 74, 0.08)',
                color: GREEN,
                border: '1px solid rgba(75, 98, 74, 0.1)',
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                {!reduce && (
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ backgroundColor: RED }}
                  />
                )}
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: RED }}
                />
              </span>
              {hero.badge || `${brand.name} is welcoming new patients`}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]"
            style={{ color: GREEN }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
            style={{ color: `${GREEN}CC` }}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-xl px-8 py-4 text-center text-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{
                backgroundColor: GREEN,
                color: CREAM,
                outlineColor: GREEN,
              }}
            >
              {hero.ctaText}
            </a>

            {phone ? (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="group flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{ color: GREEN, outlineColor: GREEN }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl shadow-sm transition group-hover:scale-105"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid rgba(75, 98, 74, 0.1)',
                  }}
                >
                  {/* Phone icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </svg>
                </span>
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-sm" style={{ color: `${GREEN}99` }}>Prefer to talk?</span>
                  <span className="font-semibold">{phone}</span>
                </span>
              </a>
            ) : (
              <a
                href="#services"
                className="rounded-xl px-8 py-4 text-center text-lg font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                style={{
                  backgroundColor: 'white',
                  color: GREEN,
                  border: '1px solid rgba(75, 98, 74, 0.1)',
                  outlineColor: GREEN,
                }}
              >
                Explore treatments
              </a>
            )}
          </motion.div>

          {/* Social proof */}
          {(hero.rating || hero.patientCount) && (
            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <div className="leading-tight">
                {hero.rating && (
                  <div className="flex items-center gap-1.5">
                    <span className="flex" aria-hidden>
                      {[0, 1, 2, 3, 4].map((s) => (
                        <svg key={s} viewBox="0 0 20 20" className="h-4 w-4" fill={RED}>
                          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
                        </svg>
                      ))}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: GREEN }}>
                      {hero.rating}
                    </span>
                  </div>
                )}
                {hero.patientCount && (
                  <p className="text-sm" style={{ color: `${GREEN}99` }}>{hero.patientCount}</p>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none"
        >
          <div className="relative mx-auto w-[82%] max-w-[460px] lg:ml-auto lg:mr-6">
            {/* Offset outline */}
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.5rem] rounded-tl-[999px] border-2"
              style={{ borderColor: GREEN }}
            />
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[999px] shadow-2xl"
              style={{
                backgroundColor: 'white',
                boxShadow: `0 25px 60px -12px rgba(75, 98, 74, 0.25)`,
              }}
            >
              <img
                src={hero.imageUrl}
                alt={brand.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Handwritten-style note card */}
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.7, delay: 0.9, ease: easeCubic }}
              className="absolute -bottom-6 left-0 sm:left-2 max-w-[15rem] rounded-2xl bg-white p-4 shadow-xl"
              style={{ border: '1px solid rgba(75, 98, 74, 0.06)' }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${RED}15`, color: RED }}
                  aria-hidden
                >
                  {/* Heart icon */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold" style={{ color: GREEN }}>{hero.note?.title || 'You will be heard'}</p>
                  <p className="mt-0.5 text-sm leading-snug" style={{ color: `${GREEN}99` }}>
                    {hero.note?.text || 'Every visit starts with a real conversation.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}