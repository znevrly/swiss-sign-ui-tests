import { test, expect } from '@playwright/test';
import { LoginFlow } from '../flows/LoginFlow';
import { RegistrationData, Salutation } from '../pages/RegistrationPage';

test.describe('SwissID Account Creation', () => {
    let loginFlow: LoginFlow;

    test.beforeEach(async ({ page }) => {
        loginFlow = new LoginFlow(page);
    });

    test('should be able to navigate to create account page and verify the page', async ({ page }) => {
        await loginFlow.navigateToLoginPage();
        await expect(page).toHaveTitle(/SwissID/);
        await loginFlow.createNewAccount();
        // await expect(page.getByText('Before creating your account...')).toBeVisible();
    });

    test('should be able to fill registration form when robot protection is disabled', async ({ page }) => {
        await loginFlow.navigateToLoginPage();
        await loginFlow.createNewAccount();
        
        await expect(await loginFlow.isRegistrationFormVisible()).toBeTruthy();
        const registrationData: RegistrationData = {
            salutation: Salutation.MR,
            firstName: 'Zbynek',
            lastName: 'Nevrly',
            email: 'znevrly@gmail.com',
            password: 'securepass123!'
        };
        await loginFlow.fillRegistrationForm(registrationData);
        await loginFlow.submitRegistration();
    });
}); 