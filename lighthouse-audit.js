import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';
import fs from 'fs';

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    preset: 'desktop'
  };

  try {
    const runnerResult = await lighthouse('http://localhost:4173', options);
    
    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;
    fs.writeFileSync('lighthouse-report.html', reportHtml);

    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score:', runnerResult.lhr.categories.performance.score * 100);
    console.log('Accessibility score:', runnerResult.lhr.categories.accessibility.score * 100);
    console.log('Best Practices score:', runnerResult.lhr.categories['best-practices'].score * 100);
    console.log('SEO score:', runnerResult.lhr.categories.seo.score * 100);

    await chrome.kill();
  } catch (error) {
    console.error('Error running Lighthouse:', error);
    await chrome.kill();
  }
}

runLighthouse();