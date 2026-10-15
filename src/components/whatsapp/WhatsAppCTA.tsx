"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { clientData } from "@/config/clientData";
import { trackWhatsAppClick } from "@/lib/analytics";

interface WhatsAppCTAProps {
  message: string;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  location?: string;
}

export default function WhatsAppCTA({
  message,
  label = "Chat on WhatsApp",
  className = "",
  variant = "primary",
  size = "md",
  showIcon = true,
  location = "generic",
}: WhatsAppCTAProps) {
  const { colors, contact } = clientData;
  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const handleClick = () => {
    trackWhatsAppClick(location);
  };

  const link = createWhatsAppLink(contact.whatsappNumber, message);

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 py-3.5 text-base sm:text-lg gap-2.5",
  };

  const variantStyles = {
    primary: {
      backgroundColor: PRIMARY,
      color: BG,
      border: "none",
    },
    secondary: {
      backgroundColor: ACCENT,
      color: BG,
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: PRIMARY,
      border: `1px solid ${PRIMARY}33`,
    },
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={variantStyles[variant]}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm ${sizeClasses[size]} ${className}`}
      title="Start WhatsApp conversation"
      aria-label={label}
    >
      {showIcon && <MessageCircle size={size === "sm" ? 16 : size === "lg" ? 22 : 18} />}
      <span>{label}</span>
    </a>
  );
}
