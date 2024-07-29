import {test, expect} from '@playwright/test';

test('My third Test',async({page})=>{
    await page.goto('https://www.google.com');

    // Expecting a title
    await expect(page).toHaveTitle('Google')

});