import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegistrationPage, RegistrationData } from '../pages/RegistrationPage';

export class LoginFlow {
    private loginPage: LoginPage;
    private registrationPage: RegistrationPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.registrationPage = new RegistrationPage(page);
    }

    async navigateToLoginPage() {
        await this.loginPage.navigate();
    }

    async createNewAccount() {
        await this.loginPage.clickCreateAccount();
    }

    async fillRegistrationForm(data: RegistrationData) {
        await this.registrationPage.fillRegistrationForm(data);
    }

    async submitRegistration() {
        await this.registrationPage.submitForm();
    }

    async isRegistrationFormVisible(): Promise<boolean> {
        return await this.registrationPage.isRegistrationFormVisible();
    }

    async verifyCreateAccountPage() {
        return await this.loginPage.isCreateAccountTitleVisible();
    }
} 