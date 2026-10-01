import { test} from "../../Fixtures/CustomFixtures";
import { LoginPage } from "../../Pages/LoginPage";
import { ValidUsers } from "../../Test-data/TestData";
import { expect } from "@playwright/test";
import { Page as page } from "@playwright/test";

test.describe('Positive tests', () => {

test('login with valid credentials test', async ({homePage,loginPage}, testInfo) => {
    
    await homePage.GoToUrl('/');

    await homePage.NevigateToLoginForm();

    await loginPage.UserLogin(ValidUsers.TestAccount.username,ValidUsers.TestAccount.password);

    //await page.screenshot( {path: 'screenshots/login-success.png', fullPage: true});

});

});

test.describe('Negative test', () => {

    test('login with Invalid credentials', async ({homePage,loginPage}) => {

        await homePage.GoToUrl('/');

        await homePage.NevigateToLoginForm();

        await loginPage.UserLogin(ValidUsers.InvalidCredentials.username, ValidUsers.InvalidCredentials.password);


    });
});
