const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  const sites = [
    { url: 'https://pilotcompasstest.com', name: 'pilotcompasstest' },
    { url: 'https://nepali-imposter.vercel.app', name: 'imposter' },
    { url: 'https://arthneeti.vercel.app', name: 'arthneeti' },
  ];

  for (const site of sites) {
    try {
      const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ 
        path: `/Users/ujjwaldhungana/rookie-studio/public/projects/${site.name}.png`,
        fullPage: false 
      });
      await page.close();
      console.log(`Captured: ${site.name}`);
    } catch (e) {
      console.log(`Failed: ${site.name} - ${e.message}`);
    }
  }

  await browser.close();
})();
