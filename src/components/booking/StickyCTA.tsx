"use client";

import React from "react";
import { clientData } from "@/config/clientData";
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function StickyCTA() {
  const { contact } = clientData;

  const handleCall = () => {
    trackCallClick();
    window.location.href = `tel:${contact.phone.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick("Sticky Bar");
    const waUrl = createWhatsAppLink(
      contact.whatsappNumber,
      clientData.whatsapp.defaultMessage
    );
    window.open(waUrl, "_blank");
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
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* CALL NOW */}
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm bg-sky-600 active:bg-sky-700 text-white shadow-sm transition-transform active:scale-95"
          title="Call Technician"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>Call Now</span>
        </button>

        {/* WHATSAPP */}
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 active:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </button>

        {/* BOOK VISIT */}
        <button
          onClick={handleBook}
          className="flex-none flex items-center justify-center gap-1 py-3 px-3 rounded-xl font-semibold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
          title="Book Doorstep Visit"
        >
          <Calendar className="w-4 h-4 text-slate-600" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
}
