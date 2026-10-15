"use client";

import React from "react";
import { clientData } from "@/config/clientData";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function StickyCTA() {
  const { colors, contact, booking } = clientData;
  if (booking && booking.stickyCtaEnabled === false) return null;

  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const handleCall = () => {
    trackCallClick();
    window.location.href = `tel:${contact.phone.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick("Sticky WhatsApp");
    const message = `Hi ${clientData.brand.name}, I would like to book a consultation.`;
    const encodedMessage = encodeURIComponent(message);
    const phone = contact.whatsappNumber;
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  const handleBook = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 border-t backdrop-blur-md px-3 py-2.5 shadow-2xl"
      style={{
        backgroundColor: 'rgba(245, 246, 240, 0.96)',
        borderColor: `${PRIMARY}20`,
      }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* CALL */}
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95"
          style={{
            backgroundColor: `${PRIMARY}12`,
            color: PRIMARY,
          }}
          title="Call clinic"
        >
          <Phone size={16} />
          <span>Call</span>
        </button>

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95"
          style={{
            backgroundColor: PRIMARY,
            color: BG,
          }}
          title="Chat on WhatsApp"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>

        {/* BOOK APPOINTMENT */}
        <button
          onClick={handleBook}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95"
          style={{
            backgroundColor: ACCENT,
            color: BG,
          }}
          title="Book appointment"
        >
          <Calendar size={16} />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
}
