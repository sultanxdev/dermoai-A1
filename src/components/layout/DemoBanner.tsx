'use client';

import React from 'react';
import { clientData } from '@/config/clientData';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!clientData.demo.isDemo || !visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] text-white text-center text-sm py-2.5 px-4 flex items-center justify-center gap-3 shadow-lg"
      style={{
        background: 'linear-gradient(90deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        borderBottom: '1px solid rgba(212,175,55,0.3)',
      }}
    >
      {/* Animated shimmer */}
      <span
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
          animation: 'shimmer 2.5s infinite',
          backgroundSize: '200% 100%',
        }}
      />

      <span className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
        <span className="font-semibold text-yellow-300">{clientData.demo.bannerText}</span>
        {clientData.demo.bannerSubText && (
          <span className="text-white/70 text-xs">{clientData.demo.bannerSubText}</span>
        )}
      </span>

      <button
        onClick={() => setVisible(false)}
        className="relative ml-auto p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}
