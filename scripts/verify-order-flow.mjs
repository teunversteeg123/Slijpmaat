import assert from 'node:assert/strict';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Run against `npm run preview`; use the supplied runtime or an installed Playwright.
const { chromium } = await import(process.env.SLIJPMAAT_PLAYWRIGHT_MODULE ?? 'playwright');
const baseUrl = process.env.SLIJPMAAT_TEST_URL ?? 'http://127.0.0.1:4173';
const browser = await chromium.launch({ headless: true, executablePath: process.env.SLIJPMAAT_CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
const errors = [];
const routes = ['/', '/particulier/', '/zakelijk/', '/werkwijze/', '/servicegebied/', '/blogs/', '/blogs/hoe-slijp-je-een-mes/', '/over-ons/', '/veelgestelde-vragen/', '/algemene-voorwaarden/', '/privacyverklaring/'];
let checks = 0;

const setup = async (width, reducedMotion = 'reduce') => {
  const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion });
  // No test visits, messages or analytics are sent to external services.
  await context.route('**/*', (route) => new URL(route.request().url()).origin === baseUrl ? route.continue() : route.abort());
  await context.addInitScript(() => {
    window.__drafts = [];
    window.open = (url) => { window.__drafts.push(String(url)); return null; };
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error' && /hydration|Minified React error/i.test(message.text())) errors.push(message.text()); });
  return { context, page };
};
const visit = async (page, route) => {
  const response = await page.goto(baseUrl + route, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  const reject = page.getByRole('button', { name: 'Alles weigeren', exact: true });
  if (await reject.isVisible()) await reject.click();
};
const text = async (locator) => (await locator.innerText()).replace(/\s+/g, ' ');
const luminance = (rgb) => rgb.slice(0, 3).map((value) => {
  const channel = value / 255;
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}).reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);

try {
  for (const width of [320, 390, 1280]) {
    const { context, page } = await setup(width);
    for (const route of routes) {
      await visit(page, route);
      assert.equal(await page.locator('h1').count(), 1, route);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} overflow at ${width}`);
      assert.equal(await page.locator('img').evaluateAll((images) => images.filter((image) => image.complete && image.naturalWidth === 0).length), 0, `${route} broken image`);
      checks++;
    }

    await visit(page, '/particulier/');
    const order = page.getByRole('button', { name: 'Bestellen via WhatsApp', exact: true });
    const colors = await order.evaluate((node) => { const style = getComputedStyle(node); return [style.color, style.backgroundColor].map((color) => color.match(/[\d.]+/g).map(Number)); });
    const light = Math.max(...colors.map(luminance));
    const dark = Math.min(...colors.map(luminance));
    assert.ok((light + 0.05) / (dark + 0.05) >= 4.5, 'button contrast');
    const receipt = page.locator('aside[aria-labelledby="calculator-summary-heading"]');
    await page.getByRole('button', { name: 'Bereken prijs & bestel', exact: true }).click();
    await page.waitForFunction(() => scrollY > 300);
    assert.equal(await page.locator('video').getAttribute('src'), null, 'reduced motion must not autoplay/download video');
    await order.click();
    assert.equal(await page.locator('#calculator-knives-heading').evaluate((node) => node === document.activeElement), true);
    await page.getByRole('button', { name: 'Meer Normaal mes', exact: true }).click();
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: /Zelf langskomen/ }).click();
    await page.locator('#calc-name-input').fill('Testpersoon');
    const discounted = await text(receipt);
    assert.ok(discounted.includes('€8,50') && discounted.includes('€3,50') && discounted.includes('€5,00'), discounted);
    assert.ok(discounted.includes('Totaal slijpbeurt') && discounted.includes('niet inbegrepen'));
    await order.click();
    const draft = await page.evaluate(() => window.__drafts.at(-1));
    const message = new URL(draft).searchParams.get('text');
    assert.ok(message.includes('Gerard Noodtstraat 57') && message.includes('StudentenMaat voordeel: − €3,50') && message.includes('Totaal geschat: €5,00'), message);
    await page.getByRole('button', { name: /Langer dan 25 cm/ }).click();
    assert.equal(await page.getByRole('button', { name: 'Minder extra groot of ander slijpwerk' }).isDisabled(), true);
    await page.getByRole('button', { name: 'Meer extra groot of ander slijpwerk' }).click();
    assert.ok((await text(receipt)).includes('Bekend slijpwerk'));
    await page.getByRole('button', { name: 'Minder Normaal mes', exact: true }).click();
    const customOnly = await text(receipt);
    assert.ok(customOnly.includes('Op aanvraag') && !customOnly.includes('€0,00'), customOnly);
    await page.screenshot({ path: join(tmpdir(), `slijpmaat-improved-consumer-${width}.png`) });

    // Cached outside-area postcode must not affect self-dropoff pricing.
    await page.getByRole('button', { name: 'Minder extra groot of ander slijpwerk' }).click();
    await page.getByRole('button', { name: 'Meer Normaal mes', exact: true }).click();
    await page.getByRole('button', { name: /Ophalen & bezorgen/ }).click();
    await page.locator('#calc-postcode-input').fill('1011 AB');
    assert.ok((await text(receipt)).includes('Op aanvraag'));
    await page.getByRole('button', { name: /Zelf langskomen/ }).click();
    assert.ok(!(await text(receipt)).includes('Prijs op aanvraag'));
    const funnelEvents = await page.evaluate(() => (window.dataLayer ?? []).map((entry) => Array.from(entry)).filter((entry) => entry[0] === 'event'));
    if (process.env.SLIJPMAAT_REQUIRE_ANALYTICS === 'true' || funnelEvents.some((entry) => entry[1] === 'order_form_start')) {
      assert.equal(funnelEvents.filter((entry) => entry[1] === 'order_form_start').length, 1);
      assert.ok(funnelEvents.some((entry) => entry[1] === 'order_validation_error'));
      assert.ok(funnelEvents.some((entry) => entry[1] === 'request_open' && entry[2].request_status === 'draft_opened_not_sent'));
      assert.ok(!funnelEvents.some((entry) => entry[1] === 'generate_lead'));
    }

    await page.getByRole('button', { name: /Ophalen & bezorgen/ }).click();
    await page.locator('#calc-address-input').fill('Teststraat 1');
    for (const [postcode, total] of [['3513 AB', '€5,00'], ['3511 AB', '€9,50'], ['3521 AB', '€12,25']]) {
      await page.locator('#calc-postcode-input').fill(postcode);
      assert.equal(await text(receipt.locator('strong').last()), total);
    }
    for (let i = 0; i < 6; i++) await page.getByRole('button', { name: 'Meer Normaal mes', exact: true }).click();
    assert.equal(await text(receipt.locator('strong').last()), '€35,00');

    await visit(page, '/zakelijk/');
    const combo = page.getByRole('combobox');
    await combo.focus(); await combo.press('ArrowDown'); await combo.press('ArrowDown');
    assert.equal(await page.getByText('Meest gekozen', { exact: true }).isVisible(), true);
    await combo.press('Enter');
    assert.equal(await text(combo), '10 tot 20 messen');
    assert.equal(await combo.evaluate((node) => node === document.activeElement), true);
    assert.equal(await page.getByRole('listbox').count(), 0);
    await combo.press('ArrowUp'); await combo.press('Escape');
    assert.equal(await combo.getAttribute('aria-expanded'), 'false');
    await combo.click(); await page.locator('#business-estimate-heading').click();
    assert.equal(await combo.getAttribute('aria-expanded'), 'false');
    await page.locator('#zakelijk-restaurant').fill('Testzaak');
    await page.locator('#zakelijk-contact').fill('Testcontact');
    await page.locator('#zakelijk-phone').fill('geen nummer');
    const whatsapp = page.getByRole('button', { name: 'Open aanvraag in WhatsApp', exact: true });
    await whatsapp.click();
    assert.equal(await page.locator('#zakelijk-phone').evaluate((node) => node === document.activeElement), true);
    assert.equal(await page.evaluate(() => window.__drafts.length), 0);
    await page.locator('#zakelijk-phone').fill('+31 6 12345678');
    await page.getByRole('button', { name: /Zelf langskomen/ }).click();
    await whatsapp.click();
    const businessDraft = await page.evaluate(() => window.__drafts.at(-1));
    assert.ok(new URL(businessDraft).searchParams.get('text').includes('Gerard Noodtstraat 57'));
    const cdp = await context.newCDPSession(page);
    await cdp.send('Page.enable');
    let emailDraft;
    cdp.on('Page.frameRequestedNavigation', (event) => { if (event.url.startsWith('mailto:')) emailDraft = event.url; });
    await page.getByRole('button', { name: 'Open aanvraag in e-mail', exact: true }).click();
    await page.waitForTimeout(150);
    assert.ok(emailDraft?.startsWith('mailto:slijpmaat@outlook.com?'), emailDraft);
    assert.ok(new URL(emailDraft).searchParams.get('body').includes('Testzaak'));
    await page.screenshot({ path: join(tmpdir(), `slijpmaat-improved-business-${width}.png`) });
    await context.close();
    checks += 16;
  }

  const { context, page } = await setup(390, 'no-preference');
  const videos = [];
  page.on('request', (request) => { if (request.url().endsWith('.mp4')) videos.push(request.url()); });
  await visit(page, '/particulier/');
  assert.equal(videos.length, 0, 'video must not download below the opening viewport');
  await page.locator('video').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => Boolean(document.querySelector('video')?.getAttribute('src')));
  assert.ok(videos.length > 0);
  await page.getByRole('button', { name: 'Bestellen via WhatsApp', exact: true }).scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('video')?.paused);
  await page.screenshot({ path: join(tmpdir(), 'slijpmaat-improved-receipt-390.png') });
  await context.close();

  // Verify delayed route chunks preserve old anchors and CSR navigation.
  const navigation = await setup(390);
  await navigation.context.route('**/assets/ParticulierenPage-*.js', async (route) => { await new Promise((resolve) => setTimeout(resolve, 300)); await route.continue(); });
  await visit(navigation.page, '/#prijzen-bestellen');
  await navigation.page.waitForFunction(() => document.querySelector('#calculator') && scrollY > 300);
  await navigation.page.locator('footer').getByRole('link', { name: 'Over ons', exact: true }).click();
  await navigation.page.getByRole('heading', { name: 'Twee Utrechtse vrienden met passie voor scherpte.', exact: true }).waitFor();
  assert.ok(new URL(navigation.page.url()).pathname === '/over-ons/');
  await navigation.context.close();
  assert.deepEqual(errors, []);
  console.log(`Browsercontrole geslaagd: ${checks} route-/formuliercontroles, video uitgesteld/gepauzeerd, WhatsApp- en Outlook-concepten zonder verzending, geen runtime-/hydrationfouten.`);
} finally { await browser.close(); }
