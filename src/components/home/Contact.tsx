'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants, type Easing } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { clientData } from '@/config/clientData';
import BookingForm from '@/components/booking/BookingForm';

const EASE: Easing = [0.22, 1, 0.36, 1];

type Row = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  action?: string;
  external?: boolean;
};

export default function Contact() {
  const reduce = useReducedMotion();
  const { colors, contact } = clientData;

  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const mapUrl =
    (contact as { mapUrl?: string }).mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

  const rows: Row[] = [
    {
      icon: Phone,
      label: 'Call us directly',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
      action: 'Call now',
    },
    {
      icon: MapPin,
      label: 'Visit the clinic',
      value: contact.address,
      href: mapUrl,
      action: 'Get directions',
      external: true,
    },
    {
      icon: Clock,
      label: 'Consultation hours',
      value: contact.workingHours || 'Mon – Sat: 10:00 AM – 7:00 PM',
    },
    {
      icon: Mail,
      label: 'Email inquiry',
      value: contact.email,
      href: `mailto:${contact.email}`,
      action: 'Write to us',
    },
  ];

  const list: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.1 } },
  };
  const row: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: BG }}
    >
      {/* Decorative ambient background */}
      <div
        aria-hidden
        className="absolute top-1/2 -left-24 h-96 w-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: PRIMARY }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: ACCENT }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Left: Contact Info */}
          <motion.div
            variants={list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 lg:pt-4"
          >
            <motion.div variants={row}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-mono font-medium tracking-wider uppercase mb-4"
                style={{
                  backgroundColor: `${PRIMARY}10`,
                  color: ACCENT,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={row}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight"
              style={{ color: PRIMARY }}
            >
              Let&rsquo;s talk about your skin
            </motion.h2>

            <motion.p
              variants={row}
              className="mt-4 text-base sm:text-lg leading-relaxed max-w-md"
              style={{ color: `${PRIMARY}CC` }}
            >
              Tell us what is bothering you, whether it is medical or cosmetic. Our team will guide you
              to the right doctor consultation.
            </motion.p>

            <ul className="mt-8 sm:mt-10 divide-y border-y" style={{ borderColor: `${PRIMARY}15` }}>
              {rows.map(({ icon: Icon, label, value, href, action, external }) => (
                <motion.li
                  key={label}
                  variants={row}
                  className="flex items-start gap-4 py-4 sm:py-5"
                  style={{ borderColor: `${PRIMARY}15` }}
                >
                  <span
                    className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm"
                    style={{
                      backgroundColor: 'white',
                      color: PRIMARY,
                      border: `1px solid ${PRIMARY}15`,
                    }}
                    aria-hidden
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium" style={{ color: `${PRIMARY}80` }}>
                      {label}
                    </p>
                    <p
                      className="mt-0.5 whitespace-pre-line break-words text-base sm:text-lg font-medium leading-snug"
                      style={{ color: PRIMARY }}
                    >
                      {value}
                    </p>
                    {href && action && (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="mt-1.5 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{ color: ACCENT }}
                      >
                        {action}
                        <ArrowUpRight size={14} aria-hidden />
                      </a>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="lg:col-span-7"
          >
            <div
              className="rounded-3xl p-1 sm:p-2 shadow-2xl transition-all"
              style={{
                backgroundColor: 'white',
                border: `1px solid ${PRIMARY}15`,
                boxShadow: `0 20px 40px -15px ${PRIMARY}18`,
              }}
            >
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}