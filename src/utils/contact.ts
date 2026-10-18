import { SLIJPMAAT_INFO } from '../data/siteData';

const whatsappNumber = SLIJPMAAT_INFO.whatsappNumber.replace(/\D/g, '');

export const createWhatsAppUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
