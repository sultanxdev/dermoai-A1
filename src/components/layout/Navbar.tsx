'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { clientData } from '@/config/clientData';

/* ─── Brand Palette ───────────────────────────────────────── */
const GREEN  = clientData.colors.primary;
const CREAM  = clientData.colors.background;
const RED    = clientData.colors.accent;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Treatment', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[94%] sm:w-[95%] max-w-7xl z-50 rounded-2xl transition-all duration-500 ${
        isScrolled
          ? 'py-2 sm:py-2.5 shadow-lg'
          : 'py-3 sm:py-3.5 shadow-md'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: `1px solid rgba(75, 98, 74, 0.08)`,
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-mono text-lg sm:text-xl font-bold tracking-tight"
              style={{ color: GREEN }}
            >
              {clientData.brand.logoText}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:bg-[#4B624A]/5"
                style={{ color: GREEN }}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-3 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{
                backgroundColor: GREEN,
                color: CREAM,
              }}
            >
              {clientData.hero.ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{ color: GREEN }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col items-center justify-center w-5 gap-[5px]">
              <span
                className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: GREEN }}
              />
              <span
                className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
                style={{ backgroundColor: GREEN }}
              />
              <span
                className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
                style={{ backgroundColor: GREEN }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1 border-t mt-2" style={{ borderColor: 'rgba(75,98,74,0.08)' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-base font-medium rounded-xl transition-colors"
                    style={{ color: GREEN }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-3 px-2"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]"
                  style={{ backgroundColor: GREEN, color: CREAM }}
                >
                  {clientData.hero.ctaText}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
