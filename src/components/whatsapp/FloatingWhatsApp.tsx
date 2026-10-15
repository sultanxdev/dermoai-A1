"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { clientData } from "@/config/clientData";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Floating WhatsApp Button
 * Visible on desktop bottom-right corner
 */
export default function FloatingWhatsApp() {
  const { colors, contact } = clientData;
  const PRIMARY = colors.primary;
  const BG = colors.background;

  const handleClick = () => {
    trackWhatsAppClick("Floating Button");
  };

  const link = createWhatsAppLink(
    contact.whatsappNumber,
    whatsappMessages.general
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      style={{
        backgroundColor: PRIMARY,
        color: BG,
        boxShadow: `0 10px 25px -5px ${PRIMARY}40`,
      }}
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp chat button"
    >
      <MessageCircle size={26} />
    </a>
  );
}
