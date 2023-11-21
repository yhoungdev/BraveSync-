import * as puppeteer from 'puppeteer';

async function openBravePrefsInternals() {
  const browser = await puppeteer.launch({ headless: false }); // Launch Puppeteer in non-headless mode
  const page = await browser.newPage();

  try {
    await page.goto('brave://prefs-internals', { waitUntil: 'domcontentloaded' });
    await page.screenshot({path:'test.png'})
  


  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

export { openBravePrefsInternals}
