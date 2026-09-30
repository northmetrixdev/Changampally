const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await chromium.launch();
        const page = await browser.newPage();

        console.log('Navigating to changampally.com/departments...');
        await page.goto('https://changampally.com/departments', { waitUntil: 'domcontentloaded', timeout: 60000 });

        console.log('Waiting 8 seconds for data to stream in...');
        await page.waitForTimeout(8000);

        console.log('Extracting text content...');
        const text = await page.evaluate(() => document.body.innerText);

        fs.writeFileSync('depts_scraped.txt', text);
        console.log('Successfully saved to depts_scraped.txt');

        await browser.close();
    } catch (err) {
        console.error('Error during scraping:', err);
        process.exit(1);
    }
})();
