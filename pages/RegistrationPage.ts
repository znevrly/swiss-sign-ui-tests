import { Page, Locator } from '@playwright/test';

export enum Salutation {
    MS = 'Ms.',
    MR = 'Mr.'
}

export interface RegistrationData {
    salutation: Salutation;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class RegistrationPage {
    private readonly page: Page;
    
    private readonly salutationLocators: Record<Salutation, Locator>;
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

        this.salutationLocators = {
            [Salutation.MS]: page.locator('#salutation-ms'),
            [Salutation.MR]: page.locator('#salutation-mr')
        };
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#newPassword');
        this.confirmPasswordInput = page.locator('#confirmPassword');
        this.gtcCheckbox = page.locator('#gtc');
        this.submitButton = page.locator('#nextButton');
        this.registrationTitle = page.getByText('Create a SwissID account');
    }

    /**
     * Fills out the registration form with provided data
     * @param data Registration data to fill in the form
     */
    async fillRegistrationForm(data: RegistrationData): Promise<void> {
        await this.selectSalutation(data.salutation);
        await this.fillPersonalInfo(data);
        await this.fillCredentials(data);
        await this.acceptTerms();
    }

    /**
     * Submits the registration form
     */
    async submitForm(): Promise<void> {
        await this.submitButton.click();
    }

    /**
     * Checks if the registration form is visible on the page
     * @returns Promise<boolean> indicating if the form is visible
     */
    async isRegistrationFormVisible(): Promise<boolean> {
        try {
            await this.registrationTitle.waitFor({ state: 'visible', timeout: 10000 });
            return true;
        } catch (error) {
            return false;
        }
    }

    private async selectSalutation(salutation: Salutation): Promise<void> {
        await this.salutationLocators[salutation].click();
    }

    private async fillPersonalInfo(data: RegistrationData): Promise<void> {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
    }

    private async fillCredentials(data: RegistrationData): Promise<void> {
        await this.passwordInput.fill(data.password);
        await this.confirmPasswordInput.fill(data.password);
    }

    private async acceptTerms(): Promise<void> {
        await this.gtcCheckbox.click();
    }
} 