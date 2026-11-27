export const BLACK_FRIDAY_START = Date.parse('2026-11-27T00:00:00+01:00');
export const BLACK_FRIDAY_END = Date.parse('2026-11-30T00:00:00+01:00');
export const BLACK_FRIDAY_PERCENT = 10;
export const BLACK_FRIDAY_OFFER = '10% korting op je hele bestelling';
export const BLACK_FRIDAY_DATES = '27 t/m 29 november';
export const BLACK_FRIDAY_QUOTE_REQUEST = 'Black Friday: graag 10% korting verrekenen op het hele voorstel.';

export const getBlackFridayDiscountCents = (totalCents: number, active: boolean) =>
  active
    ? Math.round(totalCents * BLACK_FRIDAY_PERCENT / 100)
    : 0;

export const getBlackFridayPriceCents = (priceCents: number) =>
  Math.round(priceCents * (100 - BLACK_FRIDAY_PERCENT) / 100);
