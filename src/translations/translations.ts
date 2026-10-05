export type Language = 'nl' | 'en';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  nl: {
    // Top Bar
    'topbar.free_pickup': 'Gratis ophalen & bezorgen in Utrecht',
    'topbar.min_knives': 'vanaf 3 messen',
    'topbar.service_area': 'Servicegebied Utrecht',
    'topbar.outside_utrecht': 'Buiten Utrecht?',
    'topbar.whatsapp': 'WhatsApp je Maat',

    // Navigation
    'nav.home': 'Home',
    'nav.onze_maten': 'Onze Maten',
    'nav.over_ons': 'Over ons',
    'nav.werkwijze': 'Werkwijze',
    'nav.kennisbank': 'Kennisbank',
    'nav.prijzen': 'Prijzen',
    'nav.particulier': 'Particulier',
    'nav.particulier_sub': 'Naar de prijs- en bestelcalculator',
    'nav.zakelijk': 'Zakelijk',
    'nav.zakelijk_sub': 'Naar de zakelijke aanvraag',
    'nav.plan_button': 'Plan je slijpbeurt',

    // Common CTAs
    'cta.plan': 'Plan mijn slijpbeurt',
    'cta.whatsapp': 'Stel een vraag via WhatsApp',
    'cta.whatsapp_short': 'Stuur een appje',
    'cta.call': 'Bel je Maat',
    'cta.reviews': 'Bekijk reviews',
    'cta.back': 'Terug',

    // Trust bar
    'trust.reviews': 'reviews · 5,0',
    'trust.delivery': 'Binnen 24–48 uur retour',
    'trust.craft': '100% handmatig geslepen',

    // Language Toggle
    'lang.nl': 'NL',
    'lang.en': 'EN',
    'lang.switch': 'Wissel naar Engels',
  },
  en: {
    // Top Bar
    'topbar.free_pickup': 'Free pickup & delivery in Utrecht',
    'topbar.min_knives': 'from 3 knives',
    'topbar.service_area': 'Service area Utrecht',
    'topbar.outside_utrecht': 'Outside Utrecht?',
    'topbar.whatsapp': 'WhatsApp your Mate',

    // Navigation
    'nav.home': 'Home',
    'nav.onze_maten': 'Our Mates',
    'nav.over_ons': 'About us',
    'nav.werkwijze': 'How it works',
    'nav.kennisbank': 'Knowledge base',
    'nav.prijzen': 'Pricing',
    'nav.particulier': 'Residential',
    'nav.particulier_sub': 'Price & order calculator',
    'nav.zakelijk': 'Commercial',
    'nav.zakelijk_sub': 'For restaurants & businesses',
    'nav.plan_button': 'Book sharpening',

    // Common CTAs
    'cta.plan': 'Book my sharpening',
    'cta.whatsapp': 'Ask a question on WhatsApp',
    'cta.whatsapp_short': 'Send WhatsApp',
    'cta.call': 'Call your Mate',
    'cta.reviews': 'View reviews',
    'cta.back': 'Back',

    // Trust bar
    'trust.reviews': 'reviews · 5.0',
    'trust.delivery': 'Returned within 24–48 hrs',
    'trust.craft': '100% hand-sharpened',

    // Language Toggle
    'lang.nl': 'NL',
    'lang.en': 'EN',
    'lang.switch': 'Switch to Dutch',
  },
};
