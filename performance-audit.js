import puppeteer from 'puppeteer';

async function runAudit() {
  // Launch browser
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1280,
      height: 720
    }
  });

  // Create a new page
  const page = await browser.newPage();
  
  try {
    // Navigate to the page
    await page.goto('http://localhost:4173', {
      waitUntil: ['networkidle0', 'domcontentloaded']
    });

    // Run Lighthouse audit
    const metrics = await page.metrics();
    const performance = await page.evaluate(() => {
      return {
        fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
        lcp: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
        cls: performance.getEntriesByType('layout-shift').reduce((sum, shift) => sum + shift.value, 0),
      };
    });

    console.log('Performance Metrics:');
    console.log('First Contentful Paint:', performance.fcp?.toFixed(2) + 'ms');
    console.log('Largest Contentful Paint:', performance.lcp?.toFixed(2) + 'ms');
    console.log('Cumulative Layout Shift:', performance.cls?.toFixed(3));
    console.log('\nPage Metrics:', metrics);

  } catch (error) {
    console.error('Error during audit:', error);
  } finally {
    await browser.close();
  }
}

runAudit();