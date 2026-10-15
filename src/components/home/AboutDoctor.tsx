'use client';

import React from 'react';
import { motion, useReducedMotion, type Easing } from 'framer-motion';
import { clientData } from '@/config/clientData';

/* ─── Brand Palette ───────────────────────────────────────── */
const GREEN  = clientData.colors.primary;
const CREAM  = clientData.colors.background;
const RED    = clientData.colors.accent;

const EASE: Easing = [0.22, 1, 0.36, 1];

export default function AboutDoctor() {
  const reduce = useReducedMotion();
  const { heading, credentials, bioParagraphs, ctaText, imageUrl, name, role, highlights } =
    clientData.aboutDoctor;

  const credentialList = Array.isArray(credentials)
    ? credentials
    : credentials
      ? [credentials]
      : [];
  const [lead, ...rest] = bioParagraphs;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' as const },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32" style={{ backgroundColor: CREAM }}>
      {/* Soft wash behind the portrait */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 h-[34rem] w-[34rem] -translate-x-1/3 -translate-y-1/2 rounded-full opacity-[0.06] blur-3xl"
        style={{ backgroundColor: GREEN }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Portrait */}
        <motion.div {...reveal()} className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="relative mx-auto w-[88%] max-w-[440px] lg:ml-0 lg:mr-auto">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2.5rem] rounded-tl-[999px] border-2"
              style={{ borderColor: GREEN }}
            />
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tl-[999px] shadow-2xl"
              style={{ boxShadow: `0 25px 60px -12px rgba(75, 98, 74, 0.25)` }}
            >
              <img
                src={imageUrl}
                alt={name ? `Portrait of ${name}` : 'Portrait of the doctor'}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {(name || role) && (
              <div
                className="absolute -bottom-6 right-2 sm:right-4 max-w-[16rem] rounded-2xl bg-white px-5 py-4 shadow-xl"
                style={{ border: '1px solid rgba(75, 98, 74, 0.06)' }}
              >
                {name && <p className="font-serif text-lg font-bold" style={{ color: GREEN }}>{name}</p>}
                {role && <p className="text-sm" style={{ color: `${GREEN}99` }}>{role}</p>}
              </div>
            )}
          </div>
        </motion.div>

        {/* Story */}
        <div className="flex flex-col lg:col-span-7 lg:pl-8">
          <motion.div {...reveal(0.05)}>
            <span
              className="inline-block rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{ backgroundColor: `${GREEN}10`, color: GREEN }}
            >
              About the Doctor
            </span>
          </motion.div>

          <motion.h2
            {...reveal(0.08)}
            className="mt-4 font-serif text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: GREEN }}
          >
            {heading}
          </motion.h2>

          {credentialList.length > 0 && (
            <motion.ul {...reveal(0.12)} className="mt-5 flex flex-wrap gap-2.5">
              {credentialList.map((c) => (
                <li
                  key={c}
                  className="rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{ backgroundColor: `${GREEN}10`, color: GREEN }}
                >
                  {c}
                </li>
              ))}
            </motion.ul>
          )}

          <motion.p
            {...reveal(0.15)}
            className="mt-8 max-w-xl font-serif text-lg leading-relaxed sm:text-xl md:text-2xl md:leading-relaxed"
            style={{ color: GREEN }}
          >
            {lead}
          </motion.p>

          <motion.div {...reveal(0.2)} className="mt-6 max-w-xl space-y-5 text-base leading-relaxed sm:text-lg" style={{ color: `${GREEN}CC` }}>
            {rest.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {highlights && highlights.length > 0 && (
            <motion.dl
              {...reveal(0.25)}
              className="mt-10 grid max-w-xl grid-cols-3 divide-x py-5 border-y"
              style={{ borderColor: `${GREEN}25` }}
            >
              {highlights.slice(0, 3).map((h) => (
                <div key={h.label} className="px-4 first:pl-0" style={{ borderColor: `${GREEN}25` }}>
                  <dd className="font-serif text-2xl font-bold sm:text-3xl" style={{ color: RED }}>
                    {h.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug sm:text-sm" style={{ color: `${GREEN}99` }}>{h.label}</dt>
                </div>
              ))}
            </motion.dl>
          )}

          <motion.div {...reveal(0.3)} className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#contact"
              className="w-fit rounded-xl px-9 py-4 text-base font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{
                backgroundColor: GREEN,
                color: CREAM,
                outlineColor: GREEN,
              }}
            >
              {ctaText}
            </a>
            {name && (
              <p className="font-serif text-lg italic sm:text-xl" style={{ color: `${GREEN}80` }}>{name}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}