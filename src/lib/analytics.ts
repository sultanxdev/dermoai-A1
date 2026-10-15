/**
 * Analytics & Tracking Utilities
 * Tracks user interactions with Google Analytics
 */

/**
 * Send custom event to Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, string | number | boolean>
): void => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }
};

/**
 * Track appointment booking submission
 */
export const trackAppointmentSubmitted = (treatment: string): void => {
  trackEvent("appointment_submitted", {
    treatment,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track WhatsApp click
 */
export const trackWhatsAppClick = (treatment: string): void => {
  trackEvent("whatsapp_click", {
    treatment,
    source: "booking_form",
  });
};

/**
 * Track call click
 */
export const trackCallClick = (): void => {
  trackEvent("call_click", {
    source: "sticky_cta",
  });
};

/**
 * Track form view/impression
 */
export const trackFormImpression = (formName: string): void => {
  trackEvent("form_impression", {
    form_name: formName,
  });
};

/**
 * Track conversion (successful lead capture)
 */
export const trackConversion = (treatment: string): void => {
  trackEvent("lead_conversion", {
    treatment,
    value: 1,
  });
};
