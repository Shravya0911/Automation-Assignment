const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('User should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
 
    await loginPage.goto();

    await expect(page).not.toHaveURL(/login/);
});