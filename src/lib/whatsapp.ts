/**
 * WhatsApp Integration Utilities
 * Handles WhatsApp message generation and redirect flows
 */

export interface WhatsAppBookingData {
  name: string;
  treatment: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}

/**
 * Message templates for different contact scenarios
 */
export const whatsappMessages = {
  // General inquiry
  general: "Hi Doctor, I want to know more about your services.",
  
  // Treatment-specific (add more as needed)
  treatments: {
    acne: "Hi Doctor, I'm interested in acne treatment. Can you tell me more?",
    pigmentation: "Hi Doctor, I want to consult about pigmentation treatment.",
    "anti-age": "Hi Doctor, I'm interested in anti-aging services.",
    "skin-booster": "Hi Doctor, Tell me more about skin booster treatments.",
    "chemical-peels": "Hi Doctor, I want to know about chemical peels.",
    "laser-hair": "Hi Doctor, I'm interested in laser hair reduction.",
    "hair-fall": "Hi Doctor, I want consultation for hair fall treatment.",
    consultation: "Hi Doctor, I want to book a consultation.",
  },
  
  // FAQ inquiry
  faq: "Hi Doctor, I have a question about your services.",
  
  // Post-booking
  booking: "Hi Doctor, I just submitted a booking request.",
};

/**
 * Create WhatsApp link with message
 */
export const createWhatsAppLink = (
  phone: string,
  message: string
): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Get message for specific treatment
 */
export const getTreatmentMessage = (treatmentId: string): string => {
  return (
    whatsappMessages.treatments[treatmentId as keyof typeof whatsappMessages.treatments] ||
    whatsappMessages.general
  );
};

/**
 * Generate WhatsApp message from booking data
 */
export const generateWhatsAppMessage = (data: WhatsAppBookingData): string => {
  let message = `Hi Doctor, I would like to book an appointment.\n\n`;
  
  message += `📋 *Details:*\n`;
  message += `Name: ${data.name}\n`;
  message += `Treatment: ${data.treatment}\n`;
  
  if (data.preferredDate) {
    message += `Preferred Date: ${data.preferredDate}\n`;
  }
  
  if (data.preferredTime) {
    message += `Preferred Time: ${data.preferredTime}\n`;
  }
  
  if (data.message) {
    message += `\nAdditional Info:\n${data.message}\n`;
  }
  
  message += `\nThank you!`;
  
  return message;
};

/**
 * Redirect to WhatsApp with pre-filled message
 */
export const redirectToWhatsApp = (
  phoneNumber: string,
  message: string
): void => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank");
};

/**
 * Format phone number to WhatsApp format (country code + number, no symbols)
 */
export const formatPhoneForWhatsApp = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");
  
  // If standard 10-digit mobile number, prepend Indian country code 91
  if (cleaned.length === 10) {
    return "91" + cleaned;
  }
  
  return cleaned;
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10;
};

