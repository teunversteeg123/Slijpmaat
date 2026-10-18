import assert from 'node:assert/strict';
import test from 'node:test';
import {
  FREE_DELIVERY_THRESHOLD_CENTS,
  SERVICE_AREA_GROUPS,
  ZONE_ALWAYS_FREE,
  ZONE_OUTER,
  ZONE_STANDARD,
  getDeliveryFeeCents,
  getDeliveryZone,
  getDutchPostcodePrefix,
  isValidDutchPostcode,
  normalizeDutchPostcode,
} from '../src/data/delivery.ts';

test('normaliseert volledige Nederlandse postcodes centraal', () => {
  assert.equal(normalizeDutchPostcode('3513 ab'), '3513AB');
  assert.equal(getDutchPostcodePrefix(' 3513 AB '), '3513');
  assert.equal(isValidDutchPostcode('3513 ab'), true);
  assert.equal(isValidDutchPostcode('3513A'), false);
  assert.equal(isValidDutchPostcode('0513 AB'), false);
});

test('rekent onder €35 het bevestigde tarief per postcodezone', () => {
  assert.equal(getDeliveryFeeCents('3513 AB', 3499, false), 0);
  assert.equal(getDeliveryFeeCents('3511 AB', 3499, false), 450);
  assert.equal(getDeliveryFeeCents('3521 AB', 3499, false), 725);
  assert.equal(getDeliveryFeeCents('3451 AB', 3499, false), null);
  assert.equal(getDeliveryFeeCents('3513A', 3499, false), null);
});

test('maakt ondersteunde bezorging gratis vanaf exact €35', () => {
  for (const postcode of ['3513', '3511', '3521']) {
    assert.equal(getDeliveryFeeCents(postcode, FREE_DELIVERY_THRESHOLD_CENTS, false), 0);
    assert.equal(getDeliveryFeeCents(postcode, FREE_DELIVERY_THRESHOLD_CENTS + 1, false), 0);
  }
  assert.equal(getDeliveryFeeCents('3451', FREE_DELIVERY_THRESHOLD_CENTS, false), null);
});

test('herberekent wanneer de bestelwaarde rond de gratis grens wijzigt', () => {
  assert.equal(getDeliveryFeeCents('3511', 3499, false), 450);
  assert.equal(getDeliveryFeeCents('3511', 3500, false), 0);
  assert.equal(getDeliveryFeeCents('3511', 3400, false), 450);

  assert.equal(getDeliveryFeeCents('3521', 3499, false), 725);
  assert.equal(getDeliveryFeeCents('3521', 3500, false), 0);
  assert.equal(getDeliveryFeeCents('3521', 3400, false), 725);
});

test('zelf brengen en ophalen blijft altijd gratis', () => {
  assert.equal(getDeliveryFeeCents('3511', 1000, true), 0);
  assert.equal(getDeliveryFeeCents('3451', 1000, true), 0);
});

test('alle bevestigde postcodegroepen blijven centraal ingedeeld', () => {
  assert.equal(getDeliveryZone('3571 ZZ'), 'always-free');
  assert.equal(getDeliveryZone('3583 AA'), 'standard');
  assert.equal(getDeliveryZone('3585 AA'), 'outer');
  assert.equal(getDeliveryZone('1234 AB'), 'outside');
});

test('wijkoverzicht bevat iedere bevestigde postcode precies één keer met hetzelfde tarief', () => {
  const listedPostcodes = SERVICE_AREA_GROUPS.flatMap((area) => area.postcodes);
  const confirmedPostcodes = [...ZONE_ALWAYS_FREE, ...ZONE_STANDARD, ...ZONE_OUTER];

  assert.equal(new Set(listedPostcodes).size, listedPostcodes.length);
  assert.deepEqual([...listedPostcodes].sort(), [...confirmedPostcodes].sort());

  for (const postcode of listedPostcodes) {
    const zone = getDeliveryZone(postcode);
    const expectedFee = zone === 'always-free' ? 0 : zone === 'standard' ? 450 : 725;
    assert.equal(getDeliveryFeeCents(postcode, 0, false), expectedFee);
  }
});
