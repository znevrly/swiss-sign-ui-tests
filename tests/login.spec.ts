import { test, expect } from '@playwright/test';
import { LoginFlow } from './flows/LoginFlow';

test.describe('SwissID Account Creation', () => {
    let loginFlow: LoginFlow;

    test.beforeEach(async ({ page }) => {
        loginFlow = new LoginFlow(page);
    });

    test('should be able to navigate to create account page', async ({ page }) => {
        // Navigate to login page
        await loginFlow.navigateToLoginPage();

        // Verify we're on the login page
        await expect(page).toHaveTitle(/SwissID/);

        // Click create account
        await loginFlow.createNewAccount();

        // Verify we're on the create account page
        const isCreateAccountPageVisible = await loginFlow.verifyCreateAccountPage();
        expect(isCreateAccountPageVisible).toBeTruthy();
    });
}); 