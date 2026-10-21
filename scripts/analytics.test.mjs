import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import test from 'node:test';

let moduleCounter = 0;

const loadAnalytics = async () => {
  const source = readFileSync(new URL('../src/utils/analytics.ts', import.meta.url), 'utf8')
    .replace('import.meta.env.VITE_GA_MEASUREMENT_ID', JSON.stringify('G-TEST123'));
  const compiled = stripTypeScriptTypes(source);

  const scripts = [];
  const window = {
    location: { hostname: 'slijpmaat.nl', href: 'https://slijpmaat.nl/', pathname: '/' },
  };
  const document = {
    cookie: '',
    title: 'Slijpmaat',
    createElement: () => ({}),
    head: { appendChild: (script) => scripts.push(script) },
  };
  globalThis.window = window;
  globalThis.document = document;
  const analytics = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}#${moduleCounter++}`);
  return { analytics, window, scripts };
};

test('gtag zet standaard arguments-objecten en consent vóór de config in de dataLayer', async () => {
  const { analytics, window, scripts } = await loadAnalytics();
  analytics.trackPageView('/', 'Slijpmaat');
  analytics.initializeGoogleAnalytics();

  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, 'https://www.googletagmanager.com/gtag/js?id=G-TEST123');
  assert.deepEqual(window.dataLayer.map((entry) => entry[0]), ['consent', 'js', 'config', 'event']);
  assert.equal(window.dataLayer[0][1], 'default');
  assert.equal(window.dataLayer[2][1], 'G-TEST123');
  assert.equal(window.dataLayer[3][1], 'page_view');
  assert.equal(Array.isArray(window.dataLayer[0]), false);
  assert.equal(Object.prototype.toString.call(window.dataLayer[0]), '[object Arguments]');
});

test('toestemming verzendt een nieuwe volledige page_view, maar geen dubbele bij herbevestiging', async () => {
  const { analytics, window } = await loadAnalytics();
  analytics.trackPageView('/', 'Slijpmaat');
  analytics.initializeGoogleAnalytics();
  analytics.enableGoogleAnalytics();
  analytics.enableGoogleAnalytics();

  const calls = window.dataLayer.map((entry) => Array.from(entry));
  const consentUpdateIndex = calls.findIndex((entry) => entry[0] === 'consent' && entry[1] === 'update');
  const pageViewIndices = calls.flatMap((entry, index) => entry[0] === 'event' && entry[1] === 'page_view' ? [index] : []);

  assert.equal(calls[consentUpdateIndex][2].analytics_storage, 'granted');
  assert.equal(pageViewIndices.length, 2);
  assert.ok(pageViewIndices[1] > consentUpdateIndex);
});
