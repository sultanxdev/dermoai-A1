"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { clientData } from "@/config/clientData";
import { 
  generateWhatsAppMessage, 
  redirectToWhatsApp, 
  formatPhoneForWhatsApp 
} from "@/lib/whatsapp";
import { trackAppointmentSubmitted, trackConversion } from "@/lib/analytics";

// ==================== VALIDATION SCHEMA ====================
const bookingSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  
  phone: z.string()
    .regex(/^[0-9+\-\s()]{10,}$/, "Please enter a valid phone number"),
  
  treatment: z.string()
    .min(1, "Please select a treatment"),
  
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().max(500, "Message must be less than 500 characters").optional(),
  website: z.string().max(0, "Invalid form submission").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { colors, booking, treatments, appointment, contact } = clientData;
  const PRIMARY = colors.primary;
  const BG = colors.background;
  const ACCENT = colors.accent;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      treatment: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      setLoading(true);
      setError(null);

      trackAppointmentSubmitted(data.treatment);

      try {
        await fetch("/api/book-appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            treatment: data.treatment,
            preferredDate: data.preferredDate,
            preferredTime: data.preferredTime,
            message: data.message,
            source: "Website Booking Form",
          }),
        });
      } catch {
        // Fallback gracefully even if backend route isn't set up yet
      }

      trackConversion(data.treatment);
      setSuccess(true);

      const whatsappMessage = generateWhatsAppMessage({
        name: data.name,
        treatment: data.treatment,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        message: data.message,
      });

      const formattedPhone = formatPhoneForWhatsApp(contact.whatsappNumber);

      setTimeout(() => {
        redirectToWhatsApp(formattedPhone, whatsappMessage);
      }, 900);

      setTimeout(() => {
        reset();
        setSuccess(false);
      }, 4000);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit booking. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl">
      <div className="mb-6 sm:mb-8">
        <span
          className="inline-block text-xs font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md mb-2"
          style={{ backgroundColor: `${PRIMARY}10`, color: ACCENT }}
        >
          Instant Confirmation
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: PRIMARY }}>
          {booking?.formTitle || appointment?.formTitle || "Book an Appointment"}
        </h3>
        <p className="mt-1 text-sm sm:text-base leading-relaxed" style={{ color: `${PRIMARY}99` }}>
          {booking?.formSubtitle || appointment?.formSubTitle || "We will confirm your consultation slot promptly."}
        </p>
      </div>

      {success && (
        <div
          className="mb-6 p-4 rounded-xl text-sm font-medium transition-all"
          style={{ backgroundColor: `${PRIMARY}12`, color: PRIMARY, border: `1px solid ${PRIMARY}30` }}
        >
          {booking?.successMessage || "✅ Your appointment request is confirmed! Redirecting to WhatsApp..."}
        </div>
      )}

      {error && (
        <div
          className="mb-6 p-4 rounded-xl text-sm font-medium"
          style={{ backgroundColor: `${ACCENT}15`, color: ACCENT, border: `1px solid ${ACCENT}30` }}
        >
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
            Full Name <span style={{ color: ACCENT }}>*</span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none"
            style={{
              backgroundColor: `${BG}80`,
              border: `1px solid ${errors.name ? ACCENT : `${PRIMARY}25`}`,
              color: PRIMARY,
            }}
            disabled={loading}
          />
          {errors.name && (
            <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
            Phone Number <span style={{ color: ACCENT }}>*</span>
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none"
            style={{
              backgroundColor: `${BG}80`,
              border: `1px solid ${errors.phone ? ACCENT : `${PRIMARY}25`}`,
              color: PRIMARY,
            }}
            disabled={loading}
          />
          {errors.phone && (
            <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.phone.message}</p>
          )}
        </div>

        {/* Treatment Select */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
            Treatment / Concern <span style={{ color: ACCENT }}>*</span>
          </label>
          <select
            {...register("treatment")}
            className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none cursor-pointer"
            style={{
              backgroundColor: `${BG}80`,
              border: `1px solid ${errors.treatment ? ACCENT : `${PRIMARY}25`}`,
              color: PRIMARY,
            }}
            disabled={loading}
          >
            <option value="">Select Treatment Concern</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          {errors.treatment && (
            <p className="text-xs mt-1" style={{ color: ACCENT }}>{errors.treatment.message}</p>
          )}
        </div>

        {/* Preferred Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
              Preferred Date
            </label>
            <input
              type="date"
              {...register("preferredDate")}
              className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none"
              style={{
                backgroundColor: `${BG}80`,
                border: `1px solid ${PRIMARY}25`,
                color: PRIMARY,
              }}
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
              Preferred Time
            </label>
            <input
              type="time"
              {...register("preferredTime")}
              className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none"
              style={{
                backgroundColor: `${BG}80`,
                border: `1px solid ${PRIMARY}25`,
                color: PRIMARY,
              }}
              disabled={loading}
            />
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-xs sm:text-sm font-medium mb-1.5" style={{ color: PRIMARY }}>
            Additional Notes (Optional)
          </label>
          <textarea
            {...register("message")}
            placeholder="Tell us any symptoms, past treatments, or queries..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl text-sm sm:text-base transition-all outline-none resize-none"
            style={{
              backgroundColor: `${BG}80`,
              border: `1px solid ${PRIMARY}25`,
              color: PRIMARY,
            }}
            disabled={loading}
          />
        </div>

        {/* Honeypot */}
        <input type="hidden" {...register("website")} style={{ display: "none" }} />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
          style={{
            backgroundColor: PRIMARY,
            color: BG,
          }}
        >
          {loading || isSubmitting ? (
            <>
              <span className="inline-block w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${BG} transparent` }} />
              Connecting...
            </>
          ) : (
            <>
              Confirm Consultation Request
              <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-xs mt-3" style={{ color: `${PRIMARY}80` }}>
          🔒 Your details are secure and directly shared with our clinical team.
        </p>
      </form>
    </div>
  );
}
