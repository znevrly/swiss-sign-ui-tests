import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class LoginFlow {
    private loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async navigateToLoginPage() {
        await this.loginPage.navigate();
    }

    async createNewAccount() {
        await this.loginPage.clickCreateAccount();
    }

    async verifyCreateAccountPage() {
        return await this.loginPage.isCreateAccountTitleVisible();
    }
} 