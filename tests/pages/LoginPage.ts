import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    
    // Locators
    private readonly emailInput: Locator;
    private readonly nextButton: Locator;
    private readonly createAccountButton: Locator;
    private readonly createAccountTitle: Locator;
    private readonly verifyHumanCheckbox: Locator;
    private readonly robotProtectionTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.nextButton = page.locator('#login-email');
        this.createAccountButton = page.locator('#CREATE_ACCOUNT button');
        this.createAccountTitle = page.getByText('Create a SwissID account');
        this.verifyHumanCheckbox = page.getByLabel('Verify you are human');
        this.robotProtectionTitle = page.getByText('Before creating your account...');
    }

    async navigate() {
        await this.page.goto('https://login.swissid.ch/login/login-email');
        // Add human-like behavior to avoid bot detection
        await this.page.mouse.move(100, 100);
        await this.page.waitForTimeout(1000);
    }

    async enterEmail(email: string) {
        // Type email with human-like delays
        for (const char of email) {
            await this.emailInput.type(char, { delay: 100 });
        }
    }

    async clickNext() {
        await this.nextButton.click();
    }

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }

    async isRobotProtectionVisible(): Promise<boolean> {
        try {
            await this.robotProtectionTitle.waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
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