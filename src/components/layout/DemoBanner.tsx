'use client';

import React, { useState } from 'react';
import { clientData } from '@/config/clientData';
import { X } from 'lucide-react';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!clientData.demo?.isDemo || !visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] text-white text-center text-sm py-2 px-4 flex items-center justify-center gap-3 shadow-lg bg-sky-900 border-b border-sky-700"
    >
      <span className="font-semibold text-sky-200">
        {clientData.demo.bannerText}
      </span>

      <button
        onClick={() => setVisible(false)}
        className="ml-auto p-1 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
