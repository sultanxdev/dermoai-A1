"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { clientData } from "@/config/clientData";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Floating WhatsApp Button
 * Visible on desktop bottom-right corner with pulse indicator
 */
export default function FloatingWhatsApp() {
  const { contact } = clientData;

  const handleClick = () => {
    trackWhatsAppClick("Floating Button");
  };

  const link = createWhatsAppLink(
    contact.whatsappNumber,
    DEFAULT_WHATSAPP_MESSAGE
  );

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
      title="Chat with technician on WhatsApp"
      aria-label="WhatsApp chat button"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full"></span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[11px] font-medium leading-none text-emerald-100">Quick Support</span>
        <span className="text-xs font-bold leading-tight">WhatsApp Us</span>
      </div>
    </a>
  );
}
