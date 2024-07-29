import {test, expect} from '@playwright/test'

test('Enabled / Disabled Assertion', async({page})=>{
    await page.goto('https://letcode.in/buttons');
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
    await page.close();

})