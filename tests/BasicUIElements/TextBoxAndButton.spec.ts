import {test} from '@playwright/test';

test('Lohin Test with Fill method for orange HRM', async({page}) => {
    await page.goto('https://testproject-osondemand.orangehrm.com/auth/login');
    await page.locator('input[placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('1HVbH@f@rQ@1')
    await page.locator('input[placeholder="Password"]').press('Enter')
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();

})

test('Lohin Test with press sequentially method for orange HRM', async({page}) => {
    await page.goto('https://testproject-osondemand.orangehrm.com/auth/login');
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin')
    await page.locator('input[placeholder="Password"]').pressSequentially('1HVbH@f@rQ@1')
    await page.locator('input[placeholder="Password"]').press('Enter')
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();

})

test('Lohin Test with press sequentially method without delay for orange HRM', async({page}) => {
    await page.goto('https://testproject-osondemand.orangehrm.com/auth/login');
    await page.locator('input[placeholder="Username"]').pressSequentially('Admin', {delay:200})
    await page.locator('input[placeholder="Password"]').pressSequentially('1HVbH@f@rQ@1', {delay:200})
    await page.locator('input[placeholder="Password"]').press('Enter')
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close();

})
















