'use client';

import React, { useEffect } from 'react';
import { clientData } from '@/config/clientData';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Apply configuration colors to CSS Variables dynamically
    // This allows the entire site theme to change just by modifying clientData.colors
    const root = document.documentElement;
    const { colors } = clientData;

    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--primaryHover', colors.primaryHover);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--background', colors.background);
    root.style.setProperty('--textMain', colors.textMain);
    root.style.setProperty('--textMuted', colors.textMuted);
  }, []);

  return <>{children}</>;
}
