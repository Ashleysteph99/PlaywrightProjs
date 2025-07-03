const { test } = require('@playwright/test');

test.only('Test case 1', async ({ page }) => {
    // const context = browser.newContext(); /* for adding cookies*/
    // const page = await context.newPage();

    await page.goto('https://playace.co/?city=0');
    console.log(`the page title is ${await page.title()}`);

});