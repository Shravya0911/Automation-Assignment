const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Navigate to Automation page', async ({ page }) => {

    // 👉 Directly open home (you must already be logged in manually)
    await page.goto('https://community.cloud.automationanywhere.digital/#/home');

    const homePage = new HomePage(page);

    await homePage.clickAutomation();

    // Assertion
    await expect(page).toHaveURL(/automation/);
});