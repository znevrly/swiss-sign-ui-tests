import { Page, Locator } from '@playwright/test';

export interface RegistrationData {
    salutation: 'Ms.' | 'Mr.';
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class RegistrationPage {
    private page: Page;
    
    // Locators
    private readonly salutationMs: Locator;
    private readonly salutationMr: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly gtcCheckbox: Locator;
    private readonly submitButton: Locator;
    private readonly registrationTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.salutationMs = page.locator('#salutation-ms');
        this.salutationMr = page.locator('#salutation-mr');
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#newPassword');
        this.confirmPasswordInput = page.locator('#confirmPassword');
        this.gtcCheckbox = page.locator('#gtc');
        this.submitButton = page.locator('#nextButton');
        this.registrationTitle = page.getByText('Create a SwissID account');
    }

    async fillRegistrationForm(data: RegistrationData) {
        if (data.salutation === 'Ms.') {
            await this.salutationMs.click();
        } else {
            await this.salutationMr.click();
        }
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
        await this.passwordInput.fill(data.password);
        await this.confirmPasswordInput.fill(data.password);
        await this.gtcCheckbox.click();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async isRegistrationFormVisible(): Promise<boolean> {
        try {
            await this.registrationTitle.waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }
} 