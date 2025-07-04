const { test } = require('@playwright/test');

test.only('Check if Home page title is proper', async ({ page }) => {
    // const context = browser.newContext(); /* for adding cookies*/
    // const page = await context.newPage();

    await page.goto('https://playace.co/?city=0', { waitUntil: 'domcontentloaded' });
    const titleofpage = await page.title();
    console.log(`Title of the page is ${titleofpage}`);



});