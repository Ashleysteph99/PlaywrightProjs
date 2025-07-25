const { test, expect } = require('@playwright/test');
const { login } = require('../helperclasses/helper.js');

const url = "https://rahulshettyacademy.com/loginpagePractise/";

test('Check if title and URL is proper', async ({ page }) => {
    // const context = browser.newContext(); /* for adding cookies*/
    // const page = await context.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const titleofpage = await page.title();
    console.log(`Title of the page is "${titleofpage}"`);
    console.log(await page.url());

});

test('Check if correct error message is shown on incorrect mail and email', async ({ page }) => {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const usrnamefield = await page.locator('#username');
    const usrpwdfield = await page.locator('#password');
    const currenturl = await page.url();
    const adminchckbox = await page.locator('.checkmark').nth(0);
    const checkbox = await page.locator('#terms');
    const signinbtn = await page.locator('#signInBtn');

    await usrnamefield.fill("usrname");
    await usrpwdfield.fill("usrname");

    console.log(`User name field is editable? : ${await usrnamefield.isEditable()}`);
    console.log(`Password field is editable?: ${await usrpwdfield.isEditable()}`);
    console.log(`Current url is ${currenturl}`);
    await adminchckbox.click();
    await checkbox.click();
    await signinbtn.click();
    await expect(await page.locator('.alert.alert-danger')).toHaveText("Incorrect username/password.");
    console.log((await page.locator('.alert.alert-danger').textContent() || '').trim().replace(/\s+/g, ' '));

});

test('Login success on adding correct credentials and homepage should be loaded', async ({ page }) => {

    await login(page, url);
    await page.locator(".navbar-brand").nth(0).waitFor();
    console.log(page.url());

    const names = await page.locator(".card-body a").allTextContents();
    console.log(names);


});

test.only('Check if dropdown is clickable or not', async ({ page }) => {
    await page.goto(url);
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption("Consultant");
    await page.locator('.checkmark').last().click();
    await page.pause();

});