import {test, expect} from '@playwright/test';

test('goated', async ({page}) => {

    await page.goto('https://www.facebook.com');
    
    await page.getByRole('button', {name: 'login'}).click();

    await page.getByLabel('username').fill('segwe.bz@gmail.com');

    await page.getByLabel('password').fill('rA!ny@$1411');

    await page.getByRole('button', {name: 'submit'}).click();

    await expect(page).toHaveTitle(/Dashboard/i);
})