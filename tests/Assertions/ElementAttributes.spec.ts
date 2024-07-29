import {test, expect} from '@playwright/test'

test('Element Attributes Assertion', async({page})=>{
    await page.goto('https://testproject-osondemand.orangehrm.com/auth/login');
    await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('name', 'username');
    await expect(page.locator('[placeholder="Username"]')).toHaveAttribute('class', /oxd-input/);

    await page.close();

})