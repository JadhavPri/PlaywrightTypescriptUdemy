import {test, expect} from '@playwright/test'

test('Webpage URL Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Partial URL assertion
    await expect(page).toHaveURL(/demo.orangehrmlive/);
    await page.close();

})


test('Webpage Title Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // Full title Assertion
    await expect(page).toHaveTitle('OrangeHRM');

    // Partial title assertion
    await expect(page).toHaveTitle(/HRM/);
    await page.close();

})