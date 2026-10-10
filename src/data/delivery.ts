export const FREE_DELIVERY_THRESHOLD_CENTS = 3500;

export const ZONE_ALWAYS_FREE = ['3513', '3514', '3515', '3552', '3561', '3571'] as const;

export const ZONE_STANDARD = [
  '3511', '3512', '3531', '3532', '3533', '3534',
  '3551', '3553', '3554', '3562', '3563', '3564', '3566',
  '3572', '3573', '3581', '3582', '3583'
] as const;

export const ZONE_OUTER = [
  '3521', '3522', '3523', '3524', '3525', '3526', '3527', '3528',
  '3541', '3542', '3543', '3544', '3545', '3555', '3565',
  '3584', '3585'
] as const;

export const DELIVERY_FEES_CENTS = {
  standard: 450,
  outer: 725,
} as const;

export type DeliveryZone = 'always-free' | 'standard' | 'outer' | 'outside';

export const getDeliveryZone = (postcodePrefix: string): DeliveryZone => {
  if ((ZONE_ALWAYS_FREE as readonly string[]).includes(postcodePrefix)) return 'always-free';
  if ((ZONE_STANDARD as readonly string[]).includes(postcodePrefix)) return 'standard';
  if ((ZONE_OUTER as readonly string[]).includes(postcodePrefix)) return 'outer';
  return 'outside';
};

export const getDeliveryFeeCents = (
  postcodePrefix: string,
  orderValueCents: number,
  selfDropoff: boolean,
): number | null => {
  if (selfDropoff) return 0;

  const zone = getDeliveryZone(postcodePrefix);
  if (zone === 'outside') return null;
  if (zone === 'always-free' || orderValueCents >= FREE_DELIVERY_THRESHOLD_CENTS) return 0;
  return zone === 'standard' ? DELIVERY_FEES_CENTS.standard : DELIVERY_FEES_CENTS.outer;
};
