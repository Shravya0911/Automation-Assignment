class HomePage {
    constructor(page) {
        this.page = page;
        this.automationMenu = page.getByRole('link', { name: 'Automation' });
    }

    async clickAutomation() {
        await this.automationMenu.waitFor({ state: 'visible' });
        await this.automationMenu.click();
    }
}

module.exports = HomePage;