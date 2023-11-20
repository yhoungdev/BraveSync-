import puppeteer from 'puppeteer';

const handleBackup = async  () => {
  const browser = await puppeteer.launch({headless: 'new' , args: ['--disable-web-security']}); 
  const page = await browser.newPage();
  const redirectPath = `file://${__dirname}/../views/redirect.html`;
  await page.goto(redirectPath)
  await page.screenshot({ path: 'brave_bookmarks.png' });

  
  await browser.close()
};

export { handleBackup };
