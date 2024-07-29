import {test, expect} from '@playwright/test'

test('Screenshot webpadge Assertion', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
    await page.close();

})