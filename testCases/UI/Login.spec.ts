import {test, expect} from '@playwright/test';


test.beforeEach( async ({page}) => {
    
    await page.goto('/');

    await page.getByRole('button', {name: 'Login'}).click();
    
});


test.describe('positive tests', () => {
    

test('login with valid credentials test', async ({page}, testInfo) => {

    await page.getByPlaceholder('Email').fill('Jamesbonds@example.com');

    await page.getByPlaceholder('Password').fill('@12345678');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByRole('heading', {name: /Welcome back/})).toBeVisible();

    await page.screenshot({path: 'screenshots/login-success.png', fullPage: true });
    
    await testInfo.attach('screenshot', { path: 'screenshots/login-success.png', contentType: 'image/png' });

    await page.waitForTimeout(9000);

});

});


test.describe('negative login tests', () => {


test('login with invalid email test', async ({page}, testInfo) => {

    await page.getByPlaceholder('Email').fill('InvalidEmail@example.com');

    await page.getByPlaceholder('Password').fill('@12345678');

    await page.getByRole('button', {name: 'Login'}).click();

    await page.screenshot({path: 'screenshots/invalid-email-success.png', fullPage: true });
    
    await testInfo.attach('screenshot', { path: 'screenshots/invalid-email-success.png', contentType: 'image/png' });

    await page.waitForTimeout(9000);

});



test('login with invalid password test', async ({page}, testInfo) => {

    await page.getByPlaceholder('Email').fill('Jamesbonds@example.com');

    await page.getByPlaceholder('Password').fill('InvalidPassword');

    await page.getByRole('button', {name: 'Login'}).click();

    await page.screenshot({path: 'screenshots/invalid-password-success.png', fullPage: true });
    
    await testInfo.attach('screenshot', { path: 'screenshots/invalid-password-unsuccessful.png', contentType: 'image/png' });

    await page.waitForTimeout(9000);

});


});