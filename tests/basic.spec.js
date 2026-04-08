const { test, expect } = require('@playwright/test');

test('Verify homepage loads correctly', async ({ page }) => {

    await page.goto('https://www.automationanywhere.com/');

    await expect(page).toHaveURL(/automationanywhere/);

    await expect(page).toHaveTitle(/Automation Anywhere/);
});