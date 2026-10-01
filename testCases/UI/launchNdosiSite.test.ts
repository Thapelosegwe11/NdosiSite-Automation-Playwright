import {test, expect} from '@playwright/test';

test('Launch Ndosi DevSite @smoke', async ({page}) => {

    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await expect(page).toHaveURL(/Ndosi/i);
});

test('Verify PageTitle', {tag: ['@sanity', '@regression']}, async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');

    await expect(page).toHaveTitle('Ndosi Test Automation');
});