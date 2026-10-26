import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import test from 'node:test';

const load = async (name) => {
  const source = readFileSync(new URL(`../src/utils/${name}.ts`, import.meta.url), 'utf8');
  return import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString('base64')}`);
};

test('contactnummers: Nederlandse en internationale opmaak; ongeldige invoer geweigerd', async () => {
  const { isValidContactPhone } = await load('validation');
  for (const phone of ['06 12 34 56 78', '030-1234567', '+31 6 12345678', '+32 470 12 34 56', '0049 30 12345678']) assert.ok(isValidContactPhone(phone), phone);
  for (const phone of ['', 'abc', '12345', '06abc12345678', '061234567', '0000000000', '+1234567890123456']) assert.equal(isValidContactPhone(phone), false, phone);
});

test('bestelfunnel: één start, gecontroleerde selectie/foutcategorieën, aanvraag is geen verkoop', async () => {
  const { createOrderFunnel } = await load('orderFunnel');
  const events = [];
  const funnel = createOrderFunnel('consumer', (name, params) => events.push({ name, params }));
  funnel.start(); funnel.start(); funnel.select('knife_quantity'); funnel.invalid('postcode'); funnel.open('whatsapp');
  assert.deepEqual(events.map((event) => event.name), ['order_form_start', 'order_selection', 'order_validation_error', 'request_open']);
  assert.deepEqual(events.at(-1).params, { form_type: 'consumer', contact_method: 'whatsapp', request_status: 'draft_opened_not_sent' });
  assert.equal(JSON.stringify(events).includes('generate_lead'), false);
  assert.deepEqual(Object.keys(events[2].params).sort(), ['field', 'form_type']);
});
