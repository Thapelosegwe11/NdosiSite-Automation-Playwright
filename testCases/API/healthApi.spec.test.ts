import {test, expect} from '@playwright/test';

test('API Information', async ({ request }) => {

    const response = request.get('https://www.ndosiautomation.co.za/APIDEV/');
});

test('Health API Check', async ({ request}) => {

    const response = await request.get('https://www.ndosiautomation.co.za/APIDEV/health');

    expect( (await response).status()).toBe(200);

    const responseBody = response.text();

    console.log(responseBody);

});