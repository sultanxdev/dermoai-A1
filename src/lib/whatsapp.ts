import { clientData } from "@/config/clientData";

export interface ApplianceEnquiryData {
  name: string;
  phone: string;
  applianceType: string;
  problemDescription: string;
  locality?: string;
}

/**
 * Default prefilled message requested by client
 */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello, I need appliance repair service. Please contact me.";

/**
 * Create WhatsApp link with prefilled text
 */
export const createWhatsAppLink = (
  phone: string = clientData.contact.whatsappNumber,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate formatted WhatsApp message from doorstep enquiry form submission
 */
export const generateEnquiryWhatsAppMessage = (
  data: ApplianceEnquiryData
): string => {
  let message = `Hello, I need appliance repair service. Please contact me.\n\n`;
  message += `🛠️ *Service Request Details:*\n`;
  message += `• *Name:* ${data.name}\n`;
  message += `• *Phone:* ${data.phone}\n`;
  message += `• *Appliance:* ${data.applianceType}\n`;
  message += `• *Problem:* ${data.problemDescription}\n`;
  if (data.locality) {
    message += `• *Locality / Area:* ${data.locality}\n`;
  }
  message += `\nPlease let me know when the technician can visit.`;
  return message;
};

/**
 * Format phone number to clean international format for wa.me
 */
export const formatPhoneForWhatsApp = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return "91" + cleaned;
  }
  return cleaned;
};
