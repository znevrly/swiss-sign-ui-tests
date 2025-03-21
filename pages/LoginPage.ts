import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    
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
        await this.page.goto('/login/login-email');
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
        try {
            await this.createAccountTitle.waitFor({ state: 'visible', timeout: 30000 });
            return true;
        } catch (error) {
            return false;
        }
    }
} 