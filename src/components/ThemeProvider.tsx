'use client';

import React, { useEffect } from 'react';
import { clientData } from '@/config/clientData';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply configuration colors to CSS Variables dynamically
    const root = document.documentElement;
    const { colors } = clientData;

    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primaryHover', colors.primaryHover);
    root.style.setProperty('--navy', colors.navy);
    root.style.setProperty('--navyLight', colors.navyLight);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--accentHover', colors.accentHover);
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--surface', colors.surface);
    root.style.setProperty('--textMain', colors.textMain);
    root.style.setProperty('--textMuted', colors.textMuted);
    root.style.setProperty('--iceBlue', colors.iceBlue);
  }, []);

  return <>{children}</>;
}
