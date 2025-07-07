async function login(page, url) {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const usrnamefield = await page.locator('#username');
    const usrpwdfield = await page.locator('#password');
    // const adminchckbox = await page.locator('.checkmark').nth(0);
    const checkbox = await page.locator('#terms');
    const signinbtn = await page.locator('#signInBtn');

    await usrnamefield.fill("rahulshettyacademy");
    await usrpwdfield.fill("learning");
    await signinbtn.click();
}


module.exports = { login }