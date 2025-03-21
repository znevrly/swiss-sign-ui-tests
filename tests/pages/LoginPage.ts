import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    
    // Locators
    private readonly emailInput: Locator;
    private readonly nextButton: Locator;
    private readonly createAccountButton: Locator;
    private readonly createAccountTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.nextButton = page.locator('#login-email');
        this.createAccountButton = page.locator('#CREATE_ACCOUNT button');
        this.createAccountTitle = page.getByText('Create a SwissID account');
    }

    async navigate() {
        await this.page.goto('https://login.swissid.ch/login/login-email');
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickNext() {
        await this.nextButton.click();
    }

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }

    async isCreateAccountTitleVisible(): Promise<boolean> {
        return await this.createAccountTitle.isVisible();
    }
} 