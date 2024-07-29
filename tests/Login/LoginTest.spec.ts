import {test} from '@playwright/test';

test('Lohin Test for orange HRM', async({page}) => {
    await page.goto('https://testproject-osondemand.orangehrm.com/auth/login');
    await page.locator('input[placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('1HVbH@f@rQ@1')
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();

})