// Accept formatted Dutch and international numbers, but reject text/implausible lengths.
export const isValidContactPhone = (value: string) => {
  const phone = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15 || /^(\d)\1+$/.test(digits)) return false;
  if (digits.startsWith('0') && !digits.startsWith('00')) return digits.length === 10;
  return phone.startsWith('+') || digits.startsWith('00');
};
