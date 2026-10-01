import {test, expect } from "@playwright/test";

test ('Upload', async ({page}, testInfo) => {

    await page.goto('/');

    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByPlaceholder('Email').fill('segwe.bz@gmail.com');

    await page.getByPlaceholder('Password').fill('rA!ny@$14');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByRole('heading', {name: /Welcome/i})).toBeVisible();

    await page.locator('text=Menu').click();

    await page.getByRole('button', {name: 'My Profile'}).click();

    await page.getByRole('button', {name: 'Edit Profile'}).click();

    await page.locator('#profilePicture').setInputFiles('test-data/TheGoat');

    await page.getByRole('button', {name: 'Save Changes'});

    await page.screenshot({path:'screenshots/upload-success.png', fullPage: true});

    await testInfo.attach('screenshot', {path:'screenshots/upload-success.png', contentType: 'image/png'});

    await page.waitForTimeout(8000);

});