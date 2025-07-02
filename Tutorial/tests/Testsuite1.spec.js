const { test } = require('@playwright/test');

test('Test case 1', async ({ page }) => {
    // const context = browser.newContext(); /* for adding cookies*/
    // const page = await context.newPage();

    await page.goto('');

});