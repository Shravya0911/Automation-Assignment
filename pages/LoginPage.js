class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('input').first();
        this.passwordInput = page.locator('input').nth(1);
        this.loginButton = page.locator('button').filter({ hasText: 'Log' });
    }

    async goto() {
        await this.page.goto('https://community.cloud.automationanywhere.digital/#/login');
        await page.waitForTimeout(5000);

        await this.page.waitForLoadState('domcontentloaded');
    }

    async login(username, password) {
        await this.page.waitForLoadState('networkidle');

        await this.page.locator('input').first().click();
        await this.page.keyboard.type(username);

        await this.page.locator('input').nth(1).click();
        await this.page.keyboard.type(password);

        await this.page.locator('button').filter({ hasText: 'Log' }).click();

        await this.page.waitForTimeout(5000);
    }
}

module.exports = LoginPage;