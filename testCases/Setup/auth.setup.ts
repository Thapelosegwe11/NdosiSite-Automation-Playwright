import { expect, test as setup } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { HomePage } from '../../Pages/HomePage';

const authFile = 'playwright/.auth/user.json';

setup('authentication', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await homePage.GoToUrl('/');
    await homePage.NevigateToLoginForm();
    await loginPage.UserLogin('email@example.com', 'passwordExample');
    await expect(page).toHaveTitle(/Ndosi Test Automation/i);
    


    await page.context().storageState({ path: authFile});
})