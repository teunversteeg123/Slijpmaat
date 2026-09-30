export type PageId =
  | 'home'
  | 'particulieren'
  | 'horeca'
  | 'diensten'
  | 'dienst-keukenmessen'
  | 'dienst-japanse-messen'
  | 'dienst-chips-herstellen'
  | 'dienst-wel-niet'
  | 'werkwijze'
  | 'prijzen-bestellen'
  | 'ophalen-bezorgen'
  | 'buiten-utrecht'
  | 'kennisbank'
  | 'artikel'
  | 'over-ons'
  | 'reviews'
  | 'faq'
  | 'contact'
  | 'algemene-voorwaarden'
  | 'privacy';

export interface KnifeOrderState {
  customerType: 'particulier' | 'zakelijk';
  smallKnives: number;    // <15cm (€6.50)
  normalKnives: number;   // 15-20cm (€8.50)
  largeKnives: number;    // 20-25cm (€10.50)
  extraLargeKnives: number; // >25cm (op aanvraag)
  isStudent: boolean;     // €5 per mes (excl. XL)
  hasChipRepair: number;  // €2.50 per mes
  hasProfileRepair: number; // €8.50 per mes
  deliveryOption: 'pickup' | 'dropoff'; // pickup in Utrecht or dropoff on appointment
  postcode: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Slijpen & scherpte' | 'Onderhoud van messen' | 'Messoorten & staal' | 'Veilig gebruik' | 'Werkwijze van Slijpmaat';
  readTime: string;
  date: string;
  summary: string;
  content: {
    lead: string;
    toc: string[];
    sections: {
      heading: string;
      body: string;
      tips?: string[];
    }[];
    takeaways: string[];
  };
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  knivesSharpened?: string;
  type: 'particulier' | 'horeca';
}
